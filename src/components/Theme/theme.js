import { css } from "styled-components";

const borderWidth = 1;

export default {
  global: {
    font: {
      family: "Avenir Next, sans-serif",
      size: "16px",
      height: 1.5
    },
    focus: {
      border: {
        color: "red"
      }
    },
    colors: {
      "accent-1": "#FCBA59",
      focus: "#2762FF",
      brand: "#2762FF",
      black: "#000000"
    }
  },
  textInput: {
    extend: css`
      font-weight: var(--fw-medium);
      color: white;
      border: none;
      border-bottom: ${borderWidth}px solid white;
      border-radius: 0;

      ::placeholder {
        color: white;
      }
    `
  },
  button: {
    padding: {
      horizontal: `${32 - borderWidth}px`,
      vertical: `${8 - borderWidth}px`
    },
    border: {
      radius: "40px",
      width: `${borderWidth}px`,
      color: {
        dark: "white",
        light: "black"
      }
    },
    color: {
      dark: "white",
      light: "black"
    },
    primary: {
      color: {
        dark: "black",
        light: "black"
      }
    },
    extend: css`
      font-weight: var(--fw-medium);

      &:hover {
        box-shadow: none;
      }
    `
  }
};
