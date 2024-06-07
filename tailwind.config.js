/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wave: "wave 3s infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(14deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(14deg)" },
          "50%": { transform: "rotate(-4deg)" },
          "60%": { transform: "rotate(10deg)" },
          "70%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      colors: {
        'darkish': '#121212',
        'darkish-highlight': '#1c1c1c',
        'darkish-light': '#2b2b2b',
        'lightish': '#DDDDDD',
        'lightish-highlight': '#d4d4d4',
        'lightlish-light': '#bebebe', 
      }
    },
  },

  plugins: [],
};
