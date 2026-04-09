import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import GlassCard from "@/components/iu/GlassCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Ejemplo rápido de sección de servicios */}
        <section id="servicios" className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard title="Web Design">
            Desarrollo de interfaces modernas con React, Next.js y Tailwind CSS.
          </GlassCard>
          <GlassCard title="IT Support">
            Mantenimiento preventivo y correctivo de hardware y redes.
          </GlassCard>
          <GlassCard title="Custom Systems">
            Sistemas a medida en Node.js, PHP y bases de datos MySQL.
          </GlassCard>
        </section>
      </main>
    </>
  );
}
