import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF primero, WebP como respaldo. Next negocia el formato por Accept header.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 828, 1080, 1280, 1920],
  },
  // No se usa optimizePackageImports con framer-motion: partía el módulo en dos
  // instancias y los valores de useSpring dejaban de seguir a su fuente.
};

export default nextConfig;
