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
    }

    // fontFamily: {
    //  'Open Sans': ['Open Sans', "sans-serif"]
    // }
    // extend: {},
  },
  plugins: [],
}

