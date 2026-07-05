import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; // Importamos el Navbar
import Footer from "@/components/Footer"; // Importamos el Footer
import ScrollProgress from "@/components/ScrollProgress";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CommandPalette from "@/components/CommandPalette";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Sintaxis Lab | Desarrollo Web, Soporte de PC y Publicidad",
  description: "Soluciones tecnológicas integrales. Impulsamos tu negocio con diseño y desarrollo de páginas web, soporte técnico de computadoras y material publicitario de alta calidad.",
  keywords: ["Desarrollo Web", "Reparación de PC", "Publicidad", "Sintaxis Lab", "Soporte Técnico", "Lonas", "Sublimación", "Tarjetas de Presentación"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-fucsia-lab selection:text-white bg-black">
        <ScrollProgress />
        {/* El Navbar va arriba de todo */}
        <Navbar />

        {/* El contenedor principal para el contenido de tus páginas */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Componentes de Interacción Global */}
        <FloatingWhatsApp />
        <CommandPalette />

        {/* El Footer al final, después del contenido */}
        <Footer />
      </body>
    </html>
  );
}