import React from "react";
import { Box } from "grommet";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { breakpoints } from "../Theme/theme";

const GridWrapper = styled(Box)`
  ${props =>
    props.staggered &&
    css`
      &:nth-child(even) > section {
        flex-direction: column-reverse;
      }
    `}
`;

const StyledGrid = styled.section`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${breakpoints.small.value + 1}px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 32px;
    align-items: ${props => props.align && props.align};
    justify-items: ${props => props.justify && props.justify};
  }
`;

const Grid = ({ children, align, justify, mt, mb, staggered, ...rest }) => (
  <GridWrapper staggered={staggered} margin={{ top: mt, bottom: mb }}>
    <StyledGrid
      align={align}
      justify={justify}
      columns={{ count: 12, size: "auto" }}
      {...rest}
    >
      {children}
    </StyledGrid>
  </GridWrapper>
);

Grid.defaultProps = {
  align: "center",
  justify: "flex-start",
  mt: "xxlarge",
  mb: "xxxlarge"
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  justify: PropTypes.string,
  staggered: PropTypes.bool,
  mt: PropTypes.string,
  mb: PropTypes.string
};

export default Grid;
