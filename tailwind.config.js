import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          header: '#d94c4c'       // rojo pastel intenso
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};