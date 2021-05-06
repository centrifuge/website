import React from "react";
import { Box } from "grommet";
import { Section } from "../../components/MDXLayout/shortcodes";

const OrbitSection = ({ children, ...rest }) => (
  <Box fill="horizontal" background="#2762FF" pad={{ vertical: "large" }}>
    <Section {...rest}>{children}</Section>
  </Box>
);

export default OrbitSection;
