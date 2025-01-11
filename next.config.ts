import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Habilita la exportación estática
  distDir: 'out',  // Esta es la carpeta de salida para GitHub Pages
};

export default nextConfig;
