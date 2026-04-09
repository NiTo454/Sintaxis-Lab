import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-fucsia-lab selection:text-white">
        {children}
      </body>
    </html>
  );
}
