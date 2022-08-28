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
        "bg-1": '#f9f9f9',
        "bg-2": '#f7f7f7',
        "bg-3": '#f5f5f5',
        'font': '#7b7b7b'
      },
      black: '#000000'
    },
    extend: {},
  },
  plugins: [],
}
