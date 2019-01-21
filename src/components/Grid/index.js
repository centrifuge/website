import React from "react";
import { Box } from "grommet";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledGrid = styled.div`
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

const Grid = ({ children, align, justify, padding, ...rest }) => (
  <Box pad={padding}>
    <StyledGrid
      fill
      as="section"
      align={align}
      justify={justify}
      gap={{ column: "medium" }}
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
    top: "128px",
    bottom: "128px"
  }
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  justify: PropTypes.string,
  padding: PropTypes.object
};

export default Grid;
