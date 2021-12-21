import React, { useState } from "react";
import { useCopyToClipboard } from "react-use";
import { Checkmark } from "grommet-icons";
import copyUrl from "../../../images/icons/copy.svg";

import styled from "styled-components";

const ThanksForContributionStyled = styled.div`
  background: ${({ theme }) => theme.global.colors.centrifugeOrange};
  padding: 16px;
  border-radius: 6px;
`;

const TextHeading3 = styled.span`
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
`;

const TextBody = styled.span`
  font-size: 14px;
  line-height: 19.25px;
  font-weight: 400;
`;

const TextCode = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
`;

const TitleRow = styled.div`
  margin-bottom: 4px;
`;

const CopyReferralCode = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  height: 32px;
  margin-top: 8px;

  :hover {
    text-decoration: underline;
  }
`;

type ThanksForContributionProps = {
  referralCode: string;
};

export const ReferYourFriends: React.FC<ThanksForContributionProps> = ({
  referralCode,
}) => {
  const [_, copyToClipboard] = useCopyToClipboard();
  const [showCopiedFeedback, setShowCopiedFeedback] = useState<boolean>(false);

  const showFeedback = () => {
    setShowCopiedFeedback(true);
    setTimeout(() => {
      setShowCopiedFeedback(false);
    }, 3000);
  };

  return (
    <ThanksForContributionStyled>
      <TitleRow>
        <TextHeading3>Refer your friends</TextHeading3>
      </TitleRow>
      <div>
        <TextBody>
          Send this link to a friend so both of you can earn an additional 5%
          reward for each used referral code.
        </TextBody>
      </div>

      <CopyReferralCode
        role="button"
        onClick={() => {
          copyToClipboard(
            `http://centrifuge.io/parachain/crowdloan/?refer=${referralCode}`
          );
          showFeedback();
        }}
      >
        <TextCode>{referralCode}</TextCode>
        <img src={copyUrl} />

        {showCopiedFeedback && <Checkmark size="small" />}
      </CopyReferralCode>
    </ThanksForContributionStyled>
  );
};
