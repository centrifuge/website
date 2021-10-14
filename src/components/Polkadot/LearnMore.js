import React, { useContext, useMemo } from "react";
import { Box, ResponsiveContext } from "grommet";
import { ResponsivePlayer } from "../News";
import TextHeading1 from "./text/TextHeading1";

const LearnMore = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = useMemo(() => size === "small", [size]);
  return (
    <Box align="center" pad={isSmall ? "48px 16px" : "84px 16px 123px"}>
      <TextHeading1
        style={{ marginBottom: isSmall ? "48px" : "58px" }}
        textAlign="center"
      >
        Learn more about Centrifuge
      </TextHeading1>
      <Box
        width="100%"
        justify="stretch"
        align="stretch"
        style={{ maxWidth: "978px" }}
      >
        <ResponsivePlayer videoId="h8tfJ9EtIpY" />
      </Box>
    </Box>
  );
};

export default LearnMore;
