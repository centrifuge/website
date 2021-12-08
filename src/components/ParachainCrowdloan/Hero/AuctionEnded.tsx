import React from "react";
import styled from "styled-components";
import { Box, Button } from "grommet";

import { TextSpan } from "../shared/TextSpan";
import dotsSvg from "../../../images/parachain-crowdloan/auction-dots-section.svg";
import { Container } from "../shared/Container";

const AuctionStatusStyled = styled.div`
  color: #000;
  background-color: ${({ theme }) => theme.global.colors["accent-1"]};
  background-image: url(${dotsSvg});

  padding-top: 67px;
  padding-bottom: 45px;
`;

const LightButton = styled(Button)`
  background: ${({ theme }) => theme.global.colors["accent-1"]};
  border: 1px solid black;
`;

type AuctionEndedProps = {
  slotPosition: string;
  totContributions: string;
  totAmount: string;
};

export const AuctionEnded: React.FC<AuctionEndedProps> = ({
  slotPosition,
  totContributions,
  totAmount,
}) => {
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
            Centrifuge wins {slotPosition} slot in Parachain auctions!
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
            {totAmount} DOT raised from {totContributions} contributions
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
