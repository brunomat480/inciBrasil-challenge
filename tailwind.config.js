/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#091C7A',
        'blue-secondary': '#2F50EE',
        background: '#F8F9FA',
        yellow: '#FFCD85',
      },

      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },

      backgroundImage: {
        'image-home': 'url("/bg-home.png")',
      },
    },
  },
  plugins: [],
};
