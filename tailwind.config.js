/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors:{
       'celadon': { DEFAULT: '#a1cca5', 100: '#1a301c', 200: '#335f38', 300: '#4d8f54', 400: '#72b379', 500: '#a1cca5', 600: '#b5d7b8', 700: '#c7e1ca', 800: '#daebdc', 900: '#ecf5ed' }, 
       'cambridge_blue': { DEFAULT: '#8fb996', 100: '#19281c', 200: '#325037', 300: '#4b7853', 400: '#669f6f', 500: '#8fb996', 600: '#a5c6aa', 700: '#bbd5bf', 800: '#d2e3d5', 900: '#e8f1ea' }, 
       'cambridge_green': { DEFAULT: '#709775', 100: '#161f17', 200: '#2d3e2f', 300: '#435c46', 400: '#597b5e', 500: '#709775', 600: '#8dad92', 700: '#aac1ad', 800: '#c6d6c8', 900: '#e3eae4' }, 
       'hunter_green': { DEFAULT: '#415d43', 100: '#0d130d', 200: '#1a251b', 300: '#273828', 400: '#344b35', 500: '#415d43', 600: '#5e8760', 700: '#82a885', 800: '#acc5ae', 900: '#d5e2d6' }, 
       'eerie_black': { DEFAULT: '#111d13', 100: '#030604', 200: '#070c08', 300: '#0a110b', 400: '#0e170f', 500: '#111d13', 600: '#335739', 700: '#569260', 800: '#8aba92', 900: '#c5ddc9' },
       'bg-sebtiago': '#1D1D1F',

    },
    extend: {
      spacing: {
        '-500': '-500px', 
      },
    },
  },
  plugins: [],
}

