/** @type {import('tailwindcss').Config} */

const primaryColors = {
  primary: "#0a0a0a",
};

const surfaceColors = {
  surface: "#ffffff",
  "surface-50": "#fafafa",
  "surface-dark": "#1c1d20",
};

const colors = {
  ...primaryColors,
  ...surfaceColors,
};

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: { colors },
  },
  plugins: [],
};
