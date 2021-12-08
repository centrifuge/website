import React from "react";
import { Text } from "grommet";
import { WarningBanner } from "./WarningBanner";

export const WarningExtensionNotAuthorized: React.FC = () => {
  return (
    <WarningBanner type="warning" title="No account visible">
      <Text textAlign="start">
        Authorize this page in the Polkadot.js browser extension. Set the chain
        used to Polkadot relay chain or allow the use on any chain.
      </Text>
    </WarningBanner>
  );
};
