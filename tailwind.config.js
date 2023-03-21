/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        header: ["var(--font-clash-display)"],
        primary: ["var(--font-chakra)"],
        ibm: ["var(--font-ibm)"],
      },
      colors: {
        violot: "#9747FF",
      },
    },
  },
  plugins: [],
};
