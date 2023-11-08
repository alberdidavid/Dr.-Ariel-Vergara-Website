/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gotham', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors:{
        green1:"#aed67d",
      },
    },
  },
  plugins: [],
}

