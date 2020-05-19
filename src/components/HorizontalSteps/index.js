import React from "react";
import { Box, Image, Text } from "grommet";

import step_arrow from "../../images/home/step_arrow.svg";

const Step = ({ image, text }) => (
  <Box gap="small" style={{ maxWidth: "230px" }}>
    <Image src={image} />
    <Text
      size="large"
      weight={500}
      textAlign="center"
      style={{ lineHeight: "unset" }}
    >
      {text}
    </Text>
  </Box>
);

const HorizontalSteps = ({ steps }) => (
  <Box direction="row" gap="small" justify="center" align="center">
    {steps.map((step, index) => (
      <Box direction="row" gap="small" key={`step-${index}`}>
        <Step {...step} />
        {index !== steps.length - 1 ? <Image src={step_arrow} /> : null}
      </Box>
    ))}
  </Box>
);

export default HorizontalSteps;
