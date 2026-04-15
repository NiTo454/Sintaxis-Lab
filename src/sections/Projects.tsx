"use client";
import { ExternalLink, FolderCode } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
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
    }
  ];

  return (
    <section id="proyectos" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-3xl font-black font-mono mb-12 italic tracking-tighter"
      >
        02. PROYECTOS_RECIENTES
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-fucsia-lab/40 transition-all"
          >
            {/* Imagen de fondo o Placeholder con icono */}
            <div className="h-48 bg-black flex items-center justify-center border-b border-white/5 group-hover:bg-zinc-800 transition-colors">
              <FolderCode size={48} className="text-zinc-700 group-hover:text-fucsia-lab" />
            </div>

            <div className="p-6">
              <div className="flex gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded text-zinc-500 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-fucsia-lab transition-colors">{project.title}</h3>
              <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                {project.desc}
              </p>
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-fucsia-lab transition-colors"
              >
                PROBAR_DEMO <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
