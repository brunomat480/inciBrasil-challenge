/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#091C7A',
        'yellow': '#FFCD85',
      },

      fontFamily: {
        'sans': ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}

