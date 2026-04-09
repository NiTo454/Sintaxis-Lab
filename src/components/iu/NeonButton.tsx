"use client";
import { motion } from "framer-motion";

interface Props {
  text: string;
  variant?: "fucsia" | "naranja";
}

export default function NeonButton({ text, variant = "fucsia" }: Props) {
  const color = variant === "fucsia" ? "border-fucsia-lab text-fucsia-lab" : "border-naranja-lab text-naranja-lab";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-2 border-2 rounded-lg font-mono font-bold uppercase tracking-tighter transition-shadow hover:shadow-[0_0_15px_rgba(230,28,140,0.4)] ${color}`}
    >
      {text}
    </motion.button>
  );
}
