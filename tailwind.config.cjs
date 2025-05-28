// tailwind.config.cjs
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Define your pastel red header color here
        "pastel-red": "#ff7f7f"
      },
      animation: {
        // Fade-in animation for images/text
        fadeIn: "fadeIn 0.5s ease-out forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms")
  ]
};