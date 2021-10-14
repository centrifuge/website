import React, { useContext, useMemo } from "react";
import { ResponsiveContext, Text } from "grommet";

export default (props) => {
  const size = useContext(ResponsiveContext);
  const isSmall = useMemo(() => size === "small", [size]);
  return (
    <Text
      size={isSmall ? "36px" : "48px"}
      weight="600"
      textAlign="left"
      {...props}
    >
      {props.children}
    </Text>
  );
};
