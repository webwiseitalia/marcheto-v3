/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marcheto-brown': '#2d1810',
        'marcheto-dark': '#1a0f0a',
        'marcheto-gold': '#f5a623',
      },
      fontFamily: {
        'grotesk': ['Schibsted Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}
