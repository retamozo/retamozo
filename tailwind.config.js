const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {},
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
  plugins: [
    require("@headlessui/tailwindcss"),
    plugin(({ e, addUtilities }) => {
      const list = [...Array(100).keys()];
      const widthWithPercentage = list.map((x) => {
        return {
          [`.${e(`w-${x}%`)}`]: {
            width: `${x}%`,
          },
        };
      });

      addUtilities(widthWithPercentage);
    }),
  ],
  darkMode: "class",
};
