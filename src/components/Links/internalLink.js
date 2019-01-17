import React from "react";
import PropTypes from "prop-types";

import { StyledGatsbyLink } from "./index";

const InternalLink = ({ children, unstyled, ...rest }) => (
  <StyledGatsbyLink unstyled={unstyled} {...rest}>
    {children}
  </StyledGatsbyLink>
);

InternalLink.defaultProps = {
  unstyled: true
};

InternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  unstyled: PropTypes.bool
};

export default InternalLink;
