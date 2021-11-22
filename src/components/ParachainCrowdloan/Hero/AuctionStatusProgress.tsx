import React from "react";
import styled from "styled-components";
import { AuctionProgressBar } from "./AuctionProgressBar";
import { formatNumber } from "../shared/format";

const AuctionStatusProgressStyled = styled.div``;

type AuctionStatusProgressProps = {
  maxCap: number;
  stackedAmount: number;
  numContributions: number;
};

const ProgressRow = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: initial;

  padding: 0 10.5px 8px;
`;

const TextValue = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-right: 8px;
`;

const TextLabel = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
`;

export const AuctionStatusProgress: React.FC<AuctionStatusProgressProps> = ({
  maxCap = 200000,
  stackedAmount = 0,
  numContributions = 0,
}) => {
  return (
    <AuctionStatusProgressStyled>
      <ProgressRow>
        <div>
          <TextValue>{formatNumber(numContributions)}</TextValue>
          <TextLabel>contributions</TextLabel>
        </div>
        <div>
          <TextValue>{formatNumber(stackedAmount)}</TextValue>
          <TextLabel>DOT staked</TextLabel>
        </div>
        <div>
          <TextValue>200k</TextValue>
          <TextLabel>DOT maximum cap</TextLabel>
        </div>
      </ProgressRow>
      <AuctionProgressBar maxCap={maxCap} stackedAmount={stackedAmount} />
    </AuctionStatusProgressStyled>
  );
};
