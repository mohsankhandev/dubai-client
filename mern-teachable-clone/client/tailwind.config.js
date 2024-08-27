// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// const colors = require('./colors');

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         'tablet': '991px', // Custom breakpoint for 991px
//       },
//       colors: {
//         'deep-blue': '#003366', // Example custom color
//         'light-gray': '#f7f7f7',
//         'charcoal-gray': '#333333',
//         'teal': {
//           100: '#e6fffa',
//           200: '#b2f5ea',
//           300: '#81e6d9',
//           400: '#4fd1c5',
//           500: '#38b2ac',
//           600: '#319795',
//           700: '#2c7a7b',
//           800: '#285e61',
//           900: '#234e52',
//           primary: colors.primary,
//           secondary: colors.secondary,
//           accent: colors.accent,
//           background: colors.background,
//           textPrimary: colors.textPrimary,
//           textSecondary: colors.textSecondary,
//           border: colors.border,
//           buttonText: colors.buttonText,
//         },
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
const colors = require('./colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '991px', // Custom breakpoint for 991px
      },
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        background: colors.background,
        textPrimary: colors.textPrimary,
        textSecondary: colors.textSecondary,
        border: colors.border,
        buttonText: colors.buttonText,
        'deep-blue': '#003366', // Example custom color
        'light-gray': '#f7f7f7',
        'charcoal-gray': '#333333',
        'teal': {
          100: '#e6fffa',
          200: '#b2f5ea',
          300: '#81e6d9',
          400: '#4fd1c5',
          500: '#38b2ac',
          600: '#319795',
          700: '#2c7a7b',
          800: '#285e61',
          900: '#234e52',
        },
      },
    },
  },
  plugins: [],
}
