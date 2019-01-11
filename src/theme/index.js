export default {
  global: {
    font: {
      family: "Avenir Next, sans-serif",
      size: "16px",
      height: 1.5
    },
    colors: {
      gold: "#FCBA59",
      brand: "#2762FF",
      focus: "#2762FF",
      blue: "#2762FF",
      black: "#000000"
    }
  },
  button: {
    extend: `
      &:hover {
        box-shadow: none;
      }
    `
  }
};
