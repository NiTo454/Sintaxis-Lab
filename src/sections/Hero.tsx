"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import NeonButton from "@/components/iu/NeonButton";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center relative px-6 text-center overflow-hidden">
      {/* Efecto de fondo: Cuadrícula (Grid) y Resplandor (Glow) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fucsia-lab/20 blur-[120px] pointer-events-none" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-6">
          SINTAXIS<br/>
          <span className="bg-gradient-to-r from-fucsia-lab via-violeta-lab to-naranja-lab bg-clip-text text-transparent inline-block pb-2 pr-2">
            LAB
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="text-naranja-lab"
          >
            _
          </motion.span>
        </motion.h1>

        <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-10 font-mono">
          <p className="text-zinc-400 text-sm md:text-base mb-4">
            // Impulsamos tu negocio con soluciones tecnológicas y creativas.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm text-zinc-500">
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-md">DESARROLLO_WEB</span>
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-md">SOPORTE_PC</span>
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-md">PUBLICIDAD</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <Link href="/#servicios">
            <NeonButton text="VER_SERVICIOS" />
          </Link>
          <Link href="/#contacto">
            <NeonButton text="CONTACTAR_AHORA" variant="naranja" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
