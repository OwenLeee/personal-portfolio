/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        99: "99",
        99999: "99999",
      },
      transitionProperty: {
        width: "100%",
      },
      animation: {
        slide: "slide 3s ease-in-out infinite",
        opacity: "opacity 3s ease-in-out infinite",
        down: "overlayEffectDown 1s ease-in-out both",
        up: "overlayEffectUp 1s ease-in-out both",
        fadeIn: "fadeIn",
        fadeOut: "fadeOut",
      },
      keyframes: {
        slide: {
          "0%, 20%, 100%": { width: "0%" },
          "60%, 70%": { width: "100%", paddingRight: "0.5rem" },
        },
        opacity: {
          "0%, 15%, 100%": { opacity: 0 },
          "60%, 70%": { opacity: 1 },
        },
        overlayEffectDown: {
          "0%": { transform: "translateY(-100%)" },
          "35%, 65%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        overlayEffectUp: {
          "0%": { transform: "translateY(100%)" },
          "35%, 65%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
