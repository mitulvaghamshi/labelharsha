/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", ".theme-dark"],
  theme: {
    extend: {
      colors: {
        primary: "#FF1493",
        secondary: "#FF6B35",
        accent: "#FFB81C",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        logo: ["Cinzel Decorative", "serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        alt: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
