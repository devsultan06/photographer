/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark08: "#131316", // Deep black
        dark06: "#0E0E10", // Black

        dark12: "#1C1C21", // Dark gray
        yellow: "#FFD11A",
        white: "#FFFFFF",
        grey90: "#E4E4E6",
        grey70: "#AFB0B6",
        grey50: "#797C86",
        grey40: "#62646C",
        dark20: "#333333",
        grey80: "#CACACE",
        lightgrey: "#666666",
        dark03: "#070708",
        grey95: "#F2F2F3"


      },
      screens: {
        "max-500": { max: "500px" },
        "max-400": { max: "400px" },
        "max-700": { max: "700px" },
        "max-800": { max: "800px" },
        "max-900": { max: "900px" },
        "max-1000": { max: "1000px" },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        kumbh: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
