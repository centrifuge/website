import React from "react";
import PropTypes from "prop-types";

import { StyledLink} from "./index";

const MailLink = ({
  children,
  email,
  subject,
  body,
  bcc,
  cc,
  unstyled
}) => (
  <StyledLink
    href={`mailto:${email}?subject=${subject}&body=${body}&cc=${cc.join(
      ","
    )}&bcc=${bcc.join(",")}`}
    unstyled={unstyled}
  >
    {children}
  </StyledLink>
);

MailLink.defaultProps = {
  subject: ``,
  body: ``,
  bcc: [],
  cc: [],
  unstyled: true
};

MailLink.propTypes = {
  children: PropTypes.node.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string,
  body: PropTypes.string,
  bcc: PropTypes.array,
  cc: PropTypes.array
};

export default MailLink;