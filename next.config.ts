import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Habilita la exportación estática
  distDir: 'out',    // La carpeta de salida de los archivos estáticos
  reactStrictMode: true,  // Opcional, pero es recomendable para detectar problemas
};

export default nextConfig;
