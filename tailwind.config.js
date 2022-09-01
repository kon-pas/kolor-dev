/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./pages/**/*.tsx",
  //   "./components/**/*.tsx",
  // ],
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
    extend: {
      screens: {
        'sm': '500px'
      }
    }
  }
}
