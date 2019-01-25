import { css } from "styled-components";
import { base } from "grommet/themes";
import { deepMerge, breakpointStyle } from "grommet/utils";
import { headerStyles, subheaderStyles, headingLevels } from "./typography";

const borderWidth = 1;

const custom = {
  global: {
    font: {
      family: "Avenir Next, sans-serif",
      size: "14px",
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
    },
    breakpoints: {
      small: {
        value: 768
      },
      medium: {
        value: 1200
      },
      large: {}
    },
    deviceBreakpoints: {
      phone: "small",
      tablet: "medium",
      computer: "medium"
    }
  },
  icon: {
    extend: css`
      fill: #000000;
      stroke: #000000;
    `
  },
  textInput: {
    extend: css`
      font-weight: var(--fw-medium);
      color: black;
      border: none;
      border-bottom: ${borderWidth}px solid #fff;
      border-radius: 0;
      padding-bottom: calc(11px - 1px);

      ::placeholder {
        color: black;
      }
    `
  },
  heading: {
    weight: "var(--fw-demibold)",
    responsiveBreakpoint: null,
    level: headingLevels,
    extend: props => css`
      ${(props.level === 1 || !props.level) && headerStyles}
      ${(props.level === 2 ||
        props.level === 3 ||
        props.level === 4 ||
        props.level === 5 ||
        props.level === 6) &&
        subheaderStyles}

      ${!props.noLine &&
        css`
          border-bottom: 1px solid black;
        `}
    `
  },
  paragraph: {
    small: {
      size: "20px",
      height: "32px",
      maxWidth: "unset"
    },
    medium: {
      size: "14px",
      height: "24px",
      maxWidth: "unset"
    }
  },
  text: {
    small: {
      size: "20px",
      height: "32px",
      maxWidth: "unset"
    },
    medium: {
      size: "14px",
      height: "24px",
      maxWidth: "unset"
    }
  },
  // grid: {
  //   extend: props => css`
  //     ${props.staggered &&
  //       css`
  //         ${breakpointStyle(
  //           theme.breakpoints.small,
  //           css`
  //             display: flex;
  //             flex-direction: column;
  //           `
  //         )}
  //
  //         ${props.reversed &&
  //           css`
  //             flex-direction: column-reverse;
  //           `}
  //       `}
  //   `
  // },
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
        dark: "white",
        light: "black"
      }
    },
    extend: props => css`
      font-weight: var(--fw-medium);

      &:hover {
        box-shadow: none;

        ${props.primary &&
          css`
            background-color: var(--c-brand);
            border-color: var(--c-brand);
          `}
      }
    `
  }
};

const theme = deepMerge(base, custom);

export default theme;
