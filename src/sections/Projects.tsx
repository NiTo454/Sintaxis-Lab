"use client";
import { useState, useEffect } from "react";
import { ExternalLink, FolderCode, Activity, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { getProjects, VercelProjectData } from "@/app/actions/getProjects";

interface Project {
  title: string;
  desc: string;
  link: string;
  tags: string[];
  image?: string;
  isDynamic?: boolean;
  updatedAt?: number;
}

const STATIC_PROJECTS: Project[] = [
  {
    title: "Sistema de Control Escolar",
    desc: "Desarrollamos una plataforma para la UTVAM que usa códigos QR para controlar el acceso y registro de alumnos.",
    link: "https://utvam.imagilex.com.mx/pasaporte/",
    tags: ["Seguridad", "QR", "Sistemas"]
  },
  {
    title: "Credenciales Digitales",
    desc: "Un prototipo moderno para que empresas o escuelas manejen sus identificaciones de forma 100% digital.",
    link: "https://pasaporte-ideas.vercel.app/",
    tags: ["Identidad", "Diseño", "Web"]
  },
  {
    title: "Muestra de Catálogo Digital",
    desc: "Una página web diseñada para cargar rápido en celulares y mostrar servicios de forma atractiva.",
    link: "https://mi-web-bay.vercel.app/",
    tags: ["Portfolio", "Negocios", "Vite"]
  },
  {
    title: "Taxi Mary",
    desc: "Landing page moderna y rápida diseñada para un servicio de transporte y taxis locales.",
    link: "https://taxi-mary.vercel.app/",
    tags: ["Transporte", "Landing Page", "Web"]
  }
];

// Mapeo para enriquecer la información cruda que viene de Vercel
const PROJECT_METADATA_MAP: Record<string, { title: string; desc: string; tags: string[]; image?: string }> = {
  "pasaporte-ideas": {
    title: "Credenciales Digitales",
    desc: "Un prototipo moderno para que empresas o escuelas manejen sus identificaciones de forma 100% digital.",
    tags: ["Identidad", "Diseño", "Vercel"]
  },
  "mi-web": {
    title: "Catálogo Digital",
    desc: "Una vitrina digital optimizada para móviles que expone servicios de forma atractiva y ágil.",
    tags: ["Catálogo", "Vite", "Producción"]
  },
  "taxi-mary-landing": {
    title: "Taxi Mary Landing",
    desc: "Landing page moderna, rápida y optimizada para la conversión de clientes de transporte local.",
    tags: ["Transporte", "Página de Destino", "SEO"]
  },
  "taxi-manrrique": {
    title: "Taxi Manrrique",
    desc: "Sitio web corporativo rápido y limpio para servicios de transporte privado y taxis locales.",
    tags: ["Transporte", "Negocios", "Rápido"]
  },
  "doble-tt": {
    title: "Doble TT",
    desc: "Plataforma web interactiva desarrollada para la gestión de servicios y contacto directo.",
    tags: ["Web", "React", "Servicios"]
  },
  "sintaxis-lab-xuse": {
    title: "Sintaxis Lab Xuse",
    desc: "Landing page secundaria de Sintaxis Lab optimizada para pruebas de despliegue rápido y análisis SEO.",
    tags: ["Next.js", "Vercel", "QA"]
  },
  "sintaxis-lab": {
    title: "Sintaxis Lab Platform",
    desc: "Nuestra plataforma corporativa principal diseñada con interfaces interactiva de comandos, fondos dinámicos y animaciones 3D.",
    tags: ["Next.js", "React 3D", "Tailwind CSS", "Producción"]
  }
};

function formatKebabCase(str: string): string {
  return str
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Projects() {
  const [projectList, setProjectList] = useState<Project[]>(STATIC_PROJECTS);
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState<"vercel" | "local">("local");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    async function loadProjects() {
      try {
        const vercelData = await getProjects();
        if (vercelData && vercelData.length > 0) {
          const vercelMapped = vercelData.map(vp => {
            const metadata = PROJECT_METADATA_MAP[vp.name];
            return {
              title: metadata?.title || formatKebabCase(vp.name),
              desc: metadata?.desc || "Proyecto web desplegado automáticamente en la plataforma en la nube Vercel.",
              link: vp.url,
              tags: metadata?.tags || ["Web App", "Vercel", "Live"],
              image: metadata?.image,
              isDynamic: true,
              updatedAt: vp.updatedAt
            };
          });

          // Combinar con los proyectos locales que no están desplegados en Vercel
          const localOnly = STATIC_PROJECTS.filter(sp => {
            const isAlreadyPresent = vercelMapped.some(vm => {
              const vmHost = vm.link.replace(/^https?:\/\//, "").replace(/\/$/, "");
              const spHost = sp.link.replace(/^https?:\/\//, "").replace(/\/$/, "");
              return (
                vmHost.includes(spHost) || 
                spHost.includes(vmHost) || 
                vm.title.toLowerCase() === sp.title.toLowerCase()
              );
            });
            return !isAlreadyPresent;
          });

          setProjectList([...vercelMapped, ...localOnly]);
          setDataSource("vercel");
        } else {
          setProjectList(STATIC_PROJECTS);
          setDataSource("local");
        }
      } catch (e) {
        console.error("Error cargando proyectos dinámicos:", e);
        setProjectList(STATIC_PROJECTS);
        setDataSource("local");
      } finally {
        setIsLoading(false);
      }
    }
    loadProjects();
  }, []);

  if (isLoading) {
    return (
      <section id="proyectos" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-3xl font-black font-mono italic tracking-tighter">
            02. PROYECTOS_RECIENTES
          </h2>
          <div className="flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-zinc-500 animate-pulse">
            <RefreshCw size={10} className="animate-spin" />
            <span>CONECTANDO_VERCEL...</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 font-mono space-y-4 animate-pulse h-[420px] flex flex-col justify-between"
            >
              <div>
                <div className="h-44 bg-zinc-950/60 rounded-xl flex items-center justify-center text-xs text-zinc-700 border border-white/5 mb-4">
                  <span>CONNECTING_VERCEL_NODE...</span>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="h-4 bg-zinc-800/60 rounded w-16"></div>
                    <div className="h-4 bg-zinc-800/60 rounded w-12"></div>
                  </div>
                  <div className="h-5 bg-zinc-800 rounded w-3/4"></div>
                  <div className="space-y-1.5">
                    <div className="h-3 bg-zinc-800/60 rounded w-full"></div>
                    <div className="h-3 bg-zinc-800/60 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
              <div className="h-4 bg-zinc-800/60 rounded w-1/3 pt-4 border-t border-white/5"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="proyectos" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-12 flex-wrap">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-3xl font-black font-mono mb-0 italic tracking-tighter"
        >
          02. PROYECTOS_RECIENTES
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-zinc-400"
        >
          <Activity size={10} className={dataSource === "vercel" ? "text-emerald-400 animate-pulse" : "text-[#FF5C33]"} />
          <span>ORIGEN: {dataSource.toUpperCase()}</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-fucsia-lab/40 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(230,28,140,0.1)] transition-all duration-300 flex flex-col"
          >
            {/* Badge de estado en vivo para proyectos dinámicos */}
            {project.isDynamic && (
              <div className="absolute top-4 right-4 z-20 bg-zinc-950/85 border border-emerald-500/30 text-emerald-400 text-[9px] font-mono font-bold px-2 py-0.5 rounded-md flex items-center gap-1 backdrop-blur-sm shadow-[0_0_8px_rgba(16,185,129,0.1)]">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                VERCEL_LIVE
              </div>
            )}

            {/* Imagen local o Fallback de terminal Cyberpunk si no hay imagen local */}
            <div className="h-48 bg-zinc-950 relative flex items-center justify-center border-b border-white/5 overflow-hidden">
              {project.image ? (
                <>
                  <img
                    src={project.image}
                    alt={`Previsualización de ${project.title}`}
                    className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Capa de difuminado inferior para que la transición con el texto se vea bien */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </>
              ) : (
                /* Fallback de terminal Cyberpunk por defecto si no hay imagen local */
                <div className="w-full h-full bg-[#050505] flex flex-col p-5 justify-between font-mono relative overflow-hidden group-hover:bg-[#0a0a0a] transition-all duration-500">
                  {/* Pestaña de terminal */}
                  <div className="flex justify-between items-center text-[10px] text-zinc-600 border-b border-white/5 pb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#E61C8C]/50" />
                      <span>TERMINAL_PREVIEW // {project.title.toLowerCase().replace(/\s+/g, "-")}.sh</span>
                    </div>
                    <span className="text-[#FF5C33] font-bold text-[8px] animate-pulse">● LIVE</span>
                  </div>

                  {/* Cuerpo de la terminal */}
                  <div className="flex flex-col gap-1 items-start text-left mt-2 z-10">
                    <div className="flex items-center gap-1">
                      <span className="text-[#E61C8C]">$</span>
                      <span className="text-zinc-400 text-[11px]">cat info.cfg</span>
                    </div>
                    <div className="pl-3 border-l border-[#A3249E]/30 space-y-0.5 text-[10px] text-zinc-500">
                      <p><span className="text-zinc-400">PROYECTO:</span> {project.title.toUpperCase()}</p>
                      <p><span className="text-zinc-400">STATUS:</span> OPERACIONAL</p>
                      <p><span className="text-zinc-400">TAGS:</span> {project.tags.join(" | ")}</p>
                    </div>
                  </div>

                  {/* Comando final simulado */}
                  <div className="text-[10px] text-left text-zinc-700 font-bold z-10 flex items-center gap-1">
                    <span className="text-[#FF5C33]">&gt;</span>
                    <span>READY_FOR_EXECUTION</span>
                    <span className="w-1.5 h-3.5 bg-fucsia-lab/60 animate-pulse ml-0.5" />
                  </div>

                  {/* Resplandores abstractos */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-[#E61C8C]/5 blur-xl pointer-events-none group-hover:bg-[#E61C8C]/15 transition-all duration-500" />
                  <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-[#FF5C33]/5 blur-xl pointer-events-none group-hover:bg-[#FF5C33]/10 transition-all duration-500" />
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex gap-2 mb-4 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded text-zinc-400 uppercase tracking-wider border border-white/5 group-hover:border-white/10 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-fucsia-lab transition-colors">{project.title}</h3>
              <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                {project.desc}
              </p>
              <div className="mt-auto pt-4 border-t border-white/5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-fucsia-lab transition-colors"
                >
                  PROBAR_DEMO <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

