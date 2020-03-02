import React, { useState } from "react";
import { Box, Image } from "grommet";
import { NavBar } from "@centrifuge/axis-nav-bar";
import { MenuItem } from "@centrifuge/axis-nav-bar";
import { Menu as MenuIcon, User as UserIcon, Close as CloseIcon } from "grommet-icons";
import Search from "../Search";
import styled from "styled-components";
import { navigate } from "gatsby";
const wordmark = require("../../images/centrifuge-wordmark.svg") as string;


const Logo = styled(Image)`
  vertical-align: middle;
  height: 32px;
  margin: 16px 0;
`;

  const Nav = (props) => {
    const Comp = (props) => {
      const [selectedRoute, setSelectedRoute] = useState("/");
      const menuItems: MenuItem[] = [
        {
          label: "Tinlake",
          route: "/products/tinlake"
        },
        {
          label: "Deep Tier Finance",
          route: "/products/deep-tier-finance",
          secondary: true
        },
        {
          label: "Developer Docs",
          route: "https://developer.centrifuge.io/"
        },
        {
          label: 'Contribute',
          route: "/technology/contribute",
          secondary: true
        },
        {
          label: 'Download',
          route: "/technology#download",
          secondary: true
        },
        {
          label: 'Ecosystem',
          route: "/ecosystem"
        },
        {
          label: 'Use Cases',
          route: "/ecosystem/#use-cases",
          secondary: true
        },
        {
          label: 'About',
          route: "/about"
        },
        {
          label: 'Mission',
          route: "/about/#mission"
          secondary: true
        },
        {
          label: 'Team',
          route: "/about/#team",
          secondary: true          
        },
        {
          label: 'Partners',
          route: "/about/#partners",
          secondary: true
        },
        {
          label: 'Careers',
          route: "/careers"
        },
        {
          label: 'News',
          route: "/news"
        }
      ];
      const onRouteClick = (route) => {
        setSelectedRoute(route);
        if (route.startsWith('/')){
          navigate(route);
        }
        else {
          window.open(route);
        }
      };
      const theme = { navBar: { icons: {
        menu: MenuIcon,
        close: CloseIcon,
        user: UserIcon,
      }}};
   
      return (
        <Box>
            <NavBar
              menuItems={menuItems}
              theme={theme}
              selectedRoute={selectedRoute}
              onRouteClick={(item: MenuItem) => {onRouteClick(item.route);}}
              logo={<Logo src={wordmark}/>}
              width={"100%"}
            />
            <Search />
        </Box>

      );
    };

    return <Comp />;
  };

export default Navigation;