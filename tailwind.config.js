/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      raisin: "#1a1e27",
      gunmetal: "#2c3039",
      cadet: "#8191a1",
      babypowder: "#fafefc",
      amaranth: "#dc1c4b",
      spring: "#22f165",
      flax: "#e0cb85",
    },
    fontFamily: {
      sans: ['"Myriad Pro"', "sans-serif"],
      trajan: ['"Trajan Pro"', "serif"],
    },
  },
  plugins: [],
};
