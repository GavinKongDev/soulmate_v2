/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg1": "url('/src/assets/bg1.png')",
        "home-bg2": "url('/src/assets/bg2.png')",
        "home-bg3": "url('/src/assets/bg3.png')",
      },
    },
  },
  plugins: [],
};
