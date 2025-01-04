/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#2d3192",
        },
        grey: {
          100: "#FAFAFC",
          200: "#808080",
          300: "#EFF1F7",
          400: "#F5F6F9",
        },
        black: {
          100: "#242424",
          200: "rgba(0, 0, 0, 0.4)",
        },
        orange: "#ff931d",
      },
      boxShadow: {
        100: "0px 31px 50px 0px #09454312",
      },

      fontFamily: {
        main: ["Rethink Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    }),
  ],
};
