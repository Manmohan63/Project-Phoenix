/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': { 'min': '1px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '991px' },
      'lg': { 'min': '992px', 'max': '1199px' },
      'xl': { 'min': '1200px' },
    },
    colors: {
      'main': '#dbad69',
      'dark__blue': '#060031',
      'light__blue': '#7b9e57',
      'gradient__light__blue': '#080042',
      'bg_blue_phoenix': '#0b005d',
      'light_theme_bg': '#FFF1DC',
      'light_theme_ot': '#3A98B9',
    },
  },
  plugins: [],
}
