/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark":"#116D6E"
      },
      fontFamily: {
        "robotto": "'Roboto', sans-serif"
      }
    },
  },
  plugins: [],
}

