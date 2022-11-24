/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        darkBlue: '#07082E',
        lightBlue: '#4FB1D4',
        roleDark: '#02045A',
        roleLight: '#D1EFF7',
      },

      fontFamily: {
        Overpass: "'Overpass', sans-serif",
      },

      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
      },
      
    }
  },
  plugins: [],
}
