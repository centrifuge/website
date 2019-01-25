import styled, { css } from "styled-components";

import ExternalLink from "./externalLink";
import MailLink from "./mailLink";
import InternalLink from "./internalLink";

export const unstyledLinkStyles = css`
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const StyledLink = styled.a`
  ${props => props.unstyled && unstyledLinkStyles}
`;

export { MailLink, ExternalLink, InternalLink };
