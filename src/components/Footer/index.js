import React from "react";
import styled from "styled-components";
import { Box } from "grommet";

import { List, Item } from "../List";
import { MailLink, ExternalLink, InternalLink } from "../Links";
import Container from "../Container";

const Address = styled.address`
  font-style: normal;
`;

const FooterExternalLinkItem = ({ children, href, ...rest }) => (
  <Item>
    <ExternalLink href={href} {...rest}>
      {children}
    </ExternalLink>
  </Item>
);

const FooterLinkItem = ({ children, to, ...rest }) => (
  <Item>
    <InternalLink to={to} {...rest}>
      {children}
    </InternalLink>
  </Item>
);

const FooterContent = styled(List)`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    > li {
      margin-bottom: 48px;
    }
  }

  @media only screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 48px;
  }

  @media only screen and (min-width: 1201px) {
    grid-template-columns: max-content 1fr repeat(2, max-content);
    grid-gap: 64px;
  }
`;

const Footer = () => (
  <Box background="black" as="footer" pad={{ top: "xlarge", bottom: "large" }}>
    <Container>
      <FooterContent>
        <FooterExternalLinkItem href="https://goo.gl/maps/MLDj8i2SwSv">
          <Address>
            Centrifuge Inc.
            <br />
            548 Market Street #67433
            <br />
            San Francisco, CA 94104
            <br />
            USA
          </Address>
        </FooterExternalLinkItem>
        <FooterExternalLinkItem href="https://goo.gl/maps/nKjRqRUnsDF2">
          <Address>
            Centrifuge GmbH
            <br />
            Glogauer Straße 6
            <br />
            10999 Berlin
            <br />
            Germany
          </Address>
        </FooterExternalLinkItem>
        <Item>
          <List>
            <FooterExternalLinkItem href="https://twitter.com/centrifuge">
              Twitter
            </FooterExternalLinkItem>
            <FooterExternalLinkItem href="https://medium.com/centrifuge">
              Medium
            </FooterExternalLinkItem>
            <FooterExternalLinkItem href="https://github.com/centrifuge/">
              GitHub
            </FooterExternalLinkItem>
            <FooterExternalLinkItem href="https://developer.centrifuge.io/">
              Documentation
            </FooterExternalLinkItem>
            <FooterLinkItem to="/whitepaper">Whitepaper</FooterLinkItem>
            {/* <FooterExternalLinkItem>Slack</FooterExternalLinkItem> */}
          </List>
        </Item>
        <Item>
          <List>
            <Item>
              <MailLink email="hello@centrifuge.io" subject="Hey there!">
                hello@centrifuge.io
              </MailLink>
            </Item>
            <FooterLinkItem to="/data-privacy-policy">
              Data Privacy Policy
            </FooterLinkItem>
            <FooterLinkItem to="/imprint">Imprint</FooterLinkItem>
          </List>
        </Item>
      </FooterContent>
      <Box pad={{ top: "xlarge" }}>
        <p>Centrifuge Inc. © Copyright 2018</p>
      </Box>
    </Container>
  </Box>
);

export default Footer;
