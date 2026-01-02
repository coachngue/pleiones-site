/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Indispensable pour Netlify avec App Router
  output: "standalone",

  // Évite certains problèmes de build côté Netlify
  experimental: {
    appDir: true,
  },

  // Images (sécurisé même si tu n’en utilises pas encore)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
