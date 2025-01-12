import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',   // Habilita la exportación estática
  distDir: 'out',     // La carpeta de salida de los archivos estáticos
  reactStrictMode: true,  // Opcional, pero es recomendable para detectar problemas
  images: {
    unoptimized: true,  // Desactiva la optimización de imágenes para exportación estática
  },
  basePath: '',  // Si necesitas ajustar el basePath (en tu caso, no parece ser necesario)
};

export default nextConfig;
