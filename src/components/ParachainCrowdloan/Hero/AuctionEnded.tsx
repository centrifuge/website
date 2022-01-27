import React, { useMemo } from "react";
import styled from "styled-components";
import { Box, Button } from "grommet";

import { TextSpan } from "../shared/TextSpan";
import dotsSvg from "../../../images/parachain-crowdloan/auction-dots-section.svg";
import { Container } from "../shared/Container";
import { RESULTS_SUBTITLE, RESULTS_TITLE } from "../shared/config";
import { useAuctionContext } from "../shared/context/AuctionContext";
import { formatDOT, formatNumber } from "../shared/format";

const AuctionStatusStyled = styled.div`
  color: #000;
  background-color: ${({ theme }) => theme.global.colors.centrifugeOrange};
  background-image: url(${dotsSvg});

  padding-top: 67px;
  padding-bottom: 45px;
`;

const LightButton = styled(Button)`
  background: ${({ theme }) => theme.global.colors.centrifugeOrange};
  border: 1px solid black;
`;

export const AuctionEnded: React.FC = () => {
  const { totalRaised, totalContributions } = useAuctionContext();

  const subTitle = useMemo<string>(() => {
    if (!totalRaised || !totalContributions) return " ";
    return (RESULTS_SUBTITLE || "")
      .replace("{totalRaised}", formatDOT(totalRaised || 0))
      .replace("{totalContributions}", formatNumber(totalContributions || 0));
  }, [totalRaised, totalContributions]);

  return (
    <AuctionStatusStyled>
      <Container>
        <Box align="center">
          <TextSpan
            css={`
              text-align: center;
              font-weight: 600;
              font-size: 40px;
              line-height: 64px;
            `}
          >
            {RESULTS_TITLE}
          </TextSpan>
        </Box>
        <Box align="center" margin={{ bottom: "16px" }}>
          <TextSpan
            css={`
              text-align: center;
              font-weight: 600;
              font-size: 24px;
              line-height: 40px;
            `}
          >
            {subTitle}
          </TextSpan>
        </Box>
        <Box align="center">
          <LightButton
            secondary
            color="accent-1"
            label="Learn more on parachains.info"
            href="https://parachains.info"
            target="_blank"
          />
        </Box>
      </Container>
    </AuctionStatusStyled>
  );
};
