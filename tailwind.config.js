/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "paper-pattern": "url('../public/photos/paper.jpg')",
      },
      screens: {
        xs: "450px",
      },
      colors: {
        "sage-green": "#597e52",
      },
      width: {
        1.33: "133%",
        "1/16": "6.25%",
        "2/16": "12.5%",
        "3/16": "18.75%",
        "4/16": "25%",
        "5/16": "31.25%",
        "6/16": "37.5%",
        "7/16": "43.75%",
        "8/16": "50%",
        "9/16": "56.25%",
        "10/16": "62.5%",
        "11/16": "68.75%",
        "12/16": "75%",
        "13/16": "81.25%",
        "14/16": "87.5%",
        "15/16": "93.75%",
      },
      boxShadow: {
        "outline-black": "0 0 0 2px black",
      },
      padding: {
        "1.5vw": "1.5vw",
        1.5: "0.375rem",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
