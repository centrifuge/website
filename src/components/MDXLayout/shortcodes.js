import React from "react";
import { Text, Box, Image, Button, Heading, ResponsiveContext } from "grommet";

import Container from "../Container";
import FullWidthContainer from "../FullWidthContainer";
import Column from "../Column";
import Grid from "../Grid";

const Section = ({ children, ...rest }) => (
  <Container>
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          margin={{ vertical: size === "small" ? "xxlarge" : "xlarge" }}
          {...rest}
        >
          {children}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </Container>
);

const FullWidthSection = ({ children, ...rest }) => (
  <FullWidthContainer>
    <Box margin={{ vertical: "xlarge" }} {...rest}>
      {children}
    </Box>
  </FullWidthContainer>
);

const Row = ({ children, mt, mb, ...rest }) => (
  <Grid gap="36" mt={mt} mb={mb} {...rest} justify="unset">
    {children}
  </Grid>
);

Row.defaultProps = {
  mb: "0",
  mt: "0"
};

const Col = ({ children, span: receivedSpan, align, ...rest }) => {
  let span = {};
  if (typeof receivedSpan !== "object") {
    span.large = receivedSpan;
    span.medium = receivedSpan;
  } else {
    span.large = receivedSpan.large || 12;
    span.medium = receivedSpan.medium || 12;
    span.small = receivedSpan.small || 12;
  }
  return (
    <Column span={span} {...rest} alignSelf={align}>
      {children}
    </Column>
  );
};

Col.defaultProps = {
  alignTop: "center"
};

const CustomButton = ({ label, href, align, margin, ...rest }) => (
  <Box align={align} margin={margin}>
    <Button label={label} href={href} {...rest} />
  </Box>
);

CustomButton.defaultProps = {
  align: "center",
  margin: {}
};

const ResponsiveContent = ({ breakpoints, children }) => (
  <ResponsiveContext.Consumer>
    {size => <>{breakpoints.indexOf(size) >= 0 ? children : null}</>}
  </ResponsiveContext.Consumer>
);

ResponsiveContent.defaultProps = {
  breakpoints: []
};

export {
  Image,
  Text,
  Box,
  Heading,
  CustomButton as Button,
  Section,
  FullWidthSection,
  Row,
  Col,
  ResponsiveContent
};
