import React from "react";
import styled from "styled-components";
import { formatNumber } from "../shared/format";
import iconCheck from "../../../images/icons/check.svg";
import { ExternalLink } from "../../Links";
import { TRANSACTION_DETAILS_URL } from "../shared/const";

const ThanksForContributionStyled = styled.div`
  padding: 16px;
`;

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

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
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
          Your {formatNumber(amount, 12)} DOT are successfully staked.{" "}
          <ExternalLink
            unstyled={0}
            href={`${TRANSACTION_DETAILS_URL}/${claimHash}`}
          >
            View Transaction details
          </ExternalLink>
        </TextBody>
      </div>
    </ThanksForContributionStyled>
  );
};
