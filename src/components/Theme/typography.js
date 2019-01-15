import { css } from "styled-components";

const headerSizeStyles = {
  large: css`
    padding-bottom: 48px;
    margin-bottom: 96px;
  `,
  medium: css`
    padding-bottom: 32px;
    margin-bottom: 64px;
  `,
  small: css`
    padding-bottom: 28px;
    margin-bottom: 40px;
  `
};

const headerSizes = {
  large: {
    height: "48px",
    size: "28px"
  },
  medium: {
    height: "32px",
    size: "20px"
  },
  small: {
    height: "28px",
    size: "18px"
  }
};

const headerStyles = props => css`
  ${(props.size === "large" || props.size === "xlarge") &&
    headerSizeStyles.large}
  ${(props.size === "medium" || !props.size) && headerSizeStyles.medium}
  ${props.size === "small" && headerSizeStyles.small}
`;

const subheaderSizeStyles = {
  large: props =>
    !props.noLine
      ? css`
          padding-bottom: 32px;
          margin-bottom: 48px;
        `
      : css`
          margin-bottom: 32px;
        `,
  medium: props =>
    !props.noLine
      ? css`
          padding-bottom: 24px;
          margin-bottom: 40px;
        `
      : css`
          margin-bottom: 24px;
        `
};

const subheaderSizes = {
  medium: {
    height: "24px",
    size: "16px"
  },
  large: {
    height: "40px",
    size: "24px"
  }
};

const subheaderStyles = props => css`
  ${(props.size === "large" || props.size === "xlarge") &&
    subheaderSizeStyles.large}
  ${(props.size === "medium" || props.size === "small" || !props.size) &&
    subheaderSizeStyles.medium}
`;

const headingLevels = {
  1: {
    small: headerSizes.small,
    medium: headerSizes.medium,
    large: headerSizes.large,
    xlarge: headerSizes.large
  },
  2: {
    small: subheaderSizes.medium,
    medium: subheaderSizes.medium,
    large: subheaderSizes.large,
    xlarge: subheaderSizes.large
  },
  3: {
    small: subheaderSizes.medium,
    medium: subheaderSizes.medium,
    large: subheaderSizes.large,
    xlarge: subheaderSizes.large
  },
  4: {
    small: subheaderSizes.medium,
    medium: subheaderSizes.medium,
    large: subheaderSizes.large,
    xlarge: subheaderSizes.large
  },
  5: {
    small: subheaderSizes.medium,
    medium: subheaderSizes.medium,
    large: subheaderSizes.large,
    xlarge: subheaderSizes.large
  },
  6: {
    small: subheaderSizes.medium,
    medium: subheaderSizes.medium,
    large: subheaderSizes.large,
    xlarge: subheaderSizes.large
  }
};

export { headingLevels, headerStyles, subheaderStyles };
