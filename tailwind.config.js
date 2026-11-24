/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: { md: "900px" },
      // Light/dark values live as CSS variables in app/globals.css
      colors: {
        paper: "var(--bg)",
        ink: "var(--ink)",
        mut: "var(--mut)",
        card: "var(--card)",
        line: "var(--line)",
        forest: "var(--forest)",
        forest2: "var(--forest2)",
        gold: "#f0a42b",
        maroon: "#6b1d33",
        on: "#f4efe3",
      },
      fontFamily: {
        fd: ["var(--fd)", "Georgia", "serif"],
        fb: ["var(--fb)", "system-ui", "sans-serif"],
        te: ["var(--ft)", "var(--fb)", "sans-serif"],
      },
      backgroundImage: {
        diamonds:
          "linear-gradient(45deg,transparent 48.5%,#fff 49%,#fff 51%,transparent 51.5%),linear-gradient(-45deg,transparent 48.5%,#fff 49%,#fff 51%,transparent 51.5%)",
      },
      keyframes: {
        fadeup: { from: { opacity: "0", transform: "translateY(22px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: { fadeup: "fadeup .9s both" },
    },
  },
  plugins: [],
};
