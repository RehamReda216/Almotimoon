/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js", "./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        main: "#64967D", // = primary/500
        "main-light": "#EFF6F2", // = primary/50
        "main-dark": "#254133", // = primary/800
        primary: {
          50: "#EFF6F2",
          100: "#DEede6",
          200: "#BEDACC",
          300: "#9DC8B3",
          400: "#7DB599",
          500: "#64967D",
          600: "#4A8266",
          700: "#37624D",
          800: "#254133",
          900: "#12211A",
          950: "#09100D",
        },
        secondary: {
          50: "#F8F6ED",
          100: "#F0EDDB",
          200: "#E2DBB6",
          300: "#D3C992",
          400: "#C4B76E",
          500: "#CFC589",
          600: "#91843B",
          700: "#6D632C",
          800: "#49421D",
          900: "#24210F",
          950: "#121107",
        },
      },
      spacing: {
        s: "20px", // Small spacing
        md: "60px", // Medium spacing
        l: "100px", // Large spacing
      },
      backgroundImage: {
        // Gradient جديد مخصص
        "green-gradient": "linear-gradient(to right, #4A8266, #8ABFAF)",
      },
      fontFamily: {
        tajawal: "Tajawal",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
