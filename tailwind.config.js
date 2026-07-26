/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0b0a0c",
          soft: "#141217",
          line: "#231f26",
        },
        cream: {
          DEFAULT: "#f3ecdd",
          dim: "#d9d0bd",
        },
        blush: {
          DEFAULT: "#e7b8c2",
          deep: "#c98a9a",
        },
        gold: {
          DEFAULT: "#c9a46a",
          bright: "#e3c48f",
          dim: "#8a7148",
        },
        wine: {
          DEFAULT: "#3a1220",
          bright: "#5c1a30",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ['"Manrope"', "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      boxShadow: {
        glow: "0 0 40px rgba(201, 164, 106, 0.25)",
        card: "0 20px 60px rgba(0,0,0,0.45)",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: 0.25, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.3)" },
        },
        drift: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        twinkle: "twinkle 3.5s ease-in-out infinite",
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
