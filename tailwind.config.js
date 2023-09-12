/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        "1/2": "50%",
        "1/3": "33.333333%",
      },
      fontSize: {},
      colors: {
        primary: { light: "#00bd7a", DEFAULT: "#009e66" },
        secondary: "#F0F0F0",
        tertiary: "#9F9F9F",
        label: "#DADADA",
      },
      margin: {
        17: "70px",
      },
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
        barAnimation: "barAnimation 3s linear infinite",
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
        barAnimation: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(75px)",
          },
        },
      },
    },
  },
  plugins: [],
};
