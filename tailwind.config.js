const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors,
        "legal-blue": {
          100: "#1B369A",
          200: "#273E91",
          300: "#061D6E",
        },
        "legal-gray": {
          100: "#F9FAFB",
          200: "#EAECF0",
        },
      },
      fontFamily: {
        inter: ["Inter"],
      },
      backgroundImage: {
        "vesting-img": "url('/images/wallet/connect/background.png')",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {},
  plugins: [require("tailwindcss-filters")],
  // xwind options
  xwind: {
    mode: "objectstyles",
  },
};
