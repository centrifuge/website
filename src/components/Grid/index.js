import React from "react";
import { Box } from "grommet";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledGrid = styled.section`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 32px;
    align-items: ${props => props.align && props.align};
    justify-items: ${props => props.justify && props.justify};
  }
`;

const Grid = ({ children, align, justify, pt, pb, mt, mb, ...rest }) => (
  <Box pad={{ top: pt, bottom: pb }} margin={{ top: mt, bottom: mb }}>
    <StyledGrid
      align={align}
      justify={justify}
      columns={{ count: 12, size: "auto" }}
      {...rest}
    >
      {children}
    </StyledGrid>
  </Box>
);

Grid.defaultProps = {
  align: "center",
  justify: "start",
  pt: "large",
  pb: "large",
  mt: "xlarge",
  mb: "xlarge"
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  justify: PropTypes.string,
  pt: PropTypes.string,
  pb: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string
};

export default Grid;
