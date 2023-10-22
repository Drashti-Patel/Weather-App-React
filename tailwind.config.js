/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'primary': '#172554',
      'gray-card': '#6F7784',
      'nav-title': '#e3e6f0',
      current: 'currentColor',
    },
    },
  },
  plugins: [],
}

