import React, { useState } from "react";
import {
  Box,
  Button,
  Layer as GrommetLayer,
  ResponsiveContext
} from "grommet";
import { navigate } from "gatsby";
import styled, { css } from "styled-components";
import { breakpointStyle } from "grommet/utils";
import { X } from "styled-icons/feather/X";
import { Menu } from "styled-icons/feather/Menu";

import Container from "../Container";
import { List, Item } from "../List";
import { InternalLink, ExternalLink } from "../Links";
import theme, { breakpoints } from "../Theme/theme";

import wordmark from "../../images/centrifuge-wordmark.svg";
import wordmark_white from "../../images/centrifuge-wordmark-light.svg";

const NavLink = ({ children, to, dark }) => (
  <InternalLink
    style={{
      fontWeight: "var(--fw-medium)",
      color: !!dark ? "white" : "black"
    }}
    activeStyle={{ color: !!dark ? "white" : "var(--c-brand)" }}
    to={to}
  >
    {children}
  </InternalLink>
);

const ExternalNavLink = ({ children, href, dark, ...rest }) => (
  <ExternalLink
    style={{
      fontWeight: "var(--fw-medium)",
      color: !!dark ? "white" : "black"
    }}
    activeStyle={{ color: "var(--c-brand)" }}
    href={href}
    {...rest}
  >
    {children}
  </ExternalLink>
);

const BrandLink = ({ dark }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    onContextMenu={e => {
      e.preventDefault();
      navigate("/brand");
    }}
  >
    <NavLink to="/">
      <Logo
        alt="Centrifuge Wordmark"
        src={!!dark ? wordmark_white : wordmark}
      />
    </NavLink>
  </div>
);

const Logo = styled.img`
  vertical-align: middle;
  height: 32px;
`;

const PaddedItem = styled(Item)`
  padding: 1.5rem 0;
  line-height: 1rem;
`;

const Layer = styled(GrommetLayer)`
  display: none;

  ${breakpointStyle(
    breakpoints.small,
    css`
      display: initial;
    `
  )}
`;

const Dropdowns = styled(Box)`
  ${breakpointStyle(
    breakpoints.small,
    css`
      display: none;
    `
  )}

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
    background-color: ${props =>
      !!props.dark ? theme.global.colors["dark-1"] : "white"};
    box-shadow: ${theme.global.elevation.light.small};
    visibility: hidden;
    opacity: 0;
    padding: 0.5rem 0;
    min-width: 120px;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 1.5rem;
    border-radius: ${theme.global.edgeSize.xsmall};
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
  z-index: 10;
  position: sticky;
  -webkit-position: sticky;
  top: 0;

  ${breakpointStyle(
    breakpoints.small,
    css`
      top: 1rem;
      z-index: 2000;
    `
  )}

  &::after {
    content: "";
    position: absolute;
    background-color: ${props => (!!props.dark ? `black` : `white`)};
    z-index: -1;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    ${breakpointStyle(
      breakpoints.small,
      css`
        bottom: -1rem;
        top: -1rem;
      `
    )}
  }
`;

const NavButton = styled(Button)`
  display: none;
  ${breakpointStyle(
    breakpoints.small,
    css`
      display: initial;
    `
  )}
`;

const MenuItem = styled(Item)`
  display: block;
  padding: 0.5rem 0;

  /* Item (SubItem) */
  > li:last-child {
    padding-bottom: 0;
  }
`;

const SubItem = styled(Item)`
  display: block;
  padding: 0.5rem 1rem;
`;

const MobileBox = styled(Box)`
  background: ${props => (!!props.dark ? "black" : "white")};

  ${breakpointStyle(
    breakpoints.small,
    css`
      height: 100vh;
      overflow-y: scroll;
    `
  )}
`;

