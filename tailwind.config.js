/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./common/components/**/*.tsx"
  ],
  theme: {
    colors: {
      white: '#ffffff',
      gray: {
        bg: {
          "1": '#f9f9f9',
          "2": '#f7f7f7',
          "3": '#f5f5f5'
        },
        'font': '#7b7b7b'
      },
      black: '#000000'
    },
    screens: {
      'hoverable': { 'raw': '(hover: hover) and (pointer: fine)' },
      'sm': '600px',
      'md': '1000px'
    },
    extend: {
      transitionProperty: {
        'width': 'width'
      }
    }
  }
}
