"use client";
import { motion, Variants } from "framer-motion";
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
        <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fucsia-lab/20 blur-[120px] pointer-events-none"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.span variants={itemVariants} className="font-mono text-fucsia-lab text-xs tracking-[0.3em] uppercase mb-4 block">
          [ system_status: online ]
        </motion.span>
        <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-6">
          SINTAXIS<br/>
          <span className="bg-gradient-to-r from-fucsia-lab via-violeta-lab to-naranja-lab bg-clip-text text-transparent">
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
        <motion.p variants={itemVariants} className="max-w-lg mx-auto text-zinc-500 font-mono text-sm md:text-base mb-10">
          // Laboratorio de desarrollo multiplatforma y optimización de hardware.<br/>
          // Ubicado en Tizayuca, Hidalgo.
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <NeonButton text="Iniciar Proyecto" />
          <NeonButton text="Ver Bitácora" variant="naranja" />
        </motion.div>
      </motion.div>
    </section>
  );
}
