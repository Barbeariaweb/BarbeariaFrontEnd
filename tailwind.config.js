/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "img-purple":"url('telaDelogin1.jpg')"
      }
    },
  },
  plugins: [],
}

