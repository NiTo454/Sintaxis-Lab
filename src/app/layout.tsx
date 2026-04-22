import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; // Importamos el Navbar
import Footer from "@/components/Footer"; // Importamos el Footer

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-fucsia-lab selection:text-white bg-black">
        {/* El Navbar va arriba de todo */}
        <Navbar />

        {/* El contenedor principal para el contenido de tus páginas */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* El Footer al final, después del contenido */}
        <Footer />
      </body>
    </html>
  );
}