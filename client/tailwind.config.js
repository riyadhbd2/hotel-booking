/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-dull": "#1E40AF", // or any slightly duller blue
        secondary: "#FBBF24",
      },
    },
  },
  plugins: [],
};
