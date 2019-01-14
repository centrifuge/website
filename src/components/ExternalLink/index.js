import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const unstyledLinkStyles = css`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledA = styled.a`
  ${props => props.unstyled && unstyledLinkStyles}
`;

const ExternalLink = ({ children, unstyled, ...rest }) => (
  <StyledA
    unstyled={unstyled}
    rel="noopener norefferer"
    target="_blank"
    {...rest}
  >
    {children}
  </StyledA>
);

ExternalLink.defaultProps = {
  unstyled: true
};

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  unstyled: PropTypes.bool
};

export const MailLink = ({
  children,
  email,
  subject,
  body,
  bcc,
  cc,
  unstyled
}) => (
  <StyledA
    href={`mailto:${email}?subject=${subject}&body=${body}&cc=${cc.join(
      ","
    )}&bcc=${bcc.join(",")}`}
    unstyled={unstyled}
  >
    {children}
  </StyledA>
);

MailLink.defaultProps = {
  subject: ``,
  body: ``,
  bcc: [],
  cc: [],
  unstyled: true
};

MailLink.propTypes = {
  children: PropTypes.node.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string,
  body: PropTypes.string,
  bcc: PropTypes.array,
  cc: PropTypes.array
};

export default ExternalLink;
