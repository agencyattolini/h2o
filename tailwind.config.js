module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "var(--primary-dark)",
      },
      fontFamily: {
        sans: ["var(--font-main)"],
        display: ["var(--font-display)"],
      },
    },
  },
};
