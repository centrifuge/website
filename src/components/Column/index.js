import React from "react";
import { Box, ResponsiveContext } from "grommet";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { breakpointStyle } from "grommet/utils";

import theme, { breakpoints } from "../Theme/theme";

const StyledColumn = styled(Box)`
  ${props =>
    props.span &&
    css`
      grid-column: span ${props.span} / auto;
    `}

  ${props =>
    props.justifySelf &&
    css`
      justify-self: ${props.justifySelf};
    `}

  ${props =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}

  ${props =>
    props.mobileSpaced &&
    css`
      ${breakpointStyle(
        breakpoints.small,
        css`
          &:not(:last-child) {
            margin-bottom: ${theme.global.edgeSize.xlarge};
          }
        `
      )}
    `}

  ${props =>
    props.mediumSpaced &&
    css`
      ${breakpointStyle(
        breakpoints.medium,
        css`
          &:not(:last-child) {
            margin-bottom: ${theme.global.edgeSize.xlarge};
          }
        `
      )}
    `}

  ${props =>
    props.mediumOrder &&
    css`
      ${breakpointStyle(
        breakpoints.medium,
        css`
          order: ${props.mediumOrder};
        `
      )}
    `}
    
`;

const Column = ({ span, children, textAlign, justifySelf, ...rest }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <StyledColumn
        textAlign={textAlign}
        justifySelf={justifySelf}
        span={span[size]}
        {...rest}
      >
        {children}
      </StyledColumn>
    )}
  </ResponsiveContext.Consumer>
);

export const Spacer = ({ width }) => (
  <ResponsiveContext.Consumer>
    {size =>
      size === "large" ? <Column span={{ medium: 0, large: width }} /> : null
    }
  </ResponsiveContext.Consumer>
);

Spacer.defaultProps = {
  width: 1
};

Column.defaultProps = {
  span: {
    medium: 12,
    large: 12
  }
};

Column.propTypes = {
  span: PropTypes.object.isRequired,
  textAlign: PropTypes.string,
  justifySelf: PropTypes.string,
  children: PropTypes.node
};

export default Column;
