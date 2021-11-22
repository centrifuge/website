import React from "react";
import styled from "styled-components";
import { formatDOT } from "../shared/format";
import iconCheck from "../../../images/icons/check.svg";
import { ExternalLink } from "../../Links";

const ThanksForContributionStyled = styled.div``;

const TextHeading3 = styled.span`
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
`;

const TextBody = styled.span`
  font-size: 14px;
  line-height: 19.25px;
  font-weight: 400;
`;

const TitleRow = styled.span`
  display: flex;
  align-items: center;
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
    <ThanksForContributionStyled>
      <TitleRow>
        <img src={iconCheck} alt="" style={{ marginRight: 8 }} />
        <TextHeading3>Thanks for the contribution!</TextHeading3>
      </TitleRow>
      <div>
        <TextBody>
          Your {formatDOT(amount)} DOT are successfully staked.{" "}
          <ExternalLink
            unstyled={false}
            href={`https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffullnode.altair.centrifuge.io#/explorer/query/${claimHash}`}
          >
            View Transaction details
          </ExternalLink>
        </TextBody>
      </div>
    </ThanksForContributionStyled>
  );
};
