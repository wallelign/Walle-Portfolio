/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "top-color": "#8e4d57",
        heading: "#fcfbfc",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
