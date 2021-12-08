import { Box, Text } from "grommet";
import React from "react";

export const FormTitle: React.FC<{ margin?: string }> = ({
  children,
  margin,
}) => {
  return (
    <Box gap="medium" margin={margin || ""}>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text size="xxlarge" weight={900}>
          {children}
        </Text>
      </Box>
    </Box>
  );
};
