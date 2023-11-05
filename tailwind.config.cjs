/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    fontFamily: {
      serif: ["Lora", "serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1f1f1f",
          "primary-content": "#fff",
          "base-100": "#ffffff",
          secondary: "#f8fafc",
        },
      },
      {
        dark: {
          primary: "#ffffff",
          "primary-content": "#0f172a",
          "base-100": "#0f172a",
          secondary: "#1e293b",
        },
      },
    ],
  },
};
