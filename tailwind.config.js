/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(140deg, rgba(255, 255, 255, 0) 0%, rgba(235, 237, 239, 0.87) 100%)',
      },
      
    },
  },
  plugins: [],
}