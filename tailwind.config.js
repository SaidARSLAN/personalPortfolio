/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        pBlack : "#222831",
        pGray : "#393E46",
        pOrange : "#D65A31",
        pWhite : "#EEEEEE",
        pGradient : "#080808",
      },
      fontFamily : {
        inc : ['Inclusive Sans', 'sans-serif'],
        roboto : ['Roboto','sans-serif'], 
      }
    },
  },
  plugins: [],
}