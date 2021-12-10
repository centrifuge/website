import React from "react";
import styled from "styled-components";
import {
  REWARD_CFG_PER_DOT,
  REWARD_EARLY_BIRD_HOURS,
  REWARD_EARLY_BIRD_PERCENT,
  REWARD_LOYALTY_PERCENT,
  REWARD_REFERRAL_PERCENT,
} from "../shared/const";
import { useAuctionContext } from "../shared/context/AuctionContext";

import { onBreakpoint } from "../shared/responsive";
import { TextSpan } from "../shared/TextSpan";

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  min-width: 256px;

  background-color: ${({ theme }) => theme.global.colors.centrifugeOrange};
  color: #000;
  border-radius: 6px;
  padding: 8px 16px;

  ${onBreakpoint("L")} {
    min-height: 88px;
  }
`;

const InfoBoxCircle = styled.div<{ unit: string }>`
  display: flex;
  flex-direction: ${({ unit }) => (unit === "%" ? "row" : "column")};
  justify-content: center;
  align-items: center;

  background-color: #000;
  color: #fff;

  min-width: 52px;
  max-width: 52px;
  min-height: 52px;
  max-height: 52px;
  border-radius: 50%;


  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  

  ::after {
    content: "${({ unit }) => unit}";
    display: block;
    color: white;

    font-size: 12px;
    font-weight: 600;
    line-height: 12px;
  }
`;

const InfoBoxStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoBoxListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${onBreakpoint("L")} {
    gap: 16px;
  }
`;

export const InfoBoxList = () => {
  const { isAuctionStarted, isEarlyBird } = useAuctionContext();

  const itemList = [
    {
      figure: `${REWARD_CFG_PER_DOT}`,
      unit: "CFG",
      title: "Staking reward",
      desc: "Reward for 1 staked DOT",
    },
    {
      hidden: isAuctionStarted && !isEarlyBird,
      figure: `${REWARD_EARLY_BIRD_PERCENT}`,
      unit: "%",
      title: "Early bird bonus",
      desc: isAuctionStarted
        ? `On contributions within ${REWARD_EARLY_BIRD_HOURS} hrs after crowdloan opening`
        : "On early contributions after crowdloan opening",
    },
    {
      figure: `${REWARD_REFERRAL_PERCENT}`,
      unit: "%",
      title: "Referral reward",
      desc: "For both referrer and referred contributor",
    },
    // removed as it's not confirmed yet
    // see https://centrifugehq.slack.com/archives/C02BKGJ3090/p1638890613175800

    // {
    //   figure: `${REWARD_HEAVIWEIGHT_FROM}`,
    //   unit: "DOT",
    //   title: "Heavyweight reward",
    //   desc: isAuctionStarted
    //     ? `On contributions larger than ${REWARD_HEAVIWEIGHT_FROM} DOT`
    //     : "On large contributions",
    // },
    {
      figure: `${REWARD_LOYALTY_PERCENT}`,
      unit: "%",
      title: "Loyalty bonus",
      desc: "To contributors of Altair and Centrifuge crowdloans",
    },
  ];

  return (
    <InfoBoxListStyled>
      {itemList
        .filter((it) => !it.hidden)
        .map(({ title, desc, figure, unit }) => (
          <InfoBox key={title}>
            {isAuctionStarted && (
              <InfoBoxCircle unit={unit}>{figure}</InfoBoxCircle>
            )}
            <InfoBoxStack>
              <TextSpan
                css={`
                  font-size: 14px;
                  font-weight: 600;
                  line-height: 19.25px;
                `}
              >
                {title}
              </TextSpan>
              <TextSpan
                css={`
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 19.25px;
                `}
              >
                {desc}
              </TextSpan>
            </InfoBoxStack>
          </InfoBox>
        ))}
    </InfoBoxListStyled>
  );
};
