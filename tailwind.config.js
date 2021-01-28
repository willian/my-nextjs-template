const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' },
      },
      spacing: {
        22: '5.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  xwind: {
    mode: 'objectstyles',
  },
}
