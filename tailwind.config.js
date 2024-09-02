/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT: "#FD3C4A",
          100: "#FFF6E5",
        },
        green: "#00A86B",
        red: "#FD3C4A",
        gray: {
          DEFAULT: "#A89696",
          100: "#D9D9D9",
          200: "#C6C6C6"
          
        }, 
        orange: "#FCAC12",
        violet: "#7F3DFF"
        
      }
    },
  },
  plugins: [],
}

