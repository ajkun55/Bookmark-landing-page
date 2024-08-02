/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "Soft-Blue": "hsl(231, 69%, 60%)",
      "Soft-Red": "hsl(0, 94%, 66%)",

      "Grayish-Blue": "hsl(229, 8%, 60%)",
      "Very-Dark-Blue": "hsl(229, 31%, 21%)",
      white: "#fff",
      "light-gray": "hsl(0, 0%, 95%)",
    },
    extend: {},
    plugins: [],
  },
};
