import React from "react";
import styled from "styled-components";
import { Box } from "grommet";
import { Link } from "gatsby";

import { List, Item } from "../List";
import ExternalLink, { MailLink } from "../ExternalLink";
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
    <Link to={to} {...rest}>
      {children}
    </Link>
  </Item>
);

const Footer = () => (
  <Box background="black" as="footer" pad={{ top: "xlarge", bottom: "large" }}>
    <Container>
      <Box direction="row" justify="between" as="ul">
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
        <FooterExternalLinkItem href="https://goo.gl/maps/mopnb8LaTvt">
          <Address>
            Centrifuge GmbH
            <br />
            Full Node, Skalitzer Strasse 85-86
            <br />
            10997 Berlin
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
            <FooterExternalLinkItem href="https://developer.centrifuge.io/">
              Documentation
            </FooterExternalLinkItem>
            <FooterLinkItem to="/imprint">Imprint</FooterLinkItem>
          </List>
        </Item>
      </Box>
      <Box pad={{ top: "medium" }}>
        <p>Centrifuge Inc. © Copyright 2018</p>
      </Box>
    </Container>
  </Box>
);

export default Footer;
