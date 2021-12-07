import { Box, Text } from "grommet";
import React from "react";

export const FormTitle: React.FC = ({ children }) => {
  return (
    <Box gap="medium" style={{ margin: 0 }}>
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
