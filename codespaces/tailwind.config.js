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
        uranianBlue: "#AFDBF5", // Adding Uranian Blue
        vanilla: "#F3E5AB", // Adding Vanilla
        davysgray:'#555555', // Davy's Gray color code
        offwhite:'#f8f8f8', // Off White color code
        darkvanilla:'#d1bea8', // Dark Vanilla color code
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"]
