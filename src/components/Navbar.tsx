import { Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Terminal className="text-fucsia-lab" size={24} />
        <span className="font-black tracking-tighter text-xl">SINTAXIS_LAB</span>
      </div>
      <div className="hidden md:flex gap-8 font-mono text-sm text-zinc-400">
        <a href="#servicios" className="hover:text-white transition-colors">/servicios</a>
        <a href="#proyectos" className="hover:text-white transition-colors">/proyectos</a>
        <a href="#contacto" className="hover:text-white transition-colors">/contacto</a>
      </div>
    </nav>
  );
}
