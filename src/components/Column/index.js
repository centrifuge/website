import React from "react";
import { Box } from "grommet";
import PropTypes from "prop-types";

const Column = ({ span, children, ...rest }) => (
  <Box style={{ gridColumn: `${span} span` }} {...rest}>
    <div>{children}</div>
  </Box>
);

Column.propTypes = {
  span: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

export default Column;
