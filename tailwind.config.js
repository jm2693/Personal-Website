/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.jsx", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryGreen: "#606C38",
        secondaryGreen: "#283618",
        white: "#FEFAE0",
        yellow: "#DDA15E",
        orange: "#BC6C25",
        primaryBrown: "#5E3B11",
        secondaryBrown: "#35220A",
        blue: "#527ECE",
        red: "#FA5356",
      },
      fontFamily: {
        museomoderno: ["MuseoModerno", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

