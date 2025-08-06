/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "royal-blue": "#1e40af", // Add your brand colors
      },
    },
  },
  plugins: [],
};
