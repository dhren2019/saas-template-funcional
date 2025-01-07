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
        'glow-border-subtle': 'glow-border-subtle 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-border-subtle': {
          '0%': { transform: 'translate(0px, 0px)', opacity: '0.5' },
          '25%': { transform: 'translate(5px, -5px)', opacity: '0.4' },
          '50%': { transform: 'translate(10px, 10px)', opacity: '0.5' },
          '75%': { transform: 'translate(-5px, 5px)', opacity: '0.4' },
          '100%': { transform: 'translate(0px, 0px)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animate'),
  ],
};

export default config;
