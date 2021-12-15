import { Box, Spinner } from "grommet";
import React from "react";
import styled from "styled-components";
import { ExternalLink } from "../../Links";
import {
  REWARD_HEAVYWEIGHT_FROM,
  REWARD_HEAVYWEIGHT_PERCENT,
  REWARD_EARLY_BIRD_HOURS,
  REWARD_EARLY_BIRD_PERCENT,
  REWARD_LOYALTY_PERCENT,
  REWARD_REFERRAL_PERCENT,
  FAQ_URL,
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
  padding: 16px;

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

const SmallSpinner = styled(Spinner)`
  height: 10px;
  width: 10px;
  display: inline-block;
  padding: 6px;
`;

const InfoBoxListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${onBreakpoint("L")} {
    gap: 16px;
  }
`;

const getNumDigits = (v: number) => {
  if (v < 10) return 2;
  if (v < 100) return 1;
  return 0;
};

export const InfoBoxList = () => {
  const { isAuctionStarted, isEarlyBird, baseRewardRate } = useAuctionContext();

  const formattedReward = baseRewardRate ? (
    formatNumber(
      baseRewardRate,
      getNumDigits(baseRewardRate),
      false,
      true,
      false
    )
  ) : (
    <Box margin="0 0 4px">
      <SmallSpinner color="white" />
    </Box>
  );

  const itemList = [
    {
      figure: formattedReward,
      unit: "CFG",
      title: "Current base reward",
      desc: (
        <Box>
          <Box>Reward for 1 DOT</Box>
          {FAQ_URL && (
            <ExternalLink unstyled={0} href={FAQ_URL}>
              Based on 15% CFG supply
            </ExternalLink>
          )}
        </Box>
      ),
    },
    {
      hidden: isAuctionStarted && !isEarlyBird,
      figure: `${REWARD_EARLY_BIRD_PERCENT}`,
      unit: "%",
      title: "Early bird bonus",
      desc: isAuctionStarted
        ? `On contributions within ${REWARD_EARLY_BIRD_HOURS} hrs after opening`
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
      title: "Double trouble reward",
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
          <Box gap="4px">
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
                  color: #757575;

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
          </Box>
        ))}
    </InfoBoxListStyled>
  );
};
