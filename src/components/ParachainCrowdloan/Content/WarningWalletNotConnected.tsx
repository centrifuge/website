import React from "react";
import { Text } from "grommet";
import { WarningBanner } from "./WarningBanner";

export const WarningWalletNotConnected: React.FC = () => {
  return (
    <WarningBanner type="warning" title="Wallet not connected">
      <Text textAlign="start">
        Connect your Polkadot account in the top right corner. Authorize this
        page in the Polkadot.js browser extension and set the chain to 'Polkadot
        relay chain'.
      </Text>
    </WarningBanner>
  );
};
