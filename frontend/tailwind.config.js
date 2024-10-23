/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/indx.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the standard font
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)", //bg-main-gradient
        "secondary-gradient": "linear-gradient(to right, #ff7e5f, #feb47b)",
      },
      colors: {
        primary: "#c471f5", // Use for buttons, links, etc.
        secondary: "#fa71cd", // Use for accents
        text: "#ffffff", // Main text color
        background: "rgba(255, 255, 255, 0.9)", // Background for cards
        muted: "#f0f4f8", // Light background for subtle sections
        dark: "#2d3748", // Dark text color for better readability on light backgrounds
        accent: "#4A5568", // Neutral accent for borders, shadows, etc.
        success: "#38a169", // Success color (green)
        warning: "#dd6b20", // Warning color (orange)
        error: "#e53e3e", // Error color (red)
        info: "#3182ce", // Info color (blue)
        primaryhover: "#a054e7", // Darker shade for primary button hover
        secondaryhover: "#f8589b", // Darker shade for secondary button hover
      },
    },
  },
  plugins: [],
};
