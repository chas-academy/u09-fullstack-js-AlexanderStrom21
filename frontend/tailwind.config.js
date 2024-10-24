/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/indx.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the standard font
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(to top, #9b59b6 0%, #d94d92 100%)", //bg-main-gradient Root-bg
      },
      colors: {
        background: "#2E073F", //main Cards
        primary: "#7A1CAC", //secound color thats above main card
        secondary: "#AD49E1", // third color thats above primary or to mix with for more contrast
        text: "#EBD3F8", // Main that isnt 100% white text color
        navbar: "#2E073F", // background for navbar
        dark: "#2d3748", // Dark text for white forms
        warning: "#dd6b20", // delete button color (orange)
        error: "#e53e3e", // delete hover color (red)
        info: "#f8589b", // buttons that isnt a delete color (pink)
        primaryhover: "#a054e7", // purple hover
        infohover: "#a35a7e", //pink hover
      },
    },
  },
  plugins: [],
};
