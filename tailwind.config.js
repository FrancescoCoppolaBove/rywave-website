module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        "astro-space": ["AstroSpace"],
      },
      colors: {
        "brand-red": "var(--clr-red)",
        "brand-purple": "var(--clr-purple)",
        "brand-cyan": "var(--clr-cyan)",
        "brand-yellow": "var(--clr-yellow)",
        "brand-blue": "var(--clr-blue)",
        "brand-green": "var(--clr-green)",
        "brand-light": "var(--clr-light)",
        "brand-background": "var(--clr-background)",
      },
    },
  },
  plugins: [],
};
