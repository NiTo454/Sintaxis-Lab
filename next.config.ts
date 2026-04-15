import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Esto permite que Next.js acepte peticiones desde tu URL de ngrok
  // En versiones recientes de Next.js, esta opción se movió fuera de experimental
  allowedDevOrigins: ["leonia-trichomic-beata.ngrok-free.dev", "localhost"],

  // Si usas el componente <Image /> de Next.js, esto evitará errores de carga de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ngrok-free.dev',
      },
    ],
  },
};

export default nextConfig;
