/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "pastel-red": "#ff6d6d",
        "footer-gray": "#f1f1f1"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
