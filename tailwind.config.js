/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-semi': '#04080F',
        primary: '#507DBC',
        secondary:'#92374D',
        'white-semi': '#EFEFEF'
      },
    },
  },
  plugins: [],
}
