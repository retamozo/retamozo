const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      animation: {
        "toggle-visibility": "toggle-transitioned 1s infinite",
      },
      keyframes: {
        "toggle-transitioned": {
          "0%, 50%": { visibility: "hidden" },
          "51%": { visibility: "visible" },
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
  darkMode: "class",
};
