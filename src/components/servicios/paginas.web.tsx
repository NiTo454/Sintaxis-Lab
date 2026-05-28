"use client";
import { motion } from "framer-motion";
import { Monitor, Code, LayoutGrid, MonitorSmartphone, Smartphone, AppWindow } from "lucide-react";

export default function PaginasWeb() {
  const features = [
    { icon: Monitor, title: "Landing Pages", desc: "Páginas de un solo sitio enfocadas en captar clientes, ideales para campañas y promociones." },
    { icon: LayoutGrid, title: "Catálogos Digitales", desc: "Muestra tus productos o servicios en línea con un diseño atractivo, sin la complejidad de cobrar por internet." },
    { icon: Code, title: "Sistemas a Medida", desc: "Aplicaciones web personalizadas, paneles de administración y control de procesos internos." },
    { icon: MonitorSmartphone, title: "Diseño Responsivo", desc: "Tu página se verá y funcionará a la perfección en celulares, tablets y computadoras." },
    { icon: Smartphone, title: "Apps para Clientes", desc: "Fideliza a tus compradores y facilita tus ventas con una aplicación móvil exclusiva para iOS y Android." },
    { icon: AppWindow, title: "Apps de Gestión", desc: "Optimiza la operación de tu negocio con herramientas móviles a medida para el control de tu equipo de trabajo." }
  ];

  return (
    <section id="desarrollo-web" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="font-mono text-[#E61C8C] text-xs tracking-[0.2em] uppercase mb-4 block">
          // SERVICIO_01
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 uppercase">
          Desarrollo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E61C8C] to-[#FF5C33]">Web</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm md:text-base max-w-2xl mb-12">
          Construimos tu presencia en internet con tecnología moderna. Desde páginas informativas y catálogos digitales hasta sistemas a medida que funcionan perfecto en cualquier dispositivo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl hover:border-[#E61C8C]/50 hover:bg-zinc-900/80 transition-all group"
          >
            <feat.icon className="text-[#E61C8C] mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold mb-2 text-white">{feat.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
