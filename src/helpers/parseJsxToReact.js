import React from "react";
import { Heading, Button } from "grommet";
import JsxParser from "react-jsx-parser";
import PropTypes from "prop-types";

import { getRawHtml } from "./index";

const ParseJSXToReact = ({ block }) => (
  <JsxParser components={{ Heading, Button }} jsx={getRawHtml(block)} />
);

ParseJSXToReact.propTypes = {
  block: PropTypes.object.isRequired
};

export default ParseJSXToReact;
