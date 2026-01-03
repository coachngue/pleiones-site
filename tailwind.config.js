/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tous les fichiers où Tailwind doit chercher les classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // pages dans app directory
    "./pages/**/*.{js,ts,jsx,tsx}",     // pages si tu as l'ancien dossier pages
    "./components/**/*.{js,ts,jsx,tsx}" // tous les composants
  ],
  theme: {
    extend: {
      // Ici tu peux ajouter des extensions de couleurs, spacing, fonts, etc.
      colors: {
        primary: "#1D4ED8",  // Exemple : bleu PLEIONES
        secondary: "#9333EA", // Exemple : violet secondaire
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
