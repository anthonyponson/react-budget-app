/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reddishgray:"#f3eeee",

      },
      screens:{
        xmd:"850px"
      }
    },
  },
  plugins: [],
}