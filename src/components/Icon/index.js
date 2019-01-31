import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledIcon = styled.img`
  --icon-size: 24px;

  ${props => css`
    ${props.large &&
      css`
        --icon-size: 32px;
      `}
      
    ${props.small &&
      css`
        --icon-size: 16px;
      `}

    ${props.size &&
      css`
        --icon-size: ${props.size}px;
      `}
  `}

  /* Fix image inline side-effect */
  vertical-align: middle;

  height: var(--icon-size);
  width: var(--icon-size);
`;

const Icon = ({ src, alt, ...rest }) => (
  <StyledIcon src={src} alt={alt} {...rest} />
);

Icon.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  small: PropTypes.bool,
  large: PropTypes.bool,
  size: PropTypes.number
};

Icon.defaultProps = {
  alt: ""
};

export default Icon;
