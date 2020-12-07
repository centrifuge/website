import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

import { unstyledLinkStyles } from "./index";

export const StyledGatsbyLink = styled(Link)`
  ${props => (props.unstyled ? unstyledLinkStyles : "")}
`;

const InternalLink = ({ children, unstyled, ...rest }) => (
  <StyledGatsbyLink unstyled={unstyled} {...rest}>
    {children}
  </StyledGatsbyLink>
);

InternalLink.defaultProps = {
  unstyled: 1
};

InternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  unstyled: PropTypes.number
};

export default InternalLink;
