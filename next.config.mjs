/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Sin redirects de dominio por ahora: bope.cl está en disputa y el sitio
  // usa la URL de Vercel mientras se define un dominio propio nuevo.
}

export default nextConfig
