/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#7C841E",
        accent100: "#F8F4E8",
        crimson: "#FF8458",
        neutral100: "#FFFAF4",
      },
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      Branch: ["Branch"],
      Poppins: ["Poppins"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
