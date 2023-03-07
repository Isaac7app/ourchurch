/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          100: "#FAFBFB",
        },
        dark: {
          100: "#06051a",
        },
        churchGreen: {
          80: "#5c9c93",
          100: "#1e6554",
          200: "#227668",
          250: "#37524f",
        },
      },
    },
  },
  plugins: [],
};
