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
        lightYellow: "#FFDF8D",
        orange: "#BC6C25",
        primaryBrown: "#5E3B11",
        secondaryBrown: "#35220A",
        blue: "#527ECE",
        red: "#FA5356",
      },
      fontFamily: {
        museomoderno: ["MuseoModerno", "sans-serif"],
      },
      animation: {
        'moving-bg': 'moving-background 60s linear infinite',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '16': '16px',
    }
  },
  plugins: [],
}

