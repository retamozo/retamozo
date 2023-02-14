const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      animation: {
        "toggle-visibility": "toggle-transitioned 1.5s infinite",
        "grow-y": "grow-y 1s ease-out forwards",
        "grow-x": "grow-x 1s ease-out forwards",
      },
      keyframes: {
        "toggle-transitioned": {
          "0%, 50%": { visibility: "hidden" },
          "51%": { visibility: "visible" },
        },
        "grow-y": {
          from: {
            transform: "scaleY(0)",
          },
        },
        "grow-x": {
          from: {
            transform: "scaleX(0)",
          },
        },
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    require("./src/tailwind/packages/percentWidth"),
  ],
  darkMode: "class",
};
