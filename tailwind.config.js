/** @type {import('tailwindcss').Config} */

const primaryColors = {
  'primary': '#0a0a0a'
}

const surfaceColors = {
  'surface': '#fafafa'
}

const colors = {
  ...primaryColors,
  ...surfaceColors
}

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {colors},
  },
  plugins: [],
}

