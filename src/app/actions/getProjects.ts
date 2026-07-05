"use server";

export interface VercelProjectData {
  id: string;
  name: string;
  url: string;
  updatedAt: number;
  repoUrl?: string;
}

export async function getProjects(): Promise<VercelProjectData[] | null> {
  const token = process.env.VERCEL_ACCESS_TOKEN;

  if (!token) {
    console.warn("getProjects: VERCEL_ACCESS_TOKEN no está definido en las variables de entorno.");
    return null;
  }

  try {
    // La API v9 de Vercel para listar proyectos del usuario/cuenta
    const response = await fetch("https://api.vercel.com/v9/projects", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 3600, // Cachear el resultado por 1 hora (ISR)
        tags: ["vercel-projects"],
      },
    });

    if (!response.ok) {
      console.error(`getProjects: La API de Vercel devolvió un error status ${response.status}`);
      return null;
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.projects)) {
      console.error("getProjects: Estructura de respuesta de Vercel no válida", data);
      return null;
    }

    // Mapeamos los datos crudos de Vercel a nuestra interfaz limpia
    const mappedProjects: VercelProjectData[] = data.projects.map((project: any) => {
      // Determinar la mejor URL de producción disponible.
      // Evitamos las URLs de despliegue preliminar (latestDeployments[0].url) ya que Vercel les activa
      // la "Protección de Despliegue" (Login con Vercel) por defecto. La URL de producción principal
      // ({proyecto}.vercel.app) es pública por defecto.
      let projectUrl = "";
      if (project.targets?.production?.url) {
        projectUrl = project.targets.production.url;
      } else {
        projectUrl = `${project.name}.vercel.app`;
      }

      // Asegurar que comience con https://
      if (projectUrl && !projectUrl.startsWith("http://") && !projectUrl.startsWith("https://")) {
        projectUrl = `https://${projectUrl}`;
      }

      // Reconstruir la URL del repositorio si está enlazado a GitHub
      let repoUrl: string | undefined = undefined;
      if (project.link && project.link.type === "github") {
        repoUrl = `https://github.com/${project.link.org}/${project.link.repo}`;
      }

      return {
        id: project.id,
        name: project.name,
        url: projectUrl,
        updatedAt: project.updatedAt,
        repoUrl,
      };
    });

    return mappedProjects;
  } catch (error) {
    console.error("getProjects: Error al realizar la petición a la API de Vercel", error);
    return null;
  }
}
