"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TerminalLoader() {
  const [text, setText] = useState("");
  const fullText = "> RUNNING_SINTAXIS_LAB_BOOT_SEQUENCE...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40); // Velocidad de escritura
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: "circIn" } }}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center font-mono px-6"
    >
      <div className="text-fucsia-lab text-xs md:text-sm tracking-widest mb-4">
        {text}<span className="animate-pulse">_</span>
      </div>

      {/* Barra de progreso */}
      <div className="w-48 h-[1px] bg-zinc-900 relative overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-fucsia-lab shadow-[0_0_10px_#e61c8c]"
        />
      </div>
    </motion.div>
  );
}
