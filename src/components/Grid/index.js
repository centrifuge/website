import React from "react";
import { Grid as GrommetGrid } from "grommet";
import PropTypes from "prop-types";

const Grid = ({ children, align, justify, ...rest }) => (
  <GrommetGrid
    fill
    as="section"
    align={align}
    justify={justify}
    gap={{ column: "medium" }}
    style={{ padding: "128px 0" }}
    columns={{ count: 12, size: "auto" }}
    {...rest}
  >
    {children}
  </GrommetGrid>
);

Grid.defaultProps = {
  align: "center",
  justify: "center"
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  justify: PropTypes.string
};

export default Grid;
