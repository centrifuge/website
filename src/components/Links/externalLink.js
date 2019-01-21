import React from "react";
import PropTypes from "prop-types";

import { StyledLink } from "./index";

const ExternalLink = ({ children, unstyled, ...rest }) => (
  <StyledLink
    unstyled={unstyled}
    rel="noopener norefferer"
    target="_blank"
    {...rest}
  >
    {children}
  </StyledLink>
);

ExternalLink.defaultProps = {
  unstyled: true
};

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  unstyled: PropTypes.bool
};

export default ExternalLink;
