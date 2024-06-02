/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#A1EEBD",
        "accent": "#D0BFFF",
      },
    },
  },
  plugins: [],
}

