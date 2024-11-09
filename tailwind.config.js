/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],  // Ensure it includes the public folder
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2DS",
          200: "#888883"
        }
      },
      fontFamily: {
        body: ["Nunito"]
      }
    },
  },
  plugins: [],
}


