/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: ["class", "[data-dark-mode='true']"],  // controlado por contexto
  theme: {
    extend: {
      colors: {
        "brand-red": "#cf2d3a" // rojo pastel intenso
      },
      cursor: {
        large: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDBMNiAxMmw0LTMgNCAzWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==") 10 0, auto'
      }
    }
  },
  plugins: []
};
