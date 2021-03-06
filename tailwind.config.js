/* eslint-disable global-require */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm2: '760px',
        md2: '1020px',
      },
    },
    fontFamily: {
      display: ['Oswald', 'swap'],
      serif: ['Playfair Display', 'serif'],
      heading: ['Playfair Display', 'serif'],
      body: 'Open Sans',
    },
    filter: { // defaults to {}
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
    },
    backdropFilter: { // defaults to {}
      none: 'none',
      blur: 'blur(5px)',
    },
  },
  variants: {
    extend: {},
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
};
