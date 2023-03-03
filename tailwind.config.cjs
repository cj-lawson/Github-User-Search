/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
      },
      colors: {
        blue: {
          light: "#F6F8FF",
          dark: "#141D2F",
          crayola: "#0079FF",
        },
        gray: {
          light: "#FEFEFE",
          dark: "#1E2A47",
          "primary-dark": "#2B3442",
          "secondary-dark": "#4B6A9B",
          "primary-light": "#fff",
          "secondary-light": "#fff",
          tertiary: "#697C9A",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
