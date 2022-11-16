/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-archivo)'],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        bounceSide: {
          '0%, 100%': { transform: 'translateX(25%)' },
          '50%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        fadeAndBounce : 'fadeIn 1s ease-in-out, bounceSide 1.3s ease-in-out infinite'
      },
      
        colors: {
        "dark-900": "#292A2B",
        'dark-800': "#353535",
        'dark-700': '#B3B6B8',
        "heaven-500": "#27A4FF",
      }
    },
  },
  plugins: [],
}