module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        "hero-bg": "url('./src/assets/background.jpg')",
      },
      fontFamily: {
        Barlow: "Barlow Condensed",
        Bellefair: "Bellefair",
      },
    },
  },
  plugins: [],
};
