import React from 'react';
import PropTypes from 'prop-types';

import Theme from '../Theme';
import Footer from '../Footer';
import Navigation from '../Navigation';
import EmailSubscription from '../EmailSubscription';
import GDPR from '../GDPR';

const ALTAIR_CROWNLOAN_PATH = '/altair/crowdloan';

const Layout = ({ dark, children, location }) => {
  return (
    <Theme>
      <Navigation dark={dark} />
      <main>{children}</main>
      {!location?.pathname.startsWith(ALTAIR_CROWNLOAN_PATH) && (
        <EmailSubscription />
      )}
      <Footer />
      <GDPR />
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
