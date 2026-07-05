"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Ejecutar inicialmente para calcular el estado
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[100] pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-[#E61C8C] via-[#A3249E] to-[#FF5C33] transition-all duration-75 shadow-[0_0_10px_rgba(230,28,140,0.5)]"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
}
