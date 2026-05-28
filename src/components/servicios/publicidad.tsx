"use client";
import { motion } from "framer-motion";
import { Printer, Palette, Shirt, ImageIcon } from "lucide-react";

export default function Publicidad() {
  const features = [
    { icon: Printer, title: "Lonas y Viniles", desc: "Impresión en gran formato con alta calidad para negocios, eventos o publicidad exterior." },
    { icon: Shirt, title: "Sublimación y Textil", desc: "Personalización de playeras, sudaderas, tazas, termos y artículos promocionales." },
    { icon: ImageIcon, title: "Tarjetas y Papelería", desc: "Tarjetas de presentación, volantes (flyers), notas de remisión y papelería corporativa." },
    { icon: Palette, title: "Diseño Gráfico", desc: "Creación de logotipos, identidad visual y adaptación de diseños para impresión." }
  ];

  return (
    <section id="publicidad" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20 border-b border-white/5">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="font-mono text-[#FF5C33] text-xs tracking-[0.2em] uppercase mb-4 block">
          // SERVICIO_03
        </span>
       <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 uppercase">
          Publicidad e <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E61C8C] to-[#FF5C33]">Impresión</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm md:text-base max-w-2xl mb-12">
          Haz que tu marca destaque en el mundo físico. Ofrecemos soluciones de impresión y diseño gráfico para materializar tus ideas con la mejor calidad del mercado.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl hover:border-[#FF5C33]/50 hover:bg-zinc-900/80 transition-all group relative overflow-hidden"
          >
            <feat.icon className="text-[#FF5C33] mb-4 relative z-10 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold mb-2 text-white relative z-10">{feat.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed relative z-10">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
