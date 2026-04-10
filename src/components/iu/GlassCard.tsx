import { ReactNode } from "react";

export default function GlassCard({ children, title, className = "" }: { children: ReactNode, title: string, className?: string }) {
  return (
    <div className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-fucsia-lab/30 transition-colors group ${className}`}>
      <h3 className="text-xl font-bold font-mono mb-4 group-hover:text-fucsia-lab transition-colors">
        {`> ${title}`}
      </h3>
      <div className="text-zinc-400">
        {children}
      </div>
    </div>
  );
}
