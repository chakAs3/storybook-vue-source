/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#142980",
        secondary: "#1B8CE3",
        tertiary: "#07CDE5",
        quaternary: "#2EE4B3",
        quinary: "#97369F",

        // Alerts
        "alert-success": "#36B707",
        "alert-error": "#D51F1F",
        "alert-warning": "#FF9505",
      },
    },
  },
  plugins: [],
};
