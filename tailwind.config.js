/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: { default: "15px" },
      screen: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1330px",
      },
      center: true,
    },

    extend: {
      fontFamily: {
        primary: "Raleway",
        secondary: "Anton",
        main: "Poppins",
      },
    },
  },
  plugins: [],
};
