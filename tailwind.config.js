/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'inci-neutral-0': '#FFFFFF',
        'inci-neutral-50': '#FCFCFC',
        'inci-neutral-100': '#F8F9FA',
        'inci-neutral-200': '#F5F5F7',
        'inci-neutral-300': '#F0F0F2',
        'inci-neutral-400': '#E6E6E8',
        'inci-neutral-500': '#DCDCDE',
        'inci-neutral-600': '#D7D7D9',
        'inci-neutral-700': '#ABACAD',
        'inci-neutral-800': '#868686',
        'inci-neutral-900': '#656566',
        'inci-neutral-1000': '#2E2E2E',
        'inci-neutral-1100': '#131313',

        'primary-inci-50': '#F0F2FF',
        'primary-inci-100': '#DBE1FF',
        'primary-inci-200': '#BDC5E5',
        'primary-inci-300': '#8B98D1',
        'primary-inci-400': '#6D77A3',
        'primary-inci-500': '#0C228F',
        'primary-inci-600': '#091C7A',
        'primary-inci-700': '#091A6B',
        'primary-inci-800': '#050F40',
        'primary-inci-900': '#03061A',

        'inci-secondary-50': '#fff9f0',
        'inci-secondary-100': '#ffebd0',
        'inci-secondary-200': '#ffe2b9',
        'inci-secondary-300': '#ffd599',
        'inci-secondary-400': '#ffcd85',
        'inci-secondary-500': '#ffc067',
        'inci-secondary-600': '#e8af5e',
        'inci-secondary-700': '#b58849',
        'inci-secondary-800': '#8c6a39',
        'inci-secondary-900': '#6b512b',

        'inci-blue-50': '#eaeefd',
        'inci-blue-100': '#bfc9fa',
        'inci-blue-200': '#9faff7',
        'inci-blue-300': '#748af4',
        'inci-blue-400': '#5973f1',
        'inci-blue-500': '#2f50ee',
        'inci-blue-600': '#2b49d9',
        'inci-blue-700': '#2139a9',
        'inci-blue-800': '#1a2c83',
        'inci-blue-900': '#142264',

        // background: '#F8F9FA',
      },

      fontFamily: {
        // sans: ['Montserrat', 'sans-serif'],
        sans: ['Rethink Sans', 'sans-serif'],
      },

      backgroundImage: {
        'image-home': 'url("/bg-home.png")',
      },
    },
  },
  plugins: [],
};
