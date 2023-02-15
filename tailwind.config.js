/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#D9D9D9",
      },
      height: {
        "h-1/10": "10%",
      },
    },
  },
  plugins: [],
};
