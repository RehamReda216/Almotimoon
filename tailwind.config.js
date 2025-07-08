/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{html,js,ts}",
  ],
  theme: {
    extend: {
        colors: {
        'primary-50': '#EFF6F2',
        'primary-500': '#64967D',
        'primary-600': '#4A8266',
        'primary-700': '#37624D',
        'primary-800': '#254133',
        'secondary-50': '#F8F6ED',
        'secondary-400': '#C4B76E',
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};