/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ubter: ['inter', 'serif']
      },
      screens: {
        'sm': '420px',
      }
    },
  },
  plugins: [],
}
