import React from "react";
import styled from "styled-components";
import { Box, Paragraph, Image, Text } from "grommet";

import { List, Item } from "../List";
import { ExternalLink, InternalLink } from "../Links";

import euFlagImage from "../../images/eu-flag.svg";

const FooterExternalLinkItem = ({ children, href, ...rest }) => (
  <FooterItem>
    <ExternalLink href={href} {...rest}>
      {children}
    </ExternalLink>
  </FooterItem>
);

const FooterLinkItem = ({ children, to, ...rest }) => (
  <FooterItem>
    <InternalLink to={to} {...rest}>
      {children}
    </InternalLink>
  </FooterItem>
);

const FooterItem = styled(Item)`
  margin-bottom: 8px;
`;

const BlockExternalLink = () => (
  <Item>
    <List>
      <FooterExternalLinkItem href="https://twitter.com/centrifuge">
        Twitter
      </FooterExternalLinkItem>
      <FooterExternalLinkItem href="https://medium.com/centrifuge">
        Medium
      </FooterExternalLinkItem>
      <FooterLinkItem to="/slack">
        Slack
      </FooterLinkItem>
      <FooterExternalLinkItem href="https://github.com/centrifuge/">
        GitHub
      </FooterExternalLinkItem>
      <FooterExternalLinkItem href="https://developer.centrifuge.io/">
        Documentation
      </FooterExternalLinkItem>
      <FooterLinkItem to="/technology#download">Technical papers</FooterLinkItem>
    </List>
  </Item>
);

const BlockInternalLink = () => (
  <Item>
    <List>
      <FooterLinkItem to="/data-privacy-policy">Data Privacy Policy</FooterLinkItem>
      <FooterLinkItem to="/security">Security</FooterLinkItem>
      <FooterLinkItem to="/imprint">Imprint</FooterLinkItem>
      <br/><br/><br/>
      <FooterLinkItem to="/grant">
        <Box direction="row">
          <Image height={42} src={euFlagImage}/>
        </Box>
      </FooterLinkItem>
    </List>
  </Item>
);

const BlockHello = () => (
  <FooterExternalLinkItem href="mailto:hello@centrifuge.io">
    hello@centrifuge.io
  </FooterExternalLinkItem>
);

const BlockCopyRight = ({ size }) => (
  <Paragraph style={{ fontSize: 12 }}>
    Except where otherwise noted, content on this site is licensed under {size === "small" ? null : <br />} a{' '}
    <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer noopener">
      Creative Commons Attribution-ShareAlike 4.0 International
    </a>
    {' '}license
  </Paragraph>
);

export { BlockExternalLink, BlockInternalLink, BlockHello, BlockCopyRight };
