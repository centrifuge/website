import React from "react";
import PropTypes from "prop-types";

import Theme from "../Theme";
import Footer from "../Footer";
import Navigation from "../Navgation";
import EmailSubscription from "../EmailSubscription";

const Layout = ({ children }) => (
  <Theme>
    <Navigation />
    {children}
    <EmailSubscription />
    <Footer />
  </Theme>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
