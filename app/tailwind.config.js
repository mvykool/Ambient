/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#66925a",
        accent: "#f0638d",
      },
    },
  },
  plugins: [],
};
