import React from "react";
import { Box } from "grommet";

import Container from "../Container";
import { List, Item } from "../List";

import wordmark from "../../images/centrifuge-wordmark.svg";
import { InternalLink } from "../Links";

// import "./styles.css";

const NavLinkItem = ({ children, to, ...rest }) => (
  <Item {...rest}>
    <InternalLink activeStyle={{ color: "var(--c-brand)" }} to={to}>
      {children}
    </InternalLink>
  </Item>
);

const Navigation = () => (
  <Box as="nav" pad={{ top: "medium" }} role="navigation">
    <Container>
      <List style={{ display: "flex" }}>
        <NavLinkItem style={{ flex: 1 }} to="/">
          <img
            alt="Centrifuge Wordmark"
            style={{ height: 32 }}
            src={wordmark}
          />
        </NavLinkItem>
        <NavLinkItem to="/technology">Technology</NavLinkItem>
        {/* Dropdown For Later */}
        {/* <Item>
          <InternalLink to="/technology">Technology</InternalLink>
          <List>
            <NavLinkItem to="/technology/components">Components</NavLinkItem>
            <NavLinkItem to="/technology/contribute">Contribute</NavLinkItem>
            <NavLinkItem to="/technology/protocol">Protocol</NavLinkItem>
          </List>
        </Item> */}
        <NavLinkItem to="/ecosystem">Ecosystem</NavLinkItem>
        {/* Dropdown For Later */}
        {/* <Item>
          <InternalLink to="/ecosystem">Ecosystem</InternalLink>
          <List>
            <NavLinkItem to="/ecosystem/#sub-1">Sub-1</NavLinkItem>
            <NavLinkItem to="/ecosystem/#sub-2">Sub-2</NavLinkItem>
            <NavLinkItem to="/ecosystem/#sub-3">Sub-3</NavLinkItem>
            <NavLinkItem to="/ecosystem/#sub-4">Sub-4</NavLinkItem>
          </List>
        </Item> */}
        <NavLinkItem to="/news">News</NavLinkItem>
        <NavLinkItem to="/about">About</NavLinkItem>
      </List>
    </Container>
  </Box>
);

export default Navigation;
