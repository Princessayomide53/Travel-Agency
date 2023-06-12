/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Volkhov': ['Volkhov', 'serif'],
      'Poppins': ['Poppins', 'serif']
    },
    extend: {
      screens: {
        'pro' : '912px'
      }
    },
  },
  plugins: [],
}

