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
    color : #2762FF;
  }

  &:active {
    /* opacity: 0.9; */
    color : #2762FF;
  }
`;

export const StyledLink = styled.a`
  ${props => props.unstyled && unstyledLinkStyles}
`;

export { MailLink, ExternalLink, InternalLink };
