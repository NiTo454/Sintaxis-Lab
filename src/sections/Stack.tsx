"use client";
import { motion } from "framer-motion";

export default function Stack() {
  const techs = ["Flutter", "Node.js", "PHP", "Laravel", "MySQL", "React", "Tailwind"];

  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6 overflow-hidden">
        <motion.div
          className="flex gap-12 w-max pr-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {techs.concat(techs).map((t, i) => (
            <span key={i} className="text-4xl font-black text-zinc-800 hover:text-white transition-colors cursor-default whitespace-nowrap">
              {t.toUpperCase()}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
