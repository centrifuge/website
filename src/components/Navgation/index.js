import React from "react";
import { Box } from "grommet";
import styled from "styled-components";

import Container from "../Container";
import { List, Item } from "../List";

import wordmark from "../../images/centrifuge-wordmark.svg";
import { InternalLink } from "../Links";

const NavLink = ({ children, to, ...rest }) => (
  <InternalLink
    style={{ fontWeight: "var(--fw-medium)" }}
    activeStyle={{ color: "var(--c-brand)" }}
    to={to}
    {...rest}
  >
    {children}
  </InternalLink>
);

const Nav = styled(Box)`
  #dropdowns {
    display: none;
  }

  padding-top: 16px;

  @media only screen and (min-width: 768px) {
    #dropdowns {
      display: flex;
    }

    position: sticky;
    padding-top: 0;
    top: 16px;

    &::after {
      content: "";
      position: absolute;
      background-color: white;
      z-index: -1;
      margin: 0 auto;
      top: -16px;
      left: 0;
      right: 0;
      bottom: 8px;
    }
  }

  li {
    display: block;
    position: relative;
  }

  ul li ul {
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
    visibility: hidden;
    opacity: 0;
    padding: 8px 0;
    min-width: 120px;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 24px;
    border-radius: 8px;
    left: -16px;
    display: none;
  }

  ul li:hover > ul,
  ul li:focus-within > ul,
  ul li ul:hover,
  ul li ul:focus {
    visibility: visible;
    opacity: 1;
    display: block;
  }

  ul li ul li {
    white-space: nowrap;
    width: 100%;
  }

  ul li ul li a {
    line-height: 1.5;
    display: block;
    padding: 8px 16px;
  }
`;

const Logo = () => (
  <img alt="Centrifuge Wordmark" style={{ height: 32 }} src={wordmark} />
);

const Navigation = () => (
  <Nav as="nav" role="navigation">
    <Container>
      <List style={{ display: "flex", alignItems: "center" }}>
        <Item style={{ flex: 1 }}>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </Item>
        <Box id="dropdowns" direction="" gap="large">
          <Item style={{ padding: "24px 0" }}>
            <NavLink to="/technology">Technology</NavLink>
          </Item>
          {/*  style={{padding: "24px 0"}}>
            <InternalLink to="/technology">Technology</InternalLink>
            <List>
              <NavLink to="/technology/components">Components</NavLink>
              <NavLink to="/technology/contribute">Contribute</NavLink>
              <NavLink to="/technology/protocol">Protocol</NavLink>
            </List>
          </Item> */}

          <Item style={{ padding: "24px 0" }}>
            <NavLink to="/ecosystem">Ecosystem</NavLink>
            <List>
              <Item>
                <NavLink to="/ecosystem/#use-cases">Use Cases</NavLink>
              </Item>
            </List>
          </Item>

          <Item style={{ padding: "24px 0" }}>
            <NavLink to="/news">News</NavLink>
          </Item>

          <Item style={{ padding: "24px 0" }}>
            <NavLink to="/about">About</NavLink>
            <List>
              <Item>
                <NavLink to="/about/#mission">Mission</NavLink>
              </Item>
              <Item>
                <NavLink to="/about/#team">Team</NavLink>
              </Item>
              <Item>
                <NavLink to="/about/#alliance">Mission</NavLink>
              </Item>
              <Item>
                <NavLink to="/careers">Careers</NavLink>
              </Item>
            </List>
          </Item>
        </Box>
      </List>
    </Container>
  </Nav>
);

export default Navigation;
