import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Grommet, Button } from "grommet";
import { grommet } from "grommet/themes";
// import { deepMerge } from "grommet/utils";

// import Header from "../Header";
import Footer from "../Footer";
import Navigation from "../Navgation";

// import theme from "../../theme";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Grommet theme={grommet}>
        <Navigation />
        <Button primary>Button</Button>

        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

        {children}

        <Footer />
      </Grommet>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
