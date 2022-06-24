import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "grommet";

import Theme from "../Theme";
import Footer from "../Footer";
import Navigation from "../Navigation";
import EmailSubscription from "../EmailSubscription";
import GDPR from "../GDPR";
import CrossPageBanner from "../CrossPageBanner";

const ALTAIR_CROWNLOAN_PATH = "/altair/crowdloan";
const PARACHAIN_PATH = "/parachain";

const showEmailSubscription = (pathname = "") =>
  [ALTAIR_CROWNLOAN_PATH, PARACHAIN_PATH].reduce(
    (acc, path) => acc && !pathname.startsWith(path),
    true
  );

const Layout = ({ dark, children, location }) => {
  return (
    <Theme>
      <ThemeContext.Extend value={{ dark }}>
        <Navigation dark={dark} />
        {/* <CrossPageBanner /> */}
        <main>{children}</main>
        {showEmailSubscription(location?.pathname) && <EmailSubscription />}
        <Footer />
        <GDPR />
      </ThemeContext.Extend>
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
