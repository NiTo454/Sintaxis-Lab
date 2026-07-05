"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import TerminalLoader from "@/components/TerminalLoader";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Stack from "@/sections/Stack";
import Projects from "@/sections/Projects";
import Links from "@/app/social_media/Links";
import Contact from "@/sections/Contact";
import PaginasWeb from "@/components/servicios/paginas.web";
import ReparacionPC from "@/components/servicios/reparacion.pc";
import Publicidad from "@/components/servicios/publicidad";

// Carga dinámica del componente 3D para evitar errores de hidratación SSR en Next.js
const Hero3DCanvas = dynamic(() => import("@/components/Hero3DCanvas"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState(0);

  // Escuchar posición del ratón para el reflector radial
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Sincronizar activeTab con cambios en el URL Hash (#desarrollo-web, #reparacion-pc, #publicidad)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#desarrollo-web") {
        setActiveTab(0);
      } else if (hash === "#reparacion-pc") {
        setActiveTab(1);
      } else if (hash === "#publicidad") {
        setActiveTab(2);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Ejecutar inicialmente al cargar la página

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    // Si ya vio el loader en esta sesión, lo quitamos de inmediato
    const hasSeen = sessionStorage.getItem("hasSeenLoader");
    if (hasSeen) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* El AnimatePresence detecta cuando el loader desaparece para animarlo */}
      <AnimatePresence mode="wait">
        {loading && <TerminalLoader key="loader" />}
      </AnimatePresence>

      {/* Reflector sutil de fondo (Spotlight) siguiendo al ratón */}
      <div 
        className="pointer-events-none fixed inset-0 -z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, rgba(230, 28, 140, 0.04), transparent 80%)`
        }}
      />

      <main className="relative">
        <Hero3DCanvas />
        <Hero />
        <Services activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Renderizado condicional del servicio activo mediante tabs */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div
                key="web"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PaginasWeb />
              </motion.div>
            )}
            {activeTab === 1 && (
              <motion.div
                key="pc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ReparacionPC />
              </motion.div>
            )}
            {activeTab === 2 && (
              <motion.div
                key="pub"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Publicidad />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Stack />
        <Projects />
        <Links />
        <Contact />
      </main>
    </>
  );
}
