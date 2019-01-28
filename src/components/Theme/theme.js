import { css } from "styled-components";
import { base } from "grommet/themes";
import { deepMerge, breakpointStyle } from "grommet/utils";

const borderWidth = 1;

const breakpoints = {
  small: {
    value: 768
  },
  medium: {
    value: 1200
  },
  large: {}
};

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
    hover: {
      color: {
        light: "var(--c-brand)",
        dark: "white"
      }
    },
    colors: {
      "accent-1": "#FCBA59",
      focus: "#2762FF",
      brand: "#2762FF",
      black: "#000000"
    },
    breakpoints: { ...breakpoints },
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
    level: {
      1: {
        medium: {
          size: "20px",
          height: "32px",
          maxWidth: ""
        }
      },
      2: {
        medium: {
          size: "16px",
          height: "24px",
          maxWidth: ""
        }
      },
      3: {
        medium: {
          size: "16px",
          height: "24px",
          maxWidth: ""
        }
      },
      4: {
        medium: {
          size: "16px",
          height: "24px",
          maxWidth: ""
        }
      },
      5: {
        medium: {
          size: "16px",
          height: "24px",
          maxWidth: ""
        }
      },
      6: {
        medium: {
          size: "16px",
          height: "24px",
          maxWidth: ""
        }
      }
    },
    extend: props => css`
      text-align: left;
      margin-top: 0;

      ${props.lined &&
        css`
          /* Element Lined Style */
          border-bottom: 1px solid black;

          /* Not Mobile Styles */
          ${(props.level === 1 || !props.level) &&
            css`
              padding-bottom: 32px;
              margin-bottom: 64px;
            `}

          ${props.level === 2 &&
            css`
              padding-bottom: 24px;
              margin-bottom: 40px;
            `}

          /* Mobile Styles */
          ${breakpointStyle(
            breakpoints.small,
            css`
              ${(props.level === 1 || !props.level) &&
                css`
                  padding-bottom: 48px;
                  margin-bottom: 96px;
                `}

              ${props.level === 2 &&
                css`
                  padding-bottom: 32px;
                  margin-bottom: 48px;
                `}
            `
          )}
        `}

      /* Mobile Size Style */
      ${breakpointStyle(
        breakpoints.small,
        css`
          ${(props.level === 1 || !props.level) &&
            css`
              font-size: 28px;
              line-height: 48px;
            `}

          ${props.level >= 2 &&
            css`
              font-size: 24px;
              line-height: 40px;
            `}
        `
      )}
    `
  },
  paragraph: {
    medium: {
      size: "14px",
      height: "24px",
      maxWidth: ""
    },
    extend: css`
      ${breakpointStyle(
        breakpoints.small,
        css`
          font-size: 20px;
          line-height: 32px;
        `
      )}
    `
  },
  text: {
    medium: {
      size: "14px",
      height: "24px",
      maxWidth: ""
    },
    extend: css`
      ${breakpointStyle(
        breakpoints.small,
        css`
          font-size: 20px;
          line-height: 32px;
        `
      )}
    `
  },
  // grid: {
  //   extend: props => css`
  //     ${props.staggered &&
  //       css`
  //         ${breakpointStyle(
  //           custom.breakpoints.small,
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
      font-size: 16px;
      line-height: 24px;

      /* Add underline for Plain type button */
      ${props.plain &&
        css`
          text-decoration: underline;
        `}

      /* Mobile Button Size */
      ${breakpointStyle(
        breakpoints.small,
        css`
          font-size: 24px;
          line-height: 40px;
        `
      )}

      /* Button Hover Styles */
      &:hover {
        box-shadow: none;
        border-color: var(--c-brand);

        ${!props.primary &&
          css`
            color: var(--c-brand);
          `}
      }

      /* White Button Styles */
      ${props.white &&
        css`
          &:hover {
            background-color: white;
            border-color: white;
          }

          &:active {
            opacity: 0.9;
          }
        `}

      /* Primary Button Styles */
      ${props.primary &&
        css`
          &:hover {
            background-color: var(--c-brand);
          }

          &:active {
            opacity: 0.9;
          }
        `}
    `
  }
};

const theme = deepMerge(base, custom);

export default theme;
