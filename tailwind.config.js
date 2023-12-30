/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundColor: {
        
        'custom-red': '#C13E31',
        
        'offWhite' : 'hsl(216, 20%, 97%)',
        'light-gradient' : ' #F3F7FA',
        'light-blue': '#438fda',
        "red-color": "#C13E31",
        'navbar-gray': "#c4c4c4",
        'bg-whitee': "#fff"

        
        
        
      },

      textColor: {
       
        'dark-blue' : '#24243e',
        'text-gray' : ' rgb(107 114 128)',
        "text-red": "#C13E31",

        
        
        
      },


      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}