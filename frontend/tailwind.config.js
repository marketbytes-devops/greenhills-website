/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2b6843",
        secondary: "#000000",
        secondaryBlack: "#181818",
        secondaryLightBlack: "#191919"
      },
    },
  },
  plugins: [],
}
