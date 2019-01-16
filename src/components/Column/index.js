import React from "react";
import { Box, ResponsiveContext } from "grommet";
import PropTypes from "prop-types";

const Column = ({ span, children, ...rest }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        style={{
          gridColumn: `${span[size]} span`
        }}
        {...rest}
      >
        {children}
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

Column.propTypes = {
  span: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default Column;
