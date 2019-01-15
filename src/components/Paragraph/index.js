import React from "react";
import styled from "styled-components";

const Styles = styled.p`
  font-size: 20px;
  line-height: 32px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Paragraph = ({ children, ...rest }) => (
  <Styles {...rest}>{children}</Styles>
);

export default Paragraph;
