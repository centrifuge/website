import { Box, Paragraph, Text } from "grommet";
import React from "react";
import styled from "styled-components";
import { ExternalLink, InternalLink } from "../Links";
import { Item, List } from "../List";

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
      <Box justify="between" height="230px">
        <Box>
          <FooterExternalLinkItem href="https://twitter.com/centrifuge">
            Twitter
          </FooterExternalLinkItem>
          <FooterExternalLinkItem href="https://t.me/centrifuge_chat">
            Telegram
          </FooterExternalLinkItem>
          <FooterExternalLinkItem href="https://medium.com/centrifuge">
            Medium
          </FooterExternalLinkItem>
          <FooterExternalLinkItem href="https://centrifuge.io/discord">
            Discord
          </FooterExternalLinkItem>
          <FooterExternalLinkItem href="https://github.com/centrifuge/">
            GitHub
          </FooterExternalLinkItem>
          <FooterExternalLinkItem href="https://docs.centrifuge.io/">
            Documentation
          </FooterExternalLinkItem>
          <FooterExternalLinkItem href="https://gov.centrifuge.io/">
            Governance
          </FooterExternalLinkItem>
        </Box>
        {/*<Box gap="xsmall" height="50px">*/}
        {/*  <Text size="12px">Find us on</Text>*/}
        {/*  <FooterExternalLinkItem href="https://defipulse.com">*/}
        {/*    <Image src={dfpLogo} width="100px" />*/}
        {/*  </FooterExternalLinkItem>*/}
        {/*</Box>*/}
      </Box>
    </List>
  </Item>
);

const BlockInternalLink = () => (
  <Item>
    <List>
      <Box justify="between" height="230px">
        <Box>
          <FooterLinkItem to="/terms">Terms of Use</FooterLinkItem>
          <FooterLinkItem to="/data-privacy-policy">
            Data Privacy Policy
          </FooterLinkItem>
          <FooterLinkItem to="/security">Security</FooterLinkItem>
          <FooterLinkItem to="/imprint">Imprint</FooterLinkItem>
          <FooterLinkItem to="/brand">Brand Assets</FooterLinkItem>
          <FooterLinkItem to="/careers">Careers</FooterLinkItem>
        </Box>
      </Box>
    </List>
  </Item>
);

const SubBlockContact = ({ title, email }) => (
  <Box direction="row" gap="xsmall" align="start">
    <Text weight="bold">{title}:</Text>
    <FooterExternalLinkItem href={`mailto:${email}`}>
      {email}
    </FooterExternalLinkItem>
  </Box>
);

const SubBlockLink = ({ title, href, label }) => (
  <Box direction="row" gap="xsmall" align="start">
    <Text weight="bold">{title}:</Text>
    <FooterExternalLinkItem href={href}>{label}</FooterExternalLinkItem>
  </Box>
);

const BlockHello = () => (
  <>
    <SubBlockLink
      title="Telegram"
      href="https://t.me/centrifuge_chat"
      label="t.me/centrifuge_chat"
    />
    <SubBlockContact title="Partnerships" email="bizdev@centrifuge.io" />
  </>
);

const BlockCopyRight = ({ size }) => (
  <Paragraph style={{ fontSize: 12 }}>
    Except where otherwise noted, content on this site is licensed under{" "}
    {size === "small" ? null : <br />} a{" "}
    <ExternalLink
      href="https://creativecommons.org/licenses/by-sa/4.0/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Creative Commons Attribution-ShareAlike 4.0 International
    </ExternalLink>{" "}
    license
  </Paragraph>
);

export { BlockExternalLink, BlockInternalLink, BlockHello, BlockCopyRight };
