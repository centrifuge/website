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

const Grid = ({ children, align, justify, padding, margin, ...rest }) => (
  <Box pad={padding} margin={margin}>
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
  padding: {
    top: "large",
    bottom: "large"
  },
  margin: {
    top: "xlarge",
    bottom: "xlarge"
  }
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  justify: PropTypes.string,
  padding: PropTypes.object
};

export default Grid;
