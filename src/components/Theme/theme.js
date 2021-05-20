import { css } from "styled-components";
import { base } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const borderWidth = 1;

export const breakpoints = {
  small: {
    value: 768,
    edgeSize: {
      xxlarge: "72px",
      xxxlarge: "120px"
    }
  },
  medium: {
    value: 1200
  },
  large: {}
};

const isHeader = props => (props.level <= 2 || !props.level ? true : false);

const isSubheader = props => (props.level >= 3 ? true : false);

const headerSizes = {
  medium: {
    size: "20px",
    height: "32px",
    maxWidth: ""
  }
};

const subheaderSizes = {
  medium: {
    size: "16px",
    height: "24px",
    maxWidth: ""
  }
};

const textSizes = {
  medium: {
    size: "14px",
    height: "24px",
    maxWidth: ""
  },
  large: {
    size: "16px",
    height: "32px",
    maxWidth: ""
  },
  extend: props => css`
    ${!props.textAlign &&
      css`
        text-align: justify;
      `};

    ${props.hyphens &&
      css`
        hyphens: ${props.hyphens};
      `}
  `
};

const custom = {
  global: {
    font: {
      family: `var(--f-stack)`,
      weight: 400,
      size: "14px",
      height: 1.5
    },
    hover: {
      color: {
        light: "#2762FF",
        dark: "#fff"
      }
    },
    colors: {
      "accent-1": "#FCBA59",
      focus: "#2762FF",
      brand: "#2762FF",
      "brand-dark": "#0828BE",
      black: "#000",
      text: {
        light: "#000",
        dark: "#fff"
      },
      alert: "#e6f5ff",
      // Contribute Gitcoin Colors
      open: "#7ED321",
      started: "#FCBA59",
      Feature: "#FFC2D2",
      Bug: "#FFB5AE",
      Improvement: "#9EFFF7",
      Security: "#95FF94",
      Documentation: "#94FFED",
      Design: "#FF85C9",
      "Code Review": "#FFCE9E",
      Other: "#C2DBFF",
      altair: "#FAB961"
    },

    breakpoints: { ...breakpoints },
    deviceBreakpoints: {
      phone: "small",
      tablet: "large",
      computer: "large"
    },
    edgeSize: {
      xxlarge: "144px",
      xxxlarge: "192px"
    },
    input: {
      weight: 500
    }
  },
  icon: {
    extend: css`
      fill: #000;
      stroke: #000;
    `
  },
  textInput: {
    extend: css`
      ${props =>
        props.newsletter &&
        css`
          font-weight: var(--fw-medium);
          font-family: var(--f-stack);
          color: black;
          border: none;
          border-bottom: ${borderWidth}px solid
            ${props.newsletter && props.dark ? "black" : "#fff"};
          border-radius: 0;
          padding-bottom: calc(11px - 1px);

          // ::placeholder {
          //   color: white;
          // }
        `}
    `
  },
  heading: {
    weight: "var(--fw-demibold)",
    responsiveBreakpoint: null,
    level: {
      1: headerSizes,
      2: headerSizes,
      3: subheaderSizes,
      4: subheaderSizes,
      5: subheaderSizes,
      6: subheaderSizes
    },
    extend: props => css`
      margin-top: 0;
      font-family: var(--f-stack);

      /* Header */
      ${isHeader(props) &&
        css`
          ${!props.margin &&
            css`
              margin-bottom: 64px;
            `}

          &.tinlake_heading {
            border-bottom: ${props.lined ? "2px solid #0828be" : "none"};
            padding-bottom: ${props.lined ? "37px" : "0"};

            @media only screen and (max-width: 768px) {
              font-size: 28px;
              line-height: 48px;
              padding-bottom: ${props.lined ? "48px" : "0"};
            }
          }
        `}

      /* Subheader */
      ${isSubheader(props) &&
        css`
          ${!props.margin &&
            css`
              margin-bottom: 40px;
            `}
        `}

        /* Lined Styles */
        ${props.lined &&
          css`
          border-bottom: 1px solid black;

          /* Lined Header */
          ${isHeader(props) &&
            css`
              padding-bottom: 32px;
            `}

          /* Lined Subheader */
          ${isSubheader(props) &&
            css`
              padding-bottom: 24px;
            `}
        `}
    `
  },
  paragraph: {
    ...textSizes,
    extend: props => css`
      &.tinlake_paragraph {
        font-size: 20px;
        line-height: 32px;
        text-align: justify;

        @media only screen and (min-width: 769px) {
          font-size: 14px;
          line-height: 24px;
        }
      }
    `
  },
  text: textSizes,
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
  anchor: {
    fontWeight: props =>
      props.bold ? "var(--fw-demibold)" : "var(--fw-regular)",
    textDecoration: props => props.underline && "underline",
    color: { dark: "white", light: "black" },
    hover: {
      extend: css`
        color: #2762ff;
      `
    },
    extend: css`
      &:active {
        opacity: 0.9;
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
        dark: "#fff",
        light: "#000"
      }
    },
    color: {
      dark: "#fff",
      light: "#000"
    },
    primary: {
      color: {
        dark: "#fff",
        light: "#000"
      }
    },
    extend: props => css`
      font-weight: var(--fw-medium);
      font-family: var(--f-stack);
      text-align: center;
      font-size: 16px;
      line-height: 24px;

      ${
        !props.textAlign
          ? css`
              text-align: center;
            `
          : css`
              text-align: ${props.textAlign};
            `
      }

      /* Add underline for Plain type button */
      ${props.plain &&
        !props.link &&
        css`
          text-decoration: underline;
        `}

      ${props.link &&
        css`
          font-weight: var(--fw-demibold);

          &:hover {
            text-decoration: underline;
          }
        `}

      /* Button Hover Styles */
      &:hover {
        box-shadow: none;
        border-color: #2762FF;

        ${!props.primary &&
          css`
            color: #2762ff;
          `}
      }

      /* White Button Styles */
      ${props.white &&
        css`
          &:hover {
            background-color: #fff;
            border-color: #fff;
          }

          &:active {
            opacity: 0.9;
          }
        `}
      
      /* White Button Styles */
      ${props.darkBackground &&
        css`
          &:hover {
            border-color: #fff;
          }
        `}

      /* Primary Button Styles */
      ${props.primary &&
        css`
          &:hover {
            color: #fff;
            background-color: #2762ff;
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
