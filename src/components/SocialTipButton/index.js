import React, { useState } from "react";
import { Box, DropButton, Text } from "grommet";

const SocialTipButton = ({ href, icon, tooltipContent }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropButton
      plain
      open={open}
      icon={icon}
      href={href}
      dropAlign={{ top: "bottom" }}
      dropContent={
        <Box border pad="small" margin="xsmall" round>
          <Text>{tooltipContent}</Text>
        </Box>
      }
      dropProps={{ plain: true }}
      onMouseEnter={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
      target="_blank"
      rel="noreferrer noopener"
    />
  );
};

export default SocialTipButton;
