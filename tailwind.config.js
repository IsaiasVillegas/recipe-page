/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p: {
          1: "#854632",
          2: "#7A284E",
        },
        n: {
          1: "#FFFFFF",
          2: "#FFF7FB",
          3: "#F3E5D7",
          4: "#E3DDD7",
          5: "#5F564D",
          6: "#312E2C",
        },
      },
      fontFamily: {
        youngSerif: ["var(--font-youngSerif)", ...fontFamily.sans],
        outfit: "var(--font-outfit)",
      },
    },
  },
  plugins: [],
};
