/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cambio-blue': '#0000FF',
        'cambio-pink': '#FF00FF',
        'cambio-yellow': '#FFD700',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        dela: ['"Dela Gothic One"', 'sans-serif'],
      },
      gridTemplateColumns: {
        '5': 'repeat(5, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};