/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
        script: ["'Great Vibes'", "cursive"], // Add this line for cursive use
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1s ease-out forwards',
      },
      colors: {
        primary: "#C9A24E", // Soft gold
      },
    },
  },
  plugins: [],
};