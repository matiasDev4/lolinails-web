/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx, js, ts, tsx}", 
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      screens:{
        "sm": "320px"
      },
      fontFamily:{
        "gotic":"gotic-font"
      },
      backgroundImage:{
        imageTurnos: "url('/src/assets/images/fondo.png')"
      }
    },
  },
  plugins: [],
}

