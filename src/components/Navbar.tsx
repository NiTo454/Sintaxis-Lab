"use client";
import { useState } from "react";
// Importamos los iconos para el menú de móvil
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  // Estado para el menú desplegable de servicios en PC
  const [menuServiciosAbierto, setMenuServiciosAbierto] = useState(false);
  
  // NUEVO: Estado para controlar todo el menú en teléfonos
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 border-b border-[#A3249E]/30 bg-[#000000]/80 backdrop-blur-xl px-6 md:px-8 py-4 md:py-6 flex justify-between items-center transition-all">
      
      {/* SECCIÓN DEL LOGO */}
      <div className="flex items-center gap-4 hover:opacity-80 transition-opacity cursor-pointer">
        <img src="/images/Logo.png" alt="Logo SINTAXIS_LAB" className="h-8 w-8 md:h-10 md:w-10" />
        <span className="font-black tracking-tighter text-xl md:text-2xl bg-gradient-to-r from-[#E61C8C] via-[#A3249E] to-[#FF5C33] text-transparent bg-clip-text">
          SINTAXIS_LAB
        </span>
      </div>

      {/* =========================================
          MENÚ DE ESCRITORIO (Oculto en móviles)
          ========================================= */}
      <div className="hidden md:flex gap-10 font-sans font-semibold text-sm text-zinc-300 items-center uppercase tracking-widest">
        <div className="relative">
          <button
            onClick={() => setMenuServiciosAbierto(!menuServiciosAbierto)}
            className="px-5 py-2 rounded-full hover:bg-[#E61C8C]/10 hover:text-[#FF5C33] hover:shadow-[0_0_15px_rgba(230,28,140,0.2)] transition-all focus:outline-none flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-widest"
          >            Servicios
            <span className={`text-[10px] transition-transform duration-300 ${menuServiciosAbierto ? 'rotate-180 text-[#FF5C33]' : ''}`}>
              ▼
            </span>
          </button>

          {menuServiciosAbierto && (
            <div className="absolute top-full left-0 mt-6 w-64 bg-[#000000]/95 backdrop-blur-2xl border border-[#FF5C33]/30 rounded-2xl shadow-[0_15px_40px_rgba(255,92,51,0.15)] overflow-hidden flex flex-col z-50 transition-all">
              <a href="#desarrollo" className="px-6 py-4 hover:bg-gradient-to-r hover:from-[#E61C8C]/20 hover:to-transparent hover:text-white hover:pl-8 transition-all duration-300 border-b border-white/5" onClick={() => setMenuServiciosAbierto(false)}>
                Páginas web
              </a>
              <a href="#diseno" className="px-6 py-4 hover:bg-gradient-to-r hover:from-[#A3249E]/20 hover:to-transparent hover:text-white hover:pl-8 transition-all duration-300 border-b border-white/5" onClick={() => setMenuServiciosAbierto(false)}>
                Reparación de PC
              </a>
              <a href="#auditoria" className="px-6 py-4 hover:bg-gradient-to-r hover:from-[#FF5C33]/20 hover:to-transparent hover:text-white hover:pl-8 transition-all duration-300" onClick={() => setMenuServiciosAbierto(false)}>
                Publicidad e impresión
              </a>
            </div>
          )}
        </div>

        <a href="#contacto" className="px-5 py-2 rounded-full hover:bg-[#FF5C33]/10 hover:text-[#FF5C33] hover:shadow-[0_0_15px_rgba(255,92,51,0.2)] transition-all">
          Contacto
        </a>
      </div>

      {/* =========================================
          BOTÓN HAMBURGUESA (Solo visible en móviles)
          ========================================= */}
      <button 
        className="md:hidden text-zinc-300 hover:text-[#FF5C33] transition-colors focus:outline-none"
        onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
      >
        {/* Si está abierto muestra una "X", si está cerrado muestra las 3 rayas */}
        {menuMovilAbierto ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* =========================================
          MENÚ DESPLEGABLE MÓVIL
          ========================================= */}
      {menuMovilAbierto && (
        <div className="absolute top-full left-0 w-full bg-[#000000]/95 backdrop-blur-2xl border-b border-[#A3249E]/30 flex flex-col md:hidden z-50 shadow-[0_15px_40px_rgba(230,28,140,0.1)]">
          
          {/* Título de sección para el móvil */}
          <div className="px-6 py-4 text-xs font-bold text-[#A3249E] uppercase tracking-widest border-b border-white/5">
            Nuestros Servicios
          </div>
          
          <a href="#desarrollo" className="px-8 py-4 text-zinc-300 hover:text-[#FF5C33] hover:bg-white/5 transition-colors border-b border-white/5" onClick={() => setMenuMovilAbierto(false)}>
            Páginas web
          </a>
          <a href="#diseno" className="px-8 py-4 text-zinc-300 hover:text-[#FF5C33] hover:bg-white/5 transition-colors border-b border-white/5" onClick={() => setMenuMovilAbierto(false)}>
            Reparación de PC
          </a>
          <a href="#auditoria" className="px-8 py-4 text-zinc-300 hover:text-[#FF5C33] hover:bg-white/5 transition-colors border-b border-white/5" onClick={() => setMenuMovilAbierto(false)}>
            Publicidad e impresión
          </a>
          
          {/* Título de sección de contacto */}
          <div className="px-6 py-4 text-xs font-bold text-[#FF5C33] uppercase tracking-widest border-b border-white/5 mt-2">
            Hablemos
          </div>
          <a href="#contacto" className="px-8 py-4 text-white font-bold hover:bg-white/5 transition-colors" onClick={() => setMenuMovilAbierto(false)}>
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}