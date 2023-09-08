/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'p':'Poppins',
        'h1':'Heebo'
      },

      boxShadow:{
        'effect':'0px 10px 30px 0px rgba(0, 0, 0, 0.10)',
      }
      
    },
  },
  plugins: [],
}

