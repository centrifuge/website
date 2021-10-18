import React, { useState } from "react";
import { Box, Button, Layer as GrommetLayer } from "grommet";
import { navigate } from "gatsby";
import styled, { css } from "styled-components";
import { breakpointStyle } from "grommet/utils";
import { X } from "styled-icons/feather/X";
import { Menu } from "styled-icons/feather/Menu";

import Container from "../Container";
import { List, Item } from "../List";
import { InternalLink, ExternalLink } from "../Links";
import IconChevronDown from "./IconChevronDown";
import { breakpoints } from "../Theme/theme";

import wordmark from "../../images/centrifuge-wordmark.svg";
import wordmark_white from "../../images/centrifuge-wordmark-light.svg";

// style utils
const breakpointSmall = (cssStyle) =>
  breakpointStyle(breakpoints.small, cssStyle);

const breakpointMedium = (cssStyle) =>
  `@media (min-width: ${breakpoints.small.value}px) { ${cssStyle} }`;

const themedBackgroundColor = ({ theme: { dark } }) =>
  dark ? "black" : "white";
const themedTextColor = ({ theme: { dark } }) => (dark ? "white" : "black");

const Logo = styled.img`
  vertical-align: middle;
  height: 32px;
  max-height: 32px;
  content: url(${({ theme: { dark } }) => (dark ? wordmark_white : wordmark)});
`;

const BrandLink = () => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    onContextMenu={(e) => {
      e.preventDefault();
      navigate("/brand");
    }}
  >
    <NavbarLink to="/">
      <Logo alt="Centrifuge Wordmark" />
    </NavbarLink>
  </div>
);

const MobileModalLayer = styled(GrommetLayer)`
  display: none;

  ${breakpointSmall`
    display: initial;
  `}

  background: ${themedBackgroundColor};
  padding: 72px 24px 48px;
  height: 100vh;
  overflow-y: scroll;

`;

const Nav = styled(Box)`
  z-index: 10;
  position: sticky;
  -webkit-position: sticky;
  top: 0;

  padding: 6px 0;

  ${breakpointSmall`
    top: 1rem;
    z-index: 2000;
  `}

  &::after {
    content: "";
    position: absolute;
    background-color: ${themedBackgroundColor};
    z-index: -1;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    ${breakpointSmall`
      bottom: -1rem;
      top: -1rem;
    `}
  }
`;

const NavButton = styled(Button)`
  display: none;
  ${breakpointSmall`
    display: initial;
  `}
`;

const MenuItem = styled(Item)`
  ${breakpointSmall`
    display: block;
    padding: 0.5rem 0;
  `}

  ${breakpointMedium`
    line-height: 1rem;
  `}
`;

const DropdownMenuChevron = styled.span`
  width: 24px;
  height: 24px;
  display: inline-block;
  transition: transform 100ms;
`;

const DropdownMenuList = styled(List)`
  background: ${themedBackgroundColor};

  > li:last-child {
    padding-bottom: 0 !important;
    color: red !important;
  }

  ${breakpointSmall`
    padding-left: 1.2em;
    padding-top: .5em;
  `}

  ${breakpointMedium`
    position: absolute;
    z-index: -10;
    left: 0;
    top: 0;
    padding-top: 32px;
  `}
`;

const SubItem = styled(Item)`
  display: block;
`;

const DropdownMenuTrigger = styled.button`
  display: flex;
  align-items: center;
  appearance: none;
  border: none;
  height: 30px;

  ${breakpointSmall`padding: 0;`}
  ${breakpointMedium`padding: 0.5em 1em;`}

  font-weight: var(--fw-demibold);
  white-space: nowrap;
  background: ${themedBackgroundColor};
  color: ${themedTextColor};
  cursor: pointer;
  user-select: none;
  :focus,
  :hover {
    outline: none;
    text-decoration: underline;
  }
`;

const Dropdown = styled(MenuItem)`
  ${DropdownMenuList} {
    display: none;
  }
  :hover,
  :focus-within {
    padding-bottom: 0;
    ${DropdownMenuChevron} {
      transform: rotate(-180deg);
    }
    ${DropdownMenuList} {
      display: block;
    }

    ${breakpointMedium`
      filter: invert(100%);
    `}
  }
`;

