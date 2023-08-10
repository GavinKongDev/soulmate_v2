/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg1": "url('/src/assets/mobile/bg1.png')",
        "home-bg2": "url('/src/assets/mobile/bg2.png')",
        "home-bg3": "url('/src/assets/mobile/bg3.png')",
        "qa1-bg1": "url('/src/assets/mobile/qa_bg1.png')",
        "qa1-bg2": "url('/src/assets/mobile/qa_bg2.png')",
      },
    },
  },
  plugins: [],
};
