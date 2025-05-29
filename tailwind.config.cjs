/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/js/**/*.js"
  ],
  safelist: [
    // Clases del contenedor flotante
    'fixed', 'right-4', 'bottom-4', 'z-50', 'flex', 'flex-col', 'gap-2',
    'rounded-xl', 'bg-white/80', 'p-3', 'shadow-lg',
    // Clases de los botones
    'rounded-md', 'border', 'bg-footer-gray', 'px-2', 'py-1',
    'text-xs', 'font-semibold'
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
