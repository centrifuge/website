import React from "react";
import { Anchor, Box, Image, Text } from "grommet";

import chevron_right from "../../images/chevron-right.svg";

const MiningLink = ({ title, subtitle, link, icon, external }) => {
  let anchorProps = {};
  if (external) {
    anchorProps.target = "_blank";
    anchorProps.rel = "noreferrer noopener";
  }

  console.log(link);

  return (
    <Anchor href={link} style={{ textDecoration: "none" }} {...anchorProps}>
      <Box
        direction="row"
        justify="between"
        gap="small"
        round="xsmall"
        elevation="small"
        pad={{ horizontal: "medium", vertical: "small" }}
      >
        <Box gap="medium" direction="row">
          {icon}
          <Box gap="xxsmall">
            <Box />
            <Text size="large" weight="bold">
              {title}
            </Text>
            <Text>{subtitle}</Text>
          </Box>
        </Box>
        <Box justify="center">
          <Image src={chevron_right} />
        </Box>
      </Box>
    </Anchor>
  );
};

MiningLink.defaultProps = {
  external: false
};

export default MiningLink;
