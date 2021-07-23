import React, { useContext, isValidElement } from "react";
import { Box, Image, ResponsiveContext, Text } from "grommet";

const AltairUtilityBlock = ({ text, logo }) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box
      round
      background="linear-gradient(0deg, #F2F2F2 58.83%, rgba(242, 242, 242, 0) 120.63%)"
      pad={{ horizontal: "large" }}
      height={{ min: "250px" }}
      justify="center"
      style={{
        position: "relative"
      }}
      margin={{ top: size === "small" ? "xxlarge" : "large" }}
    >
      {isValidElement(text) ? (
        <Box margin={{ top: "60px", bottom: "30px" }} flex="grow">
          {text}
        </Box>
      ) : (
        <Text
          textAlign="center"
          size="large"
          weight={500}
          color="dark-3"
          margin={{ top: "30px" }}
        >
          {text}
        </Text>
      )}
      <Image
        src={logo}
        height="70px"
        style={{
          position: "absolute",
          top: "-30px",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      />
    </Box>
  );
};

export default AltairUtilityBlock;
