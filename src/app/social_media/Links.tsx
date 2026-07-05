"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { allLinksPageLinks } from "@/sections/socials";

export default function Links() {
  const links = allLinksPageLinks;

  return (
    <section id="enlaces" className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-black font-mono mb-2 italic tracking-tighter text-center"
      >
        04. REDES_Y_ENLACES
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-500 font-mono text-sm text-center mb-12 flex items-center justify-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
        // terminal_de_enlaces
      </motion.p>

      <div className="w-full max-w-md flex flex-col gap-4">
        {links.map((link, i) => (
          <motion.a
            key={link.id}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : "_self"}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ 
              scale: 1.02,
              borderColor: `${link.colorHex}80`,
              boxShadow: `0 0 20px rgba(${link.rgbColor}, 0.2)`
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center justify-between bg-zinc-900/50 backdrop-blur-md border border-white/10 p-4 rounded-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Fondo hover sutil */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: `rgba(${link.rgbColor}, 0.1)` }}
            />

            <div className="flex items-center gap-4 z-10">
              <div className={`w-12 h-12 rounded-xl bg-black/50 border border-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/80`}>
                {link.id === 'whatsapp' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={`${link.color} group-hover:scale-110 transition-transform duration-300`}>
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                )}
                {link.id === 'messenger' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={`${link.color} group-hover:scale-110 transition-transform duration-300`}>
                    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.243c1.092.3 2.246.465 3.443.465 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.554-6.932 3.149 3.26 5.864-3.26-6.549 6.932z"/>
                  </svg>
                )}
                {link.id === 'facebook' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={`${link.color} group-hover:scale-110 transition-transform duration-300`}>
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                )}
                {link.id === 'instagram' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={`${link.color} group-hover:scale-110 transition-transform duration-300`}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                )}
                {link.id === 'website' && <link.icon size={22} className={`${link.color} group-hover:scale-110 transition-transform duration-300`} />}
              </div>
              <span className="font-mono font-bold text-xs sm:text-sm text-zinc-300 group-hover:text-white uppercase tracking-wider transition-colors duration-300">
                {link.name}
              </span>
            </div>

            <ChevronRight size={18} className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 z-10" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
