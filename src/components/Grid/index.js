import React from "react";
import { Grid as GrommetGrid, Box } from "grommet";
import PropTypes from "prop-types";

const Grid = ({ children, align, justify, padding, ...rest }) => (
  <Box pad={padding}>
    <GrommetGrid
      fill
      as="section"
      align={align}
      justify={justify}
      gap={{ column: "medium" }}
      columns={{ count: 12, size: "auto" }}
      {...rest}
    >
      {children}
    </GrommetGrid>
  </Box>
);

Grid.defaultProps = {
  align: "center",
  justify: "start",
  padding: {
    top: "128px",
    bottom: "128px"
  }
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  justify: PropTypes.string,
  padding: PropTypes.object
};

export default Grid;
