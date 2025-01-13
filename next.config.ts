import type { NextConfig } from "next";

// Detectar si estamos en producción
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Condicional para el basePath
  basePath: isProd ? '/webprofile' : '', // Si estamos en producción, usa '/webprofile'; si no, deja vacío
  output: 'export',  // Habilita la exportación estática
  distDir: 'out',     // La carpeta de salida de los archivos estáticos
  reactStrictMode: true,
   
  images: {
    unoptimized: true,  // Desactiva la optimización de imágenes para exportación estática
  },
  
};

export default nextConfig;

