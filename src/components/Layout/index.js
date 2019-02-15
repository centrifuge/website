import React from "react";
import PropTypes from "prop-types";

import Theme from "../Theme";
import Footer from "../Footer";
import Navigation from "../Navigation";
import EmailSubscription from "../EmailSubscription";
import GDPR from "../GDPR";

const Layout = ({ children }) => (
  <Theme>
    <Navigation />
    <main>{children}</main>
    <EmailSubscription />
    <Footer />
    <GDPR />
  </Theme>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
