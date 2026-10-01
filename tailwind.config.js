/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-page': '#F4ECE2',       // Bege claro quente e orgânico para o fundo da página
        'surface': '#FFFFFF',       // Branco para os cards dos pilares, trazendo respiro
        'earth-dark': '#4A2E1B',     // Marrom aquecido para títulos H1/H2 e cabeçalhos
        'earth-muted': '#7A5C43',    // Marrom suave para linhas e detalhes secundários
        'slate-accent': '#2E4A62',   // Azul-ardósia pontual — botão 'Explorar Roteiros' e detalhes institucionais
        'mineral-accent': '#5E7C6D', // Verde mineral pontual — badges, ícones e tags de natureza
        'text-body': '#4A4A4A',      // Cinza escuro equilibrado para parágrafos, legível e leve
        
        // Mapeamentos complementares para integração fluida
        geo: {
          earth: '#7A5C43',
          dark: '#4A2E1B',
          sand: '#D8A86C',
          sky: '#2E4A62',
          cyan: '#5E7C6D',
          bg: '#F4ECE2',
          surface: '#FFFFFF',
          text: '#4A4A4A',
          muted: '#7A5C43'
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        open: ['Open Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
