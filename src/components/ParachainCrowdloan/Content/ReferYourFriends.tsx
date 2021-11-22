import React from "react";
import styled from "styled-components";

const ThanksForContributionStyled = styled.div`
  background: ${({ theme }) => theme.global.colors["accent-1"]};
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
  margin-bottom: 4px;
`;

type ThanksForContributionProps = {
  referralCode: string;
};

export const ReferYourFriends: React.FC<ThanksForContributionProps> = ({
  referralCode,
}) => {
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
      <u>
        <TextBody>{referralCode}</TextBody>
      </u>
    </ThanksForContributionStyled>
  );
};
