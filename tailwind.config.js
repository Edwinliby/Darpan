/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        clash: ["var(--font-clash-display)"],
        chakra: ["var(--font-chakra)"],
        ibm: ["var(--font-ibm)"],
      },
      colors: {
        soothing_black: "#0E1111",
        primary: "#9747FF",
        gray: "#868888",
        footer: "#1B1B1B",
      },
      screens: {
        sm: "496px",
        md: "712px",
        lg: "900px",
        xl: "1280px",
        '2xl': "1536px",
      },
    },
  },
  plugins: [],
};
