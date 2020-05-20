import React from "react";
import { Box, Image, Text, ResponsiveContext } from "grommet";

import step_arrow from "../../images/home/step_arrow.svg";
import step_arrow_down from "../../images/home/step_arrow_down.svg";

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
  <ResponsiveContext.Consumer>
    {(size) => (
      <Box
        direction={size === "small" ? "column" : "row"}
        gap={size === "small" ? "large" : "small"}
        justify="center"
        align="center"
      >
        {steps.map((step, index) => (
          <Box
            direction={size === "small" ? "column" : "row"}
            gap={size === "small" ? "large" : "small"}
            key={`step-${index}`}
          >
            <Step {...step} />
            {index !== steps.length - 1 ? (
              <Image
                src={size === "small" ? step_arrow_down : step_arrow}
                width={size === "small" ? "24px" : null}
                alignSelf="center"
              />
            ) : null}
          </Box>
        ))}
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

export default HorizontalSteps;
