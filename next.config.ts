import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF primero, WebP como respaldo. Next negocia el formato por Accept header.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 828, 1080, 1280, 1920],
  },
  // Todas las rutas son estaticas: no hay fetch en request time ni cookies/headers.
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
