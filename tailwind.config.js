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
        bebas: ["var(--font-bebas)"],
      },
      colors: {
        soothing_black: "#0E1111",
        main_primary: "#CAFA19",
        primary: "#273201",
        gray: "#3b4b02",
        footer: "#1B1B1B",
      },
      screens: {
        sm: "496px",
        md: "712px",
        lg: "900px",
        xl: "1142px",
        '2xl': "1536px",
      },
      boxShadow: {
        '3xl': '0 0px 5px 5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
