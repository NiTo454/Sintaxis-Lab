"use client";
import GlassCard from "@/components/iu/GlassCard";
import { Monitor, Wrench, Palette, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Páginas Web",
      desc: "Hacemos tu página web profesional para que tu negocio se vea bien en internet y puedas vender tus productos fácilmente.",
      puntos: ["Páginas Modernas", "Tiendas para vender", "Se ven bien en celular"],
      icon: Monitor,
      color: "text-blue-400"
    },
    {
      title: "Reparación de Computadoras",
      desc: "¿Tu compu está lenta o no prende? La limpiamos y reparamos para que trabaje rápido y como si fuera nueva.",
      puntos: ["Arreglo de Laptops y PC", "Limpieza y Virus", "Computadoras más rápidas"],
      icon: Wrench,
      color: "text-orange-400"
    },
    {
      title: "Publicidad e Impresión",
      desc: "Diseñamos e imprimimos todo lo que necesites para promocionar tu negocio o para un regalo especial.",
      // Aquí metemos toda la lista organizada por grupos
      puntos: [
        "Lonas y Tarjetas",
        "Playeras y Sudaderas",
        "Tazas, Termos y Llaveros"
      ],
      icon: Palette,
      color: "text-fucsia-lab"
    },
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-black font-mono mb-8 md:mb-12 italic tracking-tighter"
      >
        01. NUESTROS_SERVICIOS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="h-full"
          >
            <GlassCard title={s.title} className="h-full flex flex-col">
              <s.icon className={`mb-4 ${s.color}`} size={32} />
              <p className="text-zinc-400 text-sm md:text-base mb-6 leading-relaxed">
                {s.desc}
              </p>

              {/* Lista de cosas que incluye cada servicio */}
              <ul className="mt-auto space-y-2 border-t border-white/5 pt-4">
                {s.puntos.map((punto) => (
                  <li key={punto} className="flex items-start gap-2 text-xs font-mono text-zinc-500">
                    <Check size={14} className="text-fucsia-lab shrink-0 mt-[2px]" />
                    <span className="leading-tight">{punto.toUpperCase()}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
