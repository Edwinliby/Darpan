/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        header: ["var(--font-clash-display) serif"],
        primary: ["var(--font-chakra)"],
      },
    },
  },
  plugins: [],
};
