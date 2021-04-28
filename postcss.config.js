const colors = require('tailwindcss/colors');


module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "true-gray":colors.trueGray
      },
    },
  },
  variants: {},
  plugins: {
    // tailwindcss: {},
    // autoprefixer: {},
  },
};
