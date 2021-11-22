import React from "react";
import styled from "styled-components";
import { Box, Button } from "grommet";

import { TextSpan } from "../shared/TextSpan";
import { formatDOT, formatNumber } from "../shared/format";

const AuctionStatusStyled = styled.div`
  color: #000;
  background-color: ${({ theme }) => theme.global.colors["accent-1"]};

  padding: 67px 0 43px;
`;

type AuctionEndedProps = {
  slotPosition: string;
  totContributions: number;
  totAmount: string;
};

export const AuctionEnded: React.FC<AuctionEndedProps> = ({
  slotPosition,
  totContributions,
  totAmount,
}) => {
  return (
    <AuctionStatusStyled>
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
          {formatDOT(totAmount)} raised from {formatNumber(totContributions)}{" "}
          contributions
        </TextSpan>
      </Box>
      <Box align="center">
        <Button
          secondary
          color="accent-1"
          label="Learn more on parachains.info"
          href="https://parachains.info"
        />
      </Box>
    </AuctionStatusStyled>
  );
};
