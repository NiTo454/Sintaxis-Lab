"use client";
import { ExternalLink, FolderCode } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  desc: string;
  link: string;
  tags: string[];
  image?: string;
}

export default function Projects() {
  const projects: Project[] = [
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

  return (
    <section id="proyectos" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-3xl font-black font-mono mb-12 italic tracking-tighter"
      >
        02. PROYECTOS_RECIENTES
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-fucsia-lab/40 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(230,28,140,0.1)] transition-all duration-300 flex flex-col"
          >
            {/* Imagen generada automáticamente por API o imagen local */}
            <div className="h-48 bg-zinc-800 relative flex items-center justify-center border-b border-white/5 overflow-hidden">
              <img
                src={project.image || `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(project.link)}?w=1280&h=720`}
                alt={`Previsualización de ${project.title}`}
                className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              {/* Capa de difuminado inferior para que la transición con el texto se vea bien */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex gap-2 mb-4">
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
