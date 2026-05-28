"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { allLinksPageLinks } from "@/sections/socials";

export default function Links() {
  const links = allLinksPageLinks.map(link => ({
    ...link,
    borderColor: `group-hover:border-[${link.colorHex}]/50`,
    bgLight: `group-hover:bg-[${link.colorHex}]/10`,
    shadow: `hover:shadow-[0_0_20px_rgba(${link.rgbColor},0.2)]`
  }));

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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative flex items-center justify-between bg-zinc-900/50 backdrop-blur-md border border-white/10 p-4 rounded-2xl transition-all duration-300 overflow-hidden ${link.borderColor} ${link.shadow}`}
          >
            {/* Fondo hover sutil */}
            <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${link.bgLight}`} />

            <div className="flex items-center gap-4 z-10">
              <div className={`w-12 h-12 rounded-xl bg-black/50 border border-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/80`}>
                <link.icon size={22} className={`${link.color} group-hover:scale-110 transition-transform duration-300`} />
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
