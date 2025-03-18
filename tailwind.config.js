/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#292DC2", // Main color 
        primaryLight: "#5C60E6", // Lighter shade for hover effects
        secondary: "#FF9800", // Complementary color
        darkBg: "#121212", // Background for dark mode 
        darkText: "#EDEDED", // Light text for dark mode
      },
    },
  },
  plugins: [],
};
