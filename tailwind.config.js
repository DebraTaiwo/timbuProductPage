/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-rgba': 'rgba(25, 13, 64, 1)',
        'other-rgba':'rgba(198, 189, 222, 1)',
      },
      backgroundImage:(theme)=>({
        "mobile-home": "url('./assets/image.png')",
      }),
      textColor:{
        'custom-text': 'rgba(25, 13, 64, 1)'
      },
      borderColor:{
        'custom-border': 'rgba(25, 13, 64, 1)'
      }
    },
  },
  plugins: [],
}