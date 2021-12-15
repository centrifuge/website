import React from "react";
import styled from "styled-components";
import { formatNumber } from "../shared/format";
import { ExternalLink } from "../../Links";
import { TRANSACTION_DETAILS_URL } from "../shared/const";
import { WarningBanner } from "./WarningBanner";

const TextBody = styled.span`
  font-size: 14px;
  line-height: 19.25px;
  font-weight: 400;
`;

type ThanksForContributionProps = {
  amount: string;
  claimHash: string;
};

export const ThanksForContribution: React.FC<ThanksForContributionProps> = ({
  amount,
  claimHash,
}) => {
  return (
    <WarningBanner type="success" title="Thanks for the contribution!">
      <TextBody>
        Your {formatNumber(amount, 12)} DOT are successfully staked.
        <br />
        <ExternalLink
          unstyled={0}
          href={`${TRANSACTION_DETAILS_URL}/${claimHash}`}
        >
          View Transaction details
        </ExternalLink>
      </TextBody>
    </WarningBanner>
  );
};
