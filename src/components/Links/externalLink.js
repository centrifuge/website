import React from "react";
import PropTypes from "prop-types";

import { StyledLink } from "./index";

const ExternalLink = ({ children, unstyled, ...rest }) => (
  <StyledLink
    unstyled={unstyled}
    rel="noopener noreferrer"
    target="_blank"
    {...rest}
  >
    {children}
  </StyledLink>
);

ExternalLink.defaultProps = {
  unstyled: 1
};

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  unstyled: PropTypes.number
};

export default ExternalLink;
