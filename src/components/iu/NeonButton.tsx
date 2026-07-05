"use client";
import { motion } from "framer-motion";

interface Props {
  text: string;
  variant?: "fucsia" | "naranja";
}

export default function NeonButton({ text, variant = "fucsia" }: Props) {
  const color = variant === "fucsia" ? "border-fucsia-lab text-fucsia-lab" : "border-naranja-lab text-naranja-lab";
  const shadowColor = variant === "fucsia" ? "rgba(230, 28, 140, 0.4)" : "rgba(255, 92, 51, 0.4)";

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 0 15px ${shadowColor}`
      }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-2 border-2 rounded-lg font-mono font-bold uppercase tracking-tighter transition-all duration-300 ${color}`}
    >
      {text}
    </motion.button>
  );
}
