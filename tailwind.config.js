/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg1": "url('/assets/bg1.png')",
        "home-bg2": "url('/assets/bg2.png')",
        "home-bg3": "url('/assets/bg3.png')",
        "qa1-bg1": "url('/assets/qa1/bg1.png')",
        "qa1-bg2": "url('/assets/qa1/bg2.png')",
      },
    },
  },
  plugins: [],
};
