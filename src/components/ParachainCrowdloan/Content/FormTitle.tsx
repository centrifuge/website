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
          lineHeight: "40px",
        }}
      >
        <Text size="32px" weight={600}>
          {children}
        </Text>
      </Box>
    </Box>
  );
};
