/** @type {import('next').NextConfig} */
const nextConfig = {
  // Active le dossier app/ pour le nouveau router
  experimental: {
    appDir: true,
  },

  // Sortie standalone pour Netlify (SSR et génération hybride)
  output: "standalone",

  // Réécritures ou redirections si nécessaire
  async redirects() {
    return [
      {
        source: '/_not-trouvé', // rediriger si tu veux
        destination: '/',
        permanent: false,
      },
    ]
  },

  // Optionnel : headers pour sécurité ou CORS
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ]
  },
}

module.exports = nextConfig
