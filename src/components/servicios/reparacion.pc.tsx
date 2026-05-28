"use client";
import { motion } from "framer-motion";
import { Wrench, HardDrive, Cpu, ShieldCheck, Server, MapPin } from "lucide-react";

export default function ReparacionPC() {
  const features = [
    { icon: Wrench, title: "Mantenimiento Físico", desc: "Limpieza profunda de componentes, cambio de pasta térmica y optimización de ventilación." },
    { icon: HardDrive, title: "Formateo y SO", desc: "Instalación de Windows y configuración de programas esenciales." },
    { icon: Cpu, title: "Actualización de Hardware", desc: "Mejora la velocidad de tu equipo instalando discos de estado sólido (SSD) y más memoria RAM." },
    { icon: ShieldCheck, title: "Eliminación de Virus", desc: "Limpieza de malware, troyanos y optimización del sistema para que deje de estar lento." },
    { icon: Server, title: "Ensamblaje de PC", desc: "Armamos computadoras a medida para gaming, arquitectura o trabajo de oficina, adaptadas a tu presupuesto." },
    { icon: MapPin, title: "Soporte a Domicilio", desc: "Acudimos directamente a tu casa u oficina para diagnosticar y resolver problemas sin que tengas que trasladar tu equipo." }
  ];

  return (
    <section id="reparacion-pc" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="font-mono text-[#A3249E] text-xs tracking-[0.2em] uppercase mb-4 block">
          // SERVICIO_02
        </span>
       <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 uppercase">
         Reparacion de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E61C8C] to-[#FF5C33]">Equipos</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm md:text-base max-w-2xl mb-12">
          ¿Tu computadora está lenta o no enciende? Le damos una segunda vida a tu PC o Laptop con diagnósticos precisos, reparación a nivel hardware y optimización de software.
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
            className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl hover:border-[#A3249E]/50 hover:bg-zinc-900/80 transition-all group"
          >
            <feat.icon className="text-[#A3249E] mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold mb-2 text-white">{feat.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
