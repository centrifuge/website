import React from "react";
import { Box } from "grommet";
import styled, { css } from "styled-components";
import { breakpointStyle } from "grommet/utils";

import Container from "../Container";
import { List, Item } from "../List";
import { InternalLink } from "../Links";
import CallToAction from "./callToAction";
import { breakpoints } from "../Theme/theme";

import wordmark from "../../images/centrifuge-wordmark.svg";

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

const Logo = styled.img`
  vertical-align: middle;
  height: 32px;

  ${breakpointStyle(
    breakpoints.small,
    css`
      height: 48px;
    `
  )}
`;

const PaddedItem = styled(Item)`
  padding: 1.5rem 0;
  line-height: 1rem;
`;

const Dropdowns = styled(Box)`
  display: none;
  @media only screen and (min-width: 768px) {
    display: inherit;
  }

  /* Item (PaddedItem) */
  > li {
    display: block;
    position: relative;

    /* Item:Hover Targeting Dropdown */
    &:hover > ul,
    &:focus-within > ul,
    > ul:hover,
    > ul:focus {
      visibility: visible;
      opacity: 1;
      display: block;
    }
  }

  /* Dropdown Styles */
  > li > ul {
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
    visibility: hidden;
    opacity: 0;
    padding: 0.5rem 0;
    min-width: 120px;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 1.5rem;
    border-radius: 8px;
    left: -16px;
    display: none;

    /* Dropdown Item Styles */
    > li {
      white-space: nowrap;
      width: 100%;
    }

    /* Dropdown Item Link Styles */
    > li > a {
      line-height: 1rem;
      display: block;
      padding: 0.5rem 1rem;
    }
  }
`;

const Nav = styled(Box)`
  padding-top: 1rem;
  z-index: 2000;

  @media only screen and (min-width: 768px) {
    position: sticky;
    -webkit-position: sticky;
    padding-top: 0;
    top: 0;

    &::after {
      content: "";
      position: absolute;
      background-color: white;
      z-index: -1;
      margin: 0 auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;

const Navigation = () => (
  <Nav as="nav" role="navigation">
    <Container>
      <List style={{ display: "flex", alignItems: "center" }}>
        <Item style={{ flex: 1 }}>
          <NavLink to="/">
            <Logo alt="Centrifuge Wordmark" src={wordmark} />
          </NavLink>
        </Item>
        <Dropdowns direction="row" align="center" gap="large">
          <PaddedItem>
            <NavLink to="/technology">Technology</NavLink>
          </PaddedItem>

          <PaddedItem>
            <NavLink to="/ecosystem">Ecosystem</NavLink>
            <List>
              <Item>
                <NavLink to="/ecosystem/#use-cases">Use Cases</NavLink>
              </Item>
            </List>
          </PaddedItem>

          <PaddedItem>
            <NavLink to="/news">News</NavLink>
          </PaddedItem>

          <PaddedItem>
            <NavLink to="/about">About</NavLink>
            <List>
              <Item>
                <NavLink to="/about/#mission">Mission</NavLink>
              </Item>
              <Item>
                <NavLink to="/about/#team">Team</NavLink>
              </Item>
              <Item>
                <NavLink to="/about/#alliance">Alliance</NavLink>
              </Item>
              <Item>
                <NavLink to="/careers">Careers</NavLink>
              </Item>
            </List>
          </PaddedItem>
          <CallToAction />
        </Dropdowns>
      </List>
    </Container>
  </Nav>
);

export default Navigation;
