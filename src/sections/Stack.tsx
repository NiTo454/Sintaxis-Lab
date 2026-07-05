"use client";
import { motion } from "framer-motion";

export default function Stack() {
  const techs = [
    "Next.js", "React", "TypeScript", "Tailwind", "Node.js",
    "Flutter", "PHP", "Laravel", "MySQL",
    "Soporte PC", "Hardware", "Optimización", "Windows",
    "Diseño Gráfico", "Photoshop", "Illustrator", "Sublimación", "Vinil"
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <motion.div
          className="flex gap-12 w-max pr-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
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
