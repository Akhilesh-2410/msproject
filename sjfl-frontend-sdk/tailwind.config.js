module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      teal: "#008891",
      gray: "d3d3d3",
      currentColor: "currentColor",
      transparent: "transparent",
      clinic: {
        100: "#E1E5F2",
        300: "#BFDBF7",
        500: "#1F7A8C",
        700: "#022B3A",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
  },
  variants: {
    extend: {},
    
  },
  plugins: [],
};
