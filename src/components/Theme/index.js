import React from "react";
import PropTypes from "prop-types";

import { createGlobalStyle } from "styled-components";
import { Grommet } from "grommet";
import { base } from "grommet/themes";
import { deepMerge } from "grommet/utils";

import theme from "./theme";

import "modern-normalize";

const GlobalStyle = createGlobalStyle`
  :root {
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-demibold: 600;
  }
`;

const Theme = ({ children }) => (
  <Grommet theme={deepMerge(base, theme)}>
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
