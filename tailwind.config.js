/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        geo: {
          earth: '#9E6738',   // Ocre terroso principal
          dark: '#63391A',    // Marrom profundo para textos de destaque e contrastes
          sand: '#D8A86C',    // Tom arenito para acentos e tags
          sky: '#4B9CD3',     // Azul do globo/céu
          cyan: '#63C7D0',    // Ciano do marcador e detalhes digitais
          bg: '#FAF8F5',      // Fundo off-white com tom quente
          surface: '#FFFFFF', // Superfície de cards
          text: '#2D231B',    // Texto principal legível
          muted: '#7A6E65'    // Texto secundário
        },
        // Mapeamentos de compatibilidade para tokens semânticos
        primary: '#63391A',
        secondary: '#9E6738',
        background: '#FAF8F5',
        card: '#FFFFFF',
        'text-main': '#2D231B',
        'text-muted': '#7A6E65',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
