/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bghome': "url('/image/bg-homepage.jpg')",
      },
      colors:{
        'black':'#000'
      }
      
    },
  },
  plugins: [],
}

