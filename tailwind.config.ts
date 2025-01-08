import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#030712',
        primary: {
          DEFAULT: '#7c3aed',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#6d28d9',
          foreground: '#ffffff',
        },
      },
      animation: {
        'glow-light': 'glow-light 10s linear infinite', // Animación de iluminación suave
      },
      keyframes: {
        'glow-light': {
          '0%': { transform: 'translate(-1%, -0.5%) rotate(0deg)' }, // Sobresale menos hacia arriba
      '25%': { transform: 'translate(1%, -0.5%) rotate(90deg)' }, // Sobresale menos hacia arriba
      '50%': { transform: 'translate(1%, 0.5%) rotate(180deg)' }, // Sobresale menos hacia abajo
      '75%': { transform: 'translate(-1%, 0.5%) rotate(270deg)' }, // Sobresale menos hacia abajo
      '100%': { transform: 'translate(-1%, -0.5%) rotate(360deg)' }, // Vuelve al inicio con menos sobresaliente
    },
      },
    },
  },
  plugins: [],
};

export default config;
