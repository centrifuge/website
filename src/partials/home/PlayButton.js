import React, { useState } from "react";
import { Box, Button, Image, Text } from "grommet";

import play_button from "../../images/play_button.svg";
import play_button_bw from "../../images/play_button_bw.svg";

const PlayButton = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Box align="center" gap="small">
      <Text size="large" weight={500}>
        Learn more in our video:
      </Text>
      <Button
        plain
        icon={<Image src={isMouseOver ? play_button_bw : play_button} />}
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
