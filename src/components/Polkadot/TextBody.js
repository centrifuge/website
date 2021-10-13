import React from "react";
import { Text } from "grommet";

export default (props) => (
  <Text
    size="16px"
    weight="400"
    textAlign="left"
    {...props}
    style={{ lineHeight: 1.375, ...(props.style || {}) }}
  >
    {props.children}
  </Text>
);
