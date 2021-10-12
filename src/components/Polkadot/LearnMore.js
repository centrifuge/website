import React from "react";
import { Box, Heading } from "grommet";
import { ResponsivePlayer } from "../News";

const LearnMore = () => {
  return (
    <Box align="center" style={{ padding: "0 16px 123px" }}>
      <Heading size="48px" style={{ margin: "98px 0 58px" }}>
        Learn more about Centrifuge
      </Heading>
      <Box width="978px" height="545px" justify="stretch" align="stretch">
        <ResponsivePlayer videoId="h8tfJ9EtIpY" />
      </Box>
    </Box>
  );
};

export default LearnMore;
