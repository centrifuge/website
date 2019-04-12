import React from "react";
import styled from "styled-components";
import { Box, Paragraph, Image, Text } from "grommet";

import { List, Item } from "../List";
import { MailLink, ExternalLink, InternalLink } from "../Links";
import Container from "../Container";

import imgGrandEUFlag from "../../images/grand/grand_eu_flag.png";

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

const BlockFirstAddress = () => (
  <FooterExternalLinkItem href="https://goo.gl/maps/MLDj8i2SwSv">
    <Address>
      San-Francisco
      <br />
      548 Market Street #67433
      <br />
      San Francisco, CA 94104
      <br />
    </Address>
  </FooterExternalLinkItem>
)
const BlockSecondAddress = () => (
  <FooterExternalLinkItem href="https://goo.gl/maps/nKjRqRUnsDF2">
    <Address>
      Berlin
      <br />
      Full Node, Skalitzer Strasse 85-86
      <br />
      10999 Berlin
    </Address>
  </FooterExternalLinkItem>

)
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
      <FooterExternalLinkItem href="/centrifuge_os_white_paper.pdf">
        Technical papers
      </FooterExternalLinkItem>
    </List>
  </Item>
)

const BlockInternalLink = () => (
  <Item>
    <List>
      <FooterLinkItem to="/data-privacy-policy">Data Privacy Policy</FooterLinkItem>
      <FooterLinkItem to="/imprint">Imprint</FooterLinkItem>
      <FooterLinkItem to="/security">Security</FooterLinkItem>
      <br/><br/><br/>
      <FooterLinkItem to="/grand">
        <Box direction="row">
          <Image height={24} src={imgGrandEUFlag}/>
          <Box direction="column" margin={{"top":"2px","left":"11px"}}>
            <Text size='6px'>EUROPÄISCHE UNION</Text>
            <Text size='5px'>Europäischer Fonds für<br/>regionale Entwicklung</Text>
          </Box>
        </Box>
      </FooterLinkItem>
    </List>
  </Item>
)

const BlockHello = () => (
  <FooterLinkItem to="hello@centrifuge.io">
    hello@centrifuge.io
  </FooterLinkItem>
)
const BlockCopyRight = () => (
  <Paragraph style={{ fontSize: 12 }}>
    Centrifuge Inc. © Copyright {new Date().getFullYear()}
  </Paragraph>
)

export {BlockFirstAddress, BlockSecondAddress, BlockExternalLink, BlockInternalLink, BlockHello,BlockCopyRight};
