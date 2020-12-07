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
  ${props =>
    props.noMargin &&
    css`
      margin-top: 0;
      margin-bottom: 0;
    `}
`;

const StyledGrid = styled.section`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${breakpoints.small.value + 1}px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: ${props => (props.gap ? props.gap : 21)}px;
    align-items: ${props => props.align && props.align};
    justify-items: ${props => props.justify && props.justify};
  }
`;

const Grid = ({
  children,
  align,
  justify,
  mt,
  mb,
  pt,
  pb,
  staggered,
  noMargin,
  gap,
  ...rest
}) => (
  <GridWrapper
    staggered={staggered}
    noMargin={noMargin}
    margin={{ top: mt, bottom: mb }}
    pad={{ top: pt, bottom: pb }}
  >
    <StyledGrid
      align={align}
      justify={justify}
      columns={{ count: 12, size: "auto" }}
      gap={gap}
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
