import { Spinner } from "grommet";
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

const CustomSpinner = styled(Spinner)`
  height: 10px;
  width: 10px;
  display: inline-block;
  padding: 6px;
  margin-right: 8px;
  border-top-color: black;
`;

type ThanksForContributionProps = {
  claimHash?: string;
};

export const WarningClaimSucceeded: React.FC<ThanksForContributionProps> = ({
  claimHash,
}) => {
  const isLoadingHash = claimHash === "loading";
  return (
    <WarningBanner type="success" accent title="Rewards claimed">
      {isLoadingHash && <CustomSpinner />}
      {claimHash && !isLoadingHash && (
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
