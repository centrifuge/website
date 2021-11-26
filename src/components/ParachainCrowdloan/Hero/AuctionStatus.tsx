import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "grommet";

import funnelMobile from "../../../images/parachain-crowdloan/funnel-mobile.svg";
import funnelDesktop from "../../../images/parachain-crowdloan/funnel-desktop.svg";
import { mediaGreaterThan } from "../shared/media";
import { AuctionStatusProgress } from "./AuctionStatusProgress";
import { useCountdownContext } from "../CountdownContext";
import { CROWDLOAN_MAX_CAP, DOT_PLANCK, PARACHAIN_NAME } from "../shared/const";
import BigNumber from "bignumber.js";
import { formatShortDate } from "../shared/format";

const AuctionStatusStyled = styled.div`
  color: #ffffff;
  background-color: #000;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: url(${funnelMobile});

  text-align: center;
  padding: 24px 16px;

  ${mediaGreaterThan("small")} {
    background-image: url(${() => funnelDesktop});
    padding: 60px 16px;
  }
`;

const CountdownRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonRow = styled.div`
  margin-top: 30px;

  ${mediaGreaterThan("small")} {
    margin-top: 16px;
  }
`;

const Heading1 = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;

  ${mediaGreaterThan("small")} {
    font-size: 40px;
    line-height: 64px;
  }
`;

const Heading2 = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;

  ${mediaGreaterThan("small")} {
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
  animation: pulse-red 2s infinite;

  @keyframes pulse-red {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(216, 23, 108, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(216, 23, 108, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(216, 23, 108, 0);
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
  } = useCountdownContext();

  const [numContributions, setNumContributions] = useState<number>();
  const [totalStacked, setTotalStacked] = useState<number>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        '/.netlify/functions/getNumberOfContributions' + `?parachain=${PARACHAIN_NAME}`,
      );

      const json = await response.json();

      setNumContributions(json.numberOfContributions);

      setTotalStacked((new BigNumber(json.totalStaked)).div(DOT_PLANCK).toNumber())
    })();
  }, []);

  return (
    <AuctionStatusStyled>
      <div>
        <Heading1>
          {isAuctionStarted
            ? "Auction in progress..."
            : `Crowdloan opens on ${formatShortDate(auctionStartDate)}!`}
        </Heading1>
      </div>
      <CountdownRow>
        <PulsingDot />
        <Heading2>
          {isAuctionStarted
            ? isEarlyBird
              ? `${earlyBirdHoursLeft} hrs Early Bird Bonus remaining`
              : "Early Bird Bonus is expired!"
            : `${daysUntilAuction} days to go until auction launch`}
        </Heading2>
      </CountdownRow>
      <ButtonRow>
        {!isAuctionStarted && (
          <Button
            primary
            color="brand"
            label="Learn more"
            href="/"
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
    </AuctionStatusStyled>
  );
};
