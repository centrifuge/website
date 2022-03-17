import React from "react";
import styled from "styled-components";
import { ExternalLink } from "../../Links";
import { TRANSACTION_DETAILS_URL } from "../shared/const";
import { WarningBanner } from "./WarningBanner";

const TextBody = styled.span`
  font-size: 14px;
  line-height: 19.25px;
  font-weight: 400;
`;

type ThanksForContributionProps = {
  claimHash?: string;
};

export const WarningClaimSucceeded: React.FC<ThanksForContributionProps> = ({
  claimHash,
}) => {
  return (
    <WarningBanner type="success" accent title="Rewards claimed">
      {claimHash && (
        <TextBody>
          <ExternalLink
            unstyled={0}
            href={`${TRANSACTION_DETAILS_URL}/${claimHash}`}
          >
            View transaction details
          </ExternalLink>
        </TextBody>
      )}
    </WarningBanner>
  );
};
