// ===== OPCIÓN 2: next.config.mjs (Corregido) =====
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para K3K MAFIA
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Optimización de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permitir cualquier imagen por ahora
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Configuración PWA para K3K MAFIA
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}

export default nextConfig