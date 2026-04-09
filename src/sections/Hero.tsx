"use client";
import { motion } from "framer-motion";
import NeonButton from "@/components/iu/NeonButton";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-7xl md:text-9xl font-black mb-4">
          DEV<span className="bg-gradient-to-r from-fucsia-lab via-violeta-lab to-naranja-lab bg-clip-text text-transparent">LAB</span>
        </h1>
        <p className="font-mono text-zinc-500 mb-8 max-w-md mx-auto">
          // Transformando ideas en sintaxis funcional.
          // Software & Hardware solutions en Tizayuca.
        </p>
        <div className="flex gap-4 justify-center">
          <NeonButton text="Iniciar Proyecto" />
          <NeonButton text="Ver Stack" variant="naranja" />
        </div>
      </motion.div>
    </section>
  );
}
