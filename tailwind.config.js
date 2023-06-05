/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        jetbrains: ['var(--font-jetbrains-mono)'],
        lato: ['var(--font-lato)'],
        'source-serif-pro': ['var(--font-source-serif-pro)'],
      },
    },
  },
  plugins: [],
};