const styleLink = (component) => styled(component)`
  display: inline-block;
  font-weight: var(--fw-demibold);
  white-space: nowrap;

  background: ${themedBackgroundColor}!important;
  color: ${themedTextColor}!important;

  ${breakpointSmall`
    padding: .8em 0;
  `}
  ${breakpointMedium`
    padding: 0.5em 1em;
  `}

  :hover,
  :active,
  :focus {
    outline: none;
    ${breakpointMedium`
      filter: invert(100%);
    `}
  }

  ${DropdownMenuList} & {
    filter: none;
    font-weight: var(--fw-medium);

    ${breakpointSmall`
      padding: .3em 0;
    `}
  }
`;

const NavbarLinkInternal = styleLink(InternalLink);
const NavbarLinkExternal = styleLink(ExternalLink);

const NavbarLink = ({ to, children, external, ...rest }) => {
  return external ? (
    <NavbarLinkExternal href={to} {...rest}>
      {children}
    </NavbarLinkExternal>
  ) : (
    <NavbarLinkInternal to={to} {...rest}>
      {children}
    </NavbarLinkInternal>
  );
};

const DropdownMenuItem = ({ label, children }) => {
  return (
    <Dropdown style={{ position: "relative" }}>
      <DropdownMenuTrigger>
        {label}&nbsp;
        <DropdownMenuChevron>
          <IconChevronDown />
        </DropdownMenuChevron>
      </DropdownMenuTrigger>
      <DropdownMenuList>
        {children &&
          children.map((child, i) => <SubItem key={`${i}`}>{child}</SubItem>)}
      </DropdownMenuList>
    </Dropdown>
  );
};

const NavList = ({ hideSmall }) => (
  <List
    css={`
      ${breakpointSmall(css`
        margin: 24px 0 0 80px;
        ${hideSmall ? "display:none;" : ""}
      `)}

      ${breakpointMedium`
        display: flex;
        align-items: center;
        gap: 12px;
      `}
    `}
    direction="row"
    align="center"
    gap="large"
  >
    <MenuItem>
      <NavbarLink external to="https://tinlake.centrifuge.io">
        Tinlake
      </NavbarLink>
    </MenuItem>

    <DropdownMenuItem label="Parachain">
      <NavbarLink to="/parachain">Centrifuge Chain</NavbarLink>
      <NavbarLink to="/altair">Altair</NavbarLink>
    </DropdownMenuItem>

    <MenuItem>
      <NavbarLink to="/issuers">Issuers</NavbarLink>
    </MenuItem>

    <DropdownMenuItem label="CFG Token">
      <NavbarLink to="/cfg-token-summary">Token Summary</NavbarLink>
      <NavbarLink to="/cfg">CFG</NavbarLink>
    </DropdownMenuItem>

    <MenuItem>
      <NavbarLink to="/about">About</NavbarLink>
    </MenuItem>

    <MenuItem>
      <NavbarLink to="/careers">Careers</NavbarLink>
    </MenuItem>

    <MenuItem>
      <NavbarLink external to="https://docs.centrifuge.io/">
        Docs
      </NavbarLink>
    </MenuItem>
  </List>
);

const Navigation = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const toggleMobileNav = () => setMobileNavIsOpen(!mobileNavIsOpen);

  return (
    <Nav as="nav" role="navigation">
      <Container>
        <List style={{ display: "flex", alignItems: "center" }}>
          {/* Logo */}
          <Item style={{ flex: 1 }}>
            <BrandLink />
          </Item>

          {/* Mobile Nav Toggle */}
          <NavButton onClick={toggleMobileNav}>
            {mobileNavIsOpen ? (
              <X
                size={32}
                css={({ theme: { dark } }) =>
                  dark ? "color:white;" : "color:black;"
                }
              />
            ) : (
              <Menu
                size={32}
                css={({ theme: { dark } }) =>
                  dark ? "color:white;" : "color:black;"
                }
              />
            )}
          </NavButton>

          {/* Desktop Nav */}
          <NavList hideSmall />
        </List>
      </Container>

      {/* Mobile Nav */}
      <MobilePanel state={mobileNavIsOpen} toggleFunc={toggleMobileNav} />
    </Nav>
  );
};

const MobilePanel = ({ state, toggleFunc }) => {
  return (
    state && (
      <MobileModalLayer
        onClickOutside={toggleFunc}
        onEsc={toggleFunc}
        position="top"
        full="horizontal"
        responsive={false}
        animate={true}
        modal
      >
        <NavList />
      </MobileModalLayer>
    )
  );
};

export default Navigation;
