import React from "react";
import { Box, Image } from "grommet";
import PlayButton from "./PlayButton";

import illustration_1 from "../../images/home/illustrations/1.svg";

const Illustration1 = () => {
  return (
    <Box style={{ position: "relative" }}>
      <Image src={illustration_1} />
      <PlayButton />
    </Box>
  );
};

export default Illustration1;
