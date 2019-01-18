import React from "react";
import { Box, ResponsiveContext } from "grommet";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledColumn = styled(Box)`
  ${props =>
    props.span
      ? css`
          grid-column: span ${props.span} / auto;
        `
      : null}
`;

const Column = ({ span, children, ...rest }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <StyledColumn span={span[size]} {...rest}>
        {children}
      </StyledColumn>
    )}
  </ResponsiveContext.Consumer>
);

export const Spacer = ({ width }) => (
  <ResponsiveContext.Consumer>
    {size =>
      size === "large" ? (
        <Column span={{ small: 0, medium: 0, large: width }} />
      ) : null
    }
  </ResponsiveContext.Consumer>
);

Spacer.defaultProps = {
  width: 1
};

Column.defaultProps = {
  span: {
    small: 12,
    medium: 12,
    large: 12
  }
};

Column.propTypes = {
  span: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default Column;
