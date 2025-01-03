const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'false'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        pink: colors.pink,
        rose: colors.rose,
        teal: colors.teal,
        fuchsia: colors.fuchsia,
        steelBlue: '#4682B4', // Add Steel Blue color
        vanilla: "#F3E5AB", // Adding Vanilla
        feldgrau: '#4D5D53', // Add Feldgrau color
        offwhite:'#f8f8f8', // Off White color code
        darkvanilla:'#d1bea8', // Dark Vanilla color code
        asparagus: '#87A96B', // Add Asparagus color
        neutralgray: '#d1d5db', // Light gray (similar to bg-gray-300)
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"]
