/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "100%",
      },
      animation: {
        slide: "slide 3s ease-in-out infinite",
        opacity: "opacity 3s ease-in-out infinite",
      },
      keyframes: {
        slide: {
          "0%": { width: "0%" },
          "20%": { width: "0%" },
          "60%": { width: "100%", paddingRight: "0.5rem" },
          "70%": { width: "100%", paddingRight: "0.5rem" },
          "100%": { width: "0%" },
        },
        opacity: {
          "0%": { opacity: 0 },
          "15%": { opacity: 0 },
          "60%": { opacity: 1 },
          "70%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
