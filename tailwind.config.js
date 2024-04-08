/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-80': '#383B43',
        'gray-70': '#9EA6B4',
        'indigo-20': '#D3D2DE',
        'indigo-100': '#211C5C',
        brand: '#ED0E61',
      },
      backgroundImage: {
        'iias-card-type-3': 'url("/src/assets/type-3.svg")',
      }
    },
  },
  plugins: [],
}
