import React from "react";
import styled from "styled-components";
import {
  REWARD_HEAVYWEIGHT_FROM,
  REWARD_HEAVYWEIGHT_PERCENT,
  REWARD_CFG_PER_DOT,
  REWARD_EARLY_BIRD_HOURS,
  REWARD_EARLY_BIRD_PERCENT,
  REWARD_LOYALTY_PERCENT,
  REWARD_REFERRAL_PERCENT,
} from "../shared/config";

import { useAuctionContext } from "../shared/context/AuctionContext";
import { formatNumber } from "../shared/format";

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
  padding: 16px 8px;

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
      title: "Base reward",
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

    {
      figure: REWARD_HEAVYWEIGHT_PERCENT,
      unit: "%",
      title: "Heavyweight reward",
      desc: isAuctionStarted
        ? `On contributions larger than ${formatNumber(
            REWARD_HEAVYWEIGHT_FROM,
            0,
            true
          )} DOT`
        : "On large contributions",
    },
    {
      figure: `${REWARD_LOYALTY_PERCENT}`,
      unit: "%",
      title: "Loyalty bonus",
      desc: "To contributors of Altair and Centrifuge crowdloans",
      footnote:
        "You must contribute DOT using the same account that contributed KSM",
    },
  ];

  return (
    <InfoBoxListStyled>
      {itemList
        .filter((it) => !it.hidden)
        .map(({ title, desc, figure, unit, footnote }) => (
          <>
            <InfoBox key={title}>
              <InfoBoxCircle unit={unit}>{figure}</InfoBoxCircle>

              <InfoBoxStack>
                <TextSpan
                  css={`
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 19.25px;
                  `}
                >
                  {title}
                  {footnote ? " *" : ""}
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
            {footnote && (
              <TextSpan
                css={`
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 19.25px;

                  ::before {
                    content: "*";
                    display: inline-block;
                    margin-right: 0.5em;
                  }
                `}
              >
                {footnote}
              </TextSpan>
            )}
          </>
        ))}
    </InfoBoxListStyled>
  );
};
