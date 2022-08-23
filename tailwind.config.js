/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      gray: {
        light: '#f5f5f5',
        medium: '#dcdcdc',
        dark: '#8C8889'
      },
      black: '#222222'
    },
    extend: {},
  },
  plugins: [],
}
