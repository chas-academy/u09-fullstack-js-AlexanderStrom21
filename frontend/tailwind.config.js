/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/indx.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the standard font
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(to top, #9b59b6 0%, #d94d92 100%)", //bg-main-gradient
      },
      colors: {
        background: "#2E073F", //Cards
        primary: "#7A1CAC", // Use for buttons, links, etc.
        secondary: "#AD49E1", // Use for accents
        text: "#EBD3F8", // Main text color
        navbar: "#2E073F", // Dark background for navbar
        dark: "#2d3748", // Dark text color for better readability on light backgrounds
        warning: "#dd6b20", // Warning color (orange)
        error: "#e53e3e", // Error color (red)
        info: "#3182ce", // Info color (blue)
        primaryhover: "#a054e7", // Darker shade for primary button hover
      },
    },
  },
  plugins: [],
};
