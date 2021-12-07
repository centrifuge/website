import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "grommet";

import funnelMobile from "../../../images/parachain-crowdloan/funnel-mobile.svg";
import funnelDesktop from "../../../images/parachain-crowdloan/funnel-desktop.svg";
import { AuctionStatusProgress } from "./AuctionStatusProgress";
import { useAuctionContext } from "../shared/context/AuctionContext";
import { CROWDLOAN_MAX_CAP, DOT_PLANCK, PARACHAIN_NAME } from "../shared/const";
import BigNumber from "bignumber.js";
import { formatShortDate } from "../shared/format";
import { onBreakpoint } from "../shared/responsive";
import { Container } from "../shared/Container";

const AuctionStatusStyled = styled.div<{ isAuctionStarted: boolean }>`
  color: #ffffff;
  background-color: #000;
  background-repeat: no-repeat;
  background-position: bottom right;

  ${({ isAuctionStarted }) =>
    isAuctionStarted ? "" : `background-image: url(${funnelMobile});`}

  text-align: center;
  padding: 24px 0;

  ${onBreakpoint("M")} {
    ${({ isAuctionStarted }) =>
      isAuctionStarted ? "" : `background-image: url(${funnelDesktop});`}
    padding: 60px 0;
  }
`;

const CountdownRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonRow = styled.div`
  margin-top: 30px;

  ${onBreakpoint("M")} {
    margin-top: 16px;
  }
`;

const Heading1 = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;

  ${onBreakpoint("M")} {
    font-size: 40px;
    line-height: 64px;
  }
`;

const Heading2 = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;

  ${onBreakpoint("M")} {
    font-size: 24px;
    line-height: 40px;
  }
`;

const PulsingDot = styled.div`
  border-radius: 50%;
  margin: 8px;
  height: 16px;
  width: 16px;
  transform: scale(1);

  background: rgba(216, 23, 108, 1);
  box-shadow: 0 0 0 0 rgba(216, 23, 108, 1);
  animation: live-pulse 1s infinite;

  @keyframes live-pulse {
    0% {
      opacity: 1;
    }
    10% {
      opacity: 0.25;
    }
    40% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const AuctionStatus: React.FC = () => {
  const {
    isAuctionStarted,
    isEarlyBird,
    earlyBirdHoursLeft,
    daysUntilAuction,
    auctionStartDate,
  } = useAuctionContext();

  const [numContributions, setNumContributions] = useState<number>();
  const [totalStacked, setTotalStacked] = useState<number>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "/.netlify/functions/getNumberOfContributions" +
          `?parachain=${PARACHAIN_NAME}`
      );

      const json = await response.json();

      setNumContributions(json.numberOfContributions);

      setTotalStacked(
        new BigNumber(json.totalStaked).div(DOT_PLANCK).toNumber()
      );
    })();
  }, []);

  return (
    <AuctionStatusStyled isAuctionStarted={isAuctionStarted}>
      <Container>
        <div>
          <Heading1>
            {isAuctionStarted
              ? "Auction in progress..."
              : `Crowdloan opens on ${formatShortDate(auctionStartDate)}!`}
          </Heading1>
        </div>
        {!(isAuctionStarted && !isEarlyBird) && (
          <CountdownRow>
            <PulsingDot />
            <Heading2>
              {isAuctionStarted
                ? `${earlyBirdHoursLeft} hrs Early Bird Bonus remaining`
                : `${daysUntilAuction} days to go until auction launch`}
            </Heading2>
          </CountdownRow>
        )}
        <ButtonRow>
          {!isAuctionStarted && (
            <Button
              primary
              color="brand"
              label="Learn more"
              href="/parachain"
            />
          )}
        </ButtonRow>

        {isAuctionStarted && (
          <AuctionStatusProgress
            maxCap={CROWDLOAN_MAX_CAP}
            stackedAmount={totalStacked}
            numContributions={numContributions}
          />
        )}
      </Container>
    </AuctionStatusStyled>
  );
};
