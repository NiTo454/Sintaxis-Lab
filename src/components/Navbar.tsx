"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
// Importamos los iconos para el menú de móvil
import { Menu, X } from "lucide-react";

export default function Navbar() {
  // Estado para el menú desplegable de servicios en PC
  const [menuServiciosAbierto, setMenuServiciosAbierto] = useState(false);

  // NUEVO: Estado para controlar todo el menú en teléfonos
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);

  const openConsole = () => {
    window.dispatchEvent(new CustomEvent("toggle-command-palette"));
  };

  // Bloquear el scroll del cuerpo cuando el menú móvil está abierto
  useEffect(() => {
    if (menuMovilAbierto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuMovilAbierto]);

  return (
    <nav className="fixed top-0 w-full z-40 border-b border-[#A3249E]/30 bg-[#000000]/80 backdrop-blur-xl px-6 md:px-8 py-4 md:py-6 flex justify-between items-center transition-all">

      {/* SECCIÓN DEL LOGO */}
      <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity cursor-pointer">
        <img src="/images/Logo.png" alt="Logo SINTAXIS_LAB" className="h-8 w-8 md:h-10 md:w-10" />
        <span className="font-black tracking-tighter text-xl md:text-2xl bg-gradient-to-r from-[#E61C8C] via-[#A3249E] to-[#FF5C33] text-transparent bg-clip-text">
          SINTAXIS_LAB
        </span>
      </Link>

      {/* =========================================
          MENÚ DE ESCRITORIO (Oculto en móviles)
          ========================================= */}
      <div className="hidden md:flex gap-8 items-center uppercase tracking-widest select-none">
        <div className="relative">
          <button
            onClick={() => setMenuServiciosAbierto(!menuServiciosAbierto)}
            className="px-4 py-1.5 rounded-full hover:bg-white/5 border border-transparent hover:border-[#E61C8C]/20 hover:text-white transition-all duration-300 focus:outline-none flex items-center gap-2 font-mono font-bold text-xs cursor-pointer"
          >
            <span>Servicios</span>
            <span className={`text-[9px] transition-transform duration-300 ${menuServiciosAbierto ? 'rotate-180 text-fucsia-lab' : 'text-zinc-500'}`}>
              ▼
            </span>
          </button>

          <AnimatePresence>
            {menuServiciosAbierto && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-0 mt-4 w-60 bg-[#000000]/95 backdrop-blur-2xl border border-[#E61C8C]/25 rounded-2xl shadow-[0_10px_30px_rgba(230,28,140,0.1)] overflow-hidden flex flex-col z-50 font-mono text-xs text-zinc-400"
              >
                <Link href="/#desarrollo-web" className="px-5 py-3.5 hover:bg-gradient-to-r hover:from-fucsia-lab/10 hover:to-transparent hover:text-white hover:pl-6 transition-all duration-300 border-b border-white/5" onClick={() => setMenuServiciosAbierto(false)}>
                  // PÁGINAS_WEB
                </Link>
                <Link href="/#reparacion-pc" className="px-5 py-3.5 hover:bg-gradient-to-r hover:from-violeta-lab/10 hover:to-transparent hover:text-white hover:pl-6 transition-all duration-300 border-b border-white/5" onClick={() => setMenuServiciosAbierto(false)}>
                  // SOPORTE_PC
                </Link>
                <Link href="/#publicidad" className="px-5 py-3.5 hover:bg-gradient-to-r hover:from-naranja-lab/10 hover:to-transparent hover:text-white hover:pl-6 transition-all duration-300" onClick={() => setMenuServiciosAbierto(false)}>
                  // PUBLICIDAD
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="/#proyectos" className="text-xs font-mono font-bold text-zinc-400 hover:text-white transition-colors relative py-1 group">
          <span>Proyectos</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fucsia-lab group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#E61C8C]" />
        </Link>
        <Link href="/#enlaces" className="text-xs font-mono font-bold text-zinc-400 hover:text-white transition-colors relative py-1 group">
          <span>Enlaces</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violeta-lab group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#A3249E]" />
        </Link>
        <Link href="/#contacto" className="px-4 py-1.5 rounded-full border border-naranja-lab/20 hover:border-naranja-lab/50 hover:bg-naranja-lab/5 text-zinc-300 hover:text-white hover:shadow-[0_0_15px_rgba(255,92,51,0.2)] transition-all duration-300 font-mono font-bold text-xs">
          Contacto
        </Link>
        <button
          onClick={openConsole}
          className="flex items-center gap-1.5 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full hover:border-[#E61C8C]/50 hover:bg-[#E61C8C]/5 hover:text-white hover:shadow-[0_0_15px_rgba(230,28,140,0.2)] transition-all cursor-pointer text-xs font-mono font-bold"
        >
          <span>CONSOLA</span>
          <kbd className="px-1 py-0.5 bg-white/10 rounded text-[9px] font-mono border border-white/10 hidden lg:inline-block">Ctrl+K</kbd>
        </button>
      </div>

      {/* =========================================
          BOTÓN HAMBURGUESA / CONSOLA (Móviles)
          ========================================= */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          onClick={openConsole}
          className="flex items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10 text-fucsia-lab hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Consola de comandos"
        >
          <span className="font-mono text-xs font-black">&gt;_</span>
        </button>
        <button
          className="text-zinc-300 hover:text-[#FF5C33] transition-colors focus:outline-none"
          onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
        >
          {/* Si está abierto muestra una "X", si está cerrado muestra las 3 rayas */}
          {menuMovilAbierto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* =========================================
          MENÚ DESPLEGABLE MÓVIL
          ========================================= */}
      <AnimatePresence>
        {menuMovilAbierto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-[#000000]/95 backdrop-blur-2xl border-b border-[#A3249E]/30 flex flex-col md:hidden z-50 shadow-[0_15px_40px_rgba(230,28,140,0.1)] overflow-hidden"
          >
            {/* Título de sección para el móvil */}
            <div className="px-6 py-4 text-xs font-bold text-[#A3249E] uppercase tracking-widest border-b border-white/5">
              Nuestros Servicios
            </div>

            <Link href="/#desarrollo-web" className="px-8 py-4 text-zinc-300 hover:text-[#FF5C33] hover:bg-white/5 transition-colors border-b border-white/5" onClick={() => setMenuMovilAbierto(false)}>
              Páginas web
            </Link>
            <Link href="/#reparacion-pc" className="px-8 py-4 text-zinc-300 hover:text-[#FF5C33] hover:bg-white/5 transition-colors border-b border-white/5" onClick={() => setMenuMovilAbierto(false)}>
              Reparación de PC
            </Link>
            <Link href="/#publicidad" className="px-8 py-4 text-zinc-300 hover:text-[#FF5C33] hover:bg-white/5 transition-colors border-b border-white/5" onClick={() => setMenuMovilAbierto(false)}>
              Publicidad e impresión
            </Link>

            <Link href="/#proyectos" className="px-8 py-4 text-zinc-300 hover:text-[#E61C8C] hover:bg-white/5 transition-colors border-b border-white/5" onClick={() => setMenuMovilAbierto(false)}>
              Proyectos
            </Link>
            <Link href="/#enlaces" className="px-8 py-4 text-zinc-300 hover:text-[#A3249E] hover:bg-white/5 transition-colors border-b border-white/5" onClick={() => setMenuMovilAbierto(false)}>
              Redes y Enlaces
            </Link>

            {/* Título de sección de contacto */}
            <div className="px-6 py-4 text-xs font-bold text-[#FF5C33] uppercase tracking-widest border-b border-white/5 mt-2">
              Hablemos
            </div>
            <Link href="/#contacto" className="px-8 py-4 text-white font-bold hover:bg-white/5 transition-colors" onClick={() => setMenuMovilAbierto(false)}>
              Contacto
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
