import React from "react";
import PropTypes from "prop-types";

import { createGlobalStyle } from "styled-components";
import { Grommet } from "grommet";

import theme from "./theme";

import "modern-normalize";

const GlobalStyle = createGlobalStyle`
  :root {
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-demibold: 600;

    --c-black: #000000;
    --c-brand: #2762FF;
  }

  .a, a {
    color: var(--c-black);

    &:hover,
    &:focus {
      color: var(--c-brand);
    }

    &:active {
      opacity: 0.9
    } 
  }
`;

const Theme = ({ children }) => (
  <Grommet theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </Grommet>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
