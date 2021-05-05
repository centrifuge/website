import React, { useContext, useState } from "react";
import { Box, Button, Image, ResponsiveContext } from "grommet";

import play_button from "../../images/play_button.svg";
import play_button_bw from "../../images/play_button_bw.svg";

const extraStyles = {
  small: {
    top: "52%",
    left: "16%",
    transform: "translateY(-50%)"
  },
  medium: {
    top: "52%",
    left: "17%",
    transform: "translateY(-50%)"
  },
  large: {
    top: "52%",
    left: "16%",
    transform: "translateY(-50%)"
  }
};

const PlayButton = () => {
  const size = useContext(ResponsiveContext);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const imageProps = {};
  if (size === "small") imageProps.width = "30px";

  return (
    <Box>
      <Button
        plain
        icon={
          <Image
            src={isMouseOver ? play_button : play_button_bw}
            {...imageProps}
          />
        }
        style={{
          position: "absolute",
          ...extraStyles[size]
        }}
        href="https://youtu.be/23nQWgO4AfA"
        target="_blank"
        rel="noreferrer noopener"
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
      />
    </Box>
  );
};

export default PlayButton;
