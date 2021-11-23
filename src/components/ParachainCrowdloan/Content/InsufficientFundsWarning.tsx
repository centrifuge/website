import React from "react";
import { Box, Text } from "grommet";
import { CircleAlert } from "grommet-icons";

type InsufficientFundsWarningProps = {
  gasFee: string;
};
export const InsufficientFundsWarning: React.FC<InsufficientFundsWarningProps> = ({
  gasFee,
}) => {
  return (
    <Box
      background={{ color: "#FFF0D6" }}
      style={{
        width: "500px",
        padding: "24px",
        borderRadius: "4px",
        marginTop: "24px",
      }}
      gap="small"
    >
      <Text weight={600}>
        <CircleAlert size="small" /> Insufficent funds
      </Text>
      <Text textAlign="start">
        Latest network fees: <strong>{gasFee}</strong>
        <br />
        Ensure that your balance can cover both the contribution as well as the
        network fees.
      </Text>
    </Box>
  );
};
