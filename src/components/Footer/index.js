import React from "react";
import styled from "styled-components";
import { Box, Paragraph } from "grommet";

import { List, Item } from "../List";
import { MailLink, ExternalLink, InternalLink } from "../Links";
import Container from "../Container";

const Address = styled.address`
  font-style: normal;
  line-height: 24px;
  display: inline;
`;

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
  margin-bottom: 0.5rem;
`;

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
            <FooterExternalLinkItem href="/whitepaper">Whitepaper</FooterExternalLinkItem>
            {/* <FooterExternalLinkItem>Slack</FooterExternalLinkItem> */}
          </List>
        </Item>
        <Item>
          <List>
            <FooterItem>
              <MailLink email="hello@centrifuge.io" subject="Hey there!">
                hello@centrifuge.io
              </MailLink>
            </FooterItem>
            <FooterLinkItem to="/data-privacy-policy">
              Data Privacy Policy
            </FooterLinkItem>
            <FooterLinkItem to="/imprint">Imprint</FooterLinkItem>
          </List>
        </Item>
      </FooterContent>
      <Box pad={{ top: "xlarge" }}>
        <Paragraph style={{ fontSize: 12 }}>
          Centrifuge Inc. © Copyright {new Date().getFullYear()}
        </Paragraph>
      </Box>
    </Container>
  </Box>
);

export default Footer;
