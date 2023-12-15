/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat'],
      },
      colors:{
        green1:"#aed67d",
        gray1:"#ececec",
        gray2:"#353535",
      },
    },
  },
  plugins: [],
}