const Navigation = ({ dark }) => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const toggleMobileNav = () => setMobileNavIsOpen(!mobileNavIsOpen);

  return (
    <Nav as="nav" role="navigation" dark={dark}>
      <Container>
        <List style={{ display: "flex", alignItems: "center" }}>
          {/* Logo */}
          <Item style={{ flex: 1 }}>
            <BrandLink dark={dark} />
          </Item>

          {/* Mobile Nav Toggle */}
          <NavButton onClick={toggleMobileNav}>
            {mobileNavIsOpen ? (
              <X size={32} color={!!dark ? "white" : "black"} />
            ) : (
              <Menu size={32} color={!!dark ? "white" : "black"} />
            )}
          </NavButton>

          {/* Desktop Nav */}
          <Dropdowns direction="row" align="center" gap="large" dark={dark}>
            <PaddedItem>
              <ExternalNavLink href="https://tinlake.centrifuge.io" dark={dark}>
                Tinlake
              </ExternalNavLink>
            </PaddedItem>

            <PaddedItem>
              <NavLink to="/altair" dark={dark}>
                Altair
              </NavLink>
            </PaddedItem>

            <PaddedItem>
              <NavLink to="/issuers" dark={dark}>
                Issuers
              </NavLink>
            </PaddedItem>

            <PaddedItem>
              <ExternalNavLink href="/cfg-token-summary" dark={dark}>
                CFG Token
              </ExternalNavLink>

              <List>
                <Item>
                  <ExternalNavLink href="/cfg-token-summary" dark={dark}>
                    Token Summary
                  </ExternalNavLink>
                  <NavLink to="/cfg" dark={dark}>
                    Get CFG
                  </NavLink>
                </Item>
              </List>
            </PaddedItem>

            <PaddedItem>
              <NavLink dark={dark}>Service</NavLink>

              <List>
                <Item>
                  <ExternalNavLink
                    href="https://docs.centrifuge.io/"
                    dark={dark}
                  >
                    Docs
                  </ExternalNavLink>
                  <NavLink to="/about" dark={dark}>
                    About
                  </NavLink>
                  <NavLink to="/careers" dark={dark}>
                    Careers
                  </NavLink>
                </Item>
              </List>
            </PaddedItem>

            <PaddedItem />
          </Dropdowns>
        </List>
      </Container>

      {/* Mobile Nav */}
      <MobilePanel
        state={mobileNavIsOpen}
        toggleFunc={toggleMobileNav}
        dark={dark}
      />
    </Nav>
  );
};

Navigation.defaultProps = {
  dark: false
};

const MobilePanel = ({ state, toggleFunc, dark }) => (
  <ResponsiveContext.Consumer>
    {size =>
      state &&
      size === "small" && (
        <Layer
          onClickOutside={toggleFunc}
          onEsc={toggleFunc}
          position="top"
          full="horizontal"
          responsive={false}
          animate={true}
          modal
        >
          <MobileBox
            dark={dark}
            direction="column"
            pad={{
              top: "xxlarge",
              bottom: "xlarge",
              left: "large",
              right: "large"
            }}
            gap="medium"
          >
            <List>
              <MenuItem>
                <ExternalNavLink to="https://tinlake.centrifuge.io" dark={dark}>
                  Tinlake
                </ExternalNavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/altair" dark={dark}>
                  Altair
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/issuers" dark={dark}>
                  Issuers
                </NavLink>
              </MenuItem>

              <MenuItem>
                <ExternalNavLink to="/cfg-token-summary" dark={dark}>
                  CFG Token
                </ExternalNavLink>

                <SubItem>
                  <ExternalNavLink href="/cfg-token-summary" dark={dark}>
                    Token Summary
                  </ExternalNavLink>
                </SubItem>
                <SubItem>
                  <NavLink to="/cfg" dark={dark}>
                    Get CFG
                  </NavLink>
                </SubItem>
              </MenuItem>

              <MenuItem>
                <NavLink dark={dark}>Service</NavLink>

                <SubItem>
                  <ExternalNavLink
                    href="https://docs.centrifuge.io/"
                    dark={dark}
                  >
                    Docs
                  </ExternalNavLink>
                </SubItem>
                <SubItem>
                  <NavLink to="/about" dark={dark}>
                    About
                  </NavLink>
                </SubItem>
                <SubItem>
                  <NavLink to="/careers" dark={dark}>
                    Careers
                  </NavLink>
                </SubItem>
              </MenuItem>
            </List>
          </MobileBox>
        </Layer>
      )
    }
  </ResponsiveContext.Consumer>
);

export default Navigation;
