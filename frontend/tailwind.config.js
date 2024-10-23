/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the standard font
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)", //bg-main-gradient
      },
      colors: {
        primary: "#c471f5", // Use for buttons, links, etc.
        secondary: "#fa71cd", // Use for accents
        text: "#ffffff", // Main text color
        background: "rgba(255, 255, 255, 0.9)",
      },
    },
  },
  plugins: [],
};
