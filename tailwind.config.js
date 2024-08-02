/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a921a3",
        secondary: "#e43c15",
        milkyWhite: "#F7F7F7",
        greyColor: "#828282",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      rotate: {
        "-180": "-180deg",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["hover"],
    },
  },
  plugins: [],
};
