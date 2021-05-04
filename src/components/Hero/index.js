import React, { useContext } from "react";
import { Box, Button, ResponsiveContext, Text } from "grommet";

import hero_large from "../../images/home/hero/large.svg";
import hero_medium from "../../images/home/hero/medium.svg";
import hero_small from "../../images/home/hero/small.svg";

const config = {
  large: {
    image: hero_large,
    gap: "medium",
    height: "50%",
    paddingTop: "15%",
    paddingBottom: "5%",
    headingSize: "xxlarge",
    subheadingSize: "xlarge"
  },
  medium: {
    image: hero_medium,
    gap: "small",
    height: "55%",
    paddingTop: "15%",
    paddingBottom: "0",
    headingSize: "xxlarge",
    subheadingSize: "large"
  },
  small: {
    image: hero_small,
    gap: "small",
    height: "160%",
    paddingTop: "25%",
    paddingBottom: "0",
    headingSize: "xlarge",
    subheadingSize: "large"
  }
};

const Hero = () => {
  const size = useContext(ResponsiveContext);

  const title = (
    <Box
      style={{
        position: "absolute",
        top: config[size].paddingTop,
        left: "50%",
        transform: "translate(-50% , 0)"
      }}
      align="center"
      gap={config[size].gap}
      fill="horizontal"
    >
      <Text size={config[size].headingSize} weight={500}>
        Real-World DeFi
      </Text>
      <Text
        size={config[size].subheadingSize}
        color="dark-4"
        textAlign="center"
      >
        Unlocking liquidity for real world assets
      </Text>
    </Box>
  );

  const ctas = (
    <Box
      style={{
        position: "absolute",
        bottom: config[size].paddingBottom,
        left: "50%",
        transform: "translate(-50% , 0)"
      }}
      align="center"
      gap={config[size].gap}
      fill="horizontal"
    >
      <Box direction="row" gap="small">
        <Text size={config[size].subheadingSize} weight={420}>
          Current TVL:
        </Text>
        <Text size={config[size].subheadingSize}>$2,430,346.95</Text>
      </Box>
      <Box direction={size !== "small" ? "row" : "column"} gap="small">
        <Button
          primary
          label="Try our Dapp"
          href="https://tinlake.centrifuge.io"
          target="_blank"
        />
        <Button
          label="Learn More"
          href="https://docs.centrifuge.io"
          target="_blank"
        />
      </Box>
    </Box>
  );

  const contentProps = size === "small" ? { gap: "medium" } : {};
  const content = (
    <Box {...contentProps}>
      {title}
      {ctas}
    </Box>
  );

  return (
    <Box
      style={{
        position: "relative",
        paddingBottom: config[size].height,
        backgroundImage: `url(${config[size].image})`,
        backgroundSize: "cover"
      }}
    >
      {content}
    </Box>
  );
};

export default Hero;
