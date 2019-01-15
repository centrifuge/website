import React from "react";
import {Grid as GrommetGrid} from "grommet";

const Grid = ({ children }) => (
  <GrommetGrid
    fill
    as="section"
    align="center"
    justify="center"
    gap={{ column: "medium" }}
    style={{ padding: "128px 0" }}
    columns={{ count: 12, size: "auto" }}
  >
    {children}
  </GrommetGrid>
);

export default Grid;