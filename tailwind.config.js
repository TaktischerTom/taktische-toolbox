/** @type {import('tailwindcss').Config} */
module.exports = {
  // classAttributes: ['class', 'className', 'ngClass', 'svgClass'],
  content: ['./src/**/*.{html,ts}'],
  theme: {
    // fontFamily: {
    //   sans: ['"Roboto"', 'sans-serif'],
    //   serif: ['Roboto', 'serif'],
    // },
    colors: {
      black: '#000',
      white: '#fff',
      transparent: 'transparent',

      grey: '#181818',
      'dark-700': '#2f2f2f',
      'dark-600': '#464646',
      'dark-500': '#747474',
      'dark-400': '#A3A3A3',
      'dark-300': '#D1D1D1',
      'dark-200': '#E8E8E8',
      'dark-100': '#F3F3F3',
      'dark-50': '#F8F8F8',

      green: '#4F8003',
      'green-600': '#66A10D',
      'green-500': '#83C224',
      'green-400': '#9CCE50',
      'green-300': '#B5DA7C',
      'green-200': '#CDE7A7',
      'green-100': '#E6F3D3',
      'green-50': '#F1FBE2',

      blue: '#076671',
      'blue-700': '#0A7C89',
      'blue-600': '#0899AB',
      'blue-500': '#3CB8C7',
      'blue-400': '#63C6D2',
      'blue-300': '#8AD4DD',
      'blue-200': '#B1E3E9',
      'blue-150': '#CEEDF1',
      'blue-100': '#D8F1F4',
      'blue-50': '#F5FBFC',

      purple: '#5b3a82',
      'purple-700': '#6a4496',
      'purple-600': '#7b57b0',
      'purple-500': '#9a7ccc',
      'purple-400': '#b19add',
      'purple-300': '#c7b6ea',
      'purple-200': '#ddd2f3',
      'purple-150': '#ece6f8',
      'purple-100': '#f3eefb',
      'purple-50': '#fbf9fe',

      orange: '#BA6A00',
      'orange-600': '#DE7E00',
      'orange-500': '#EF9B11',
      'orange-400': '#F2AF41',
      'orange-300': '#F5C370',
      'orange-200': '#F9D7A0',
      'orange-100': '#FCEBCF',
      'orange-50': '#FFF7E9',

      red: '#800000',
      'red-200': '#BF0000',
      'red-100': '#F3F3F3',
      'red-75': '#FFD2D2',
      'red-50': '#F9E5E5',
    },

    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-bullets': theme('colors.grey'),
            '--tw-prose-bold': theme('colors.grey'),
            maxWidth: '100ch',
          },
        },
      }),
      padding: {
        DEFAULT: '0.85rem',
      },
      // colors: {
      //    success: ({ theme }) => theme('colors.red'),
      // },
      fontSize: {
        '3xl': ['2rem', '2.50rem'],
      },
      fontFamily: {
        sans: ['Roboto'],
        serif: ['Roboto'],
      },
      boxShadow: {
        DEFAULT: '2px 2px 7px rgba(0, 0, 0, 0.15)',
      },
      // borderColor: ({ theme }) => ({
      //   DEFAULT: theme('colors.dark-300'),
      // }),

      borderWidth: {
        DEFAULT: '2px',
        1: '1px',
      },

      borderRadius: {
        DEFAULT: '0.75rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
    // require('prettier-plugin-tailwindcss'),
  ],
}
