/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-blue": "#001970",
        "accent-50": "#F4F4F4",
        "accent-orange": "#FF5D27",
        "accent-orange-100": "#EF514021",
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
