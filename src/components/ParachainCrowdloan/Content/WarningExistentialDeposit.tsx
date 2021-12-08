import React from "react";
import { Text } from "grommet";
import { WarningBanner } from "./WarningBanner";
import { MIN_EXISTENTIAL_DEPOSIT_DOT } from "../shared/const";
import { ExternalLink } from "../../Links";

export const WarningExistentialDeposit: React.FC = () => {
  return (
    <WarningBanner type="warning" title="Existential deposit exceeded">
      <Text textAlign="start">
        Please always leave at least {MIN_EXISTENTIAL_DEPOSIT_DOT} DOT in your
        account after the contribution.
        <br />
        Find more information{" "}
        <ExternalLink
          unstyled={0}
          href="https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-"
        >
          here
        </ExternalLink>
      </Text>
    </WarningBanner>
  );
};
