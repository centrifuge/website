import React from "react";
import { Box } from "grommet";

import Container from "../Container";
import { List, Item } from "../List";

import wordmark from "../../images/centrifuge-wordmark.svg";
import { InternalLink } from "../Links";

// import "./styles.css";

const NavLinkItem = ({ children, to, ...rest }) => (
  <Item {...rest}>
    <InternalLink
      style={{ fontWeight: "var(--fw-medium)" }}
      activeStyle={{ color: "var(--c-brand)" }}
      to={to}
    >
      {children}
    </InternalLink>
  </Item>
);

const Logo = () => (
  <img alt="Centrifuge Wordmark" style={{ height: 32 }} src={wordmark} />
);

const Navigation = () => (
  <Box as="nav" pad={{ top: "medium" }} role="navigation">
    <Container>
      <List style={{ display: "flex", alignItems: "center" }}>
        <NavLinkItem style={{ flex: 1 }} to="/">
          <Logo />
        </NavLinkItem>
        <Box direction="" gap="large">
          <InternalLink to="/technology">Technology</InternalLink>
          {/* <Item>
            <InternalLink to="/technology">Technology</InternalLink>
            <List>
              <NavLinkItem to="/technology/components">Components</NavLinkItem>
              <NavLinkItem to="/technology/contribute">Contribute</NavLinkItem>
              <NavLinkItem to="/technology/protocol">Protocol</NavLinkItem>
            </List>
          </Item> */}

          <Item>
            <InternalLink to="/ecosystem">Ecosystem</InternalLink>
            <List>
              <NavLinkItem to="/ecosystem/#use-cases">Use Cases</NavLinkItem>
            </List>
          </Item>

          <NavLinkItem to="/news">News</NavLinkItem>

          <Item>
            <NavLinkItem to="/about">About</NavLinkItem>
            <List>
              <NavLinkItem to="/about/#mission">Mission</NavLinkItem>
              <NavLinkItem to="/about/#team">Team</NavLinkItem>
              {/* <NavLinkItem to="/about/#alliance">Mission</NavLinkItem> */}
              <NavLinkItem to="/careers">Careers</NavLinkItem>
            </List>
          </Item>
        </Box>
      </List>
    </Container>
  </Box>
);

export default Navigation;
