import React from "react";
import { Box, Text } from "grommet";

const Tag = ({ children, ...rest }) => (
  <Box
    as="span"
    round="xsmall"
    justify="center"
    style={{ whiteSpace: "nowrap", display: "inline-flex" }}
    pad={{ horizontal: "xsmall" }}
    {...rest}
  >
    <Text style={{ textTransform: "capitalize" }} textAlign="start">
      {children}
    </Text>
  </Box>
);

export default Tag;
