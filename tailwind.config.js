/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pay-quick": "url('/assets/PayQuick/payQuickBg.png')",
        "snake": "url('/assets/DineQR/snakeLike.png')",
        "empathy-bg": "url('/assets/DineQR/womanBg.png')",
        "vertical-snake": "url('/assets/DineQR/verticalBg.png')",
        "swift-snake": "url('/assets/SwiftLee/wavyLines.png')",
        "empathy-swift-bg": "url('/assets/SwiftLee/maleBg.png')",
      },
    },
  },
  plugins: [],
};
