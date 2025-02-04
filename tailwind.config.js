/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary))",
        secondary: "var(--scondary)",
        bg: "var(--gradient-bg)",
        btngradient: "var(--btn-gradient)", 
      },
      fontFamily:{
        jetbrains:['JetBrains-Bold', 'serif'],
        avenir:['Avenir', 'serif'],
      }
    },
  },
  darkMode: "class",  
  plugins: [],
};
