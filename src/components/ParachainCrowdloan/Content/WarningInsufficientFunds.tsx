import React from "react";
import { Text } from "grommet";
import { WarningBanner } from "./WarningBanner";

type WarningInsufficientFundsProps = {
  gasFee: string;
};
export const WarningInsufficientFunds: React.FC<WarningInsufficientFundsProps> = ({
  gasFee,
}) => {
  return (
    <WarningBanner type="warning" title="Insufficent funds">
      <Text textAlign="start">
        Latest network fees: <strong>{gasFee}</strong>
        <br />
        Ensure that your balance can cover both the contribution as well as the
        network fees.
      </Text>
    </WarningBanner>
  );
};
