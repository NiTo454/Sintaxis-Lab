"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import TerminalLoader from "@/components/TerminalLoader"; // Asegúrate de que la ruta sea correcta
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Stack from "@/sections/Stack";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // El tiempo que durará la "secuencia de arranque" (3 segundos es ideal)
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

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Stack />
        <Projects />
        <Contact />
      </main>

      {/* Si ya crearon el Footer, pueden añadirlo aquí abajo */}
    </>
  );
}
