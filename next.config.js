/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,        // Mode strict React
  swcMinify: true,              // Minification SWC pour builds rapides
  output: 'standalone',         // Recommandé pour Netlify
  experimental: {
    // ⚠️ Ne PAS inclure appDir ici
  },
};

module.exports = nextConfig;
