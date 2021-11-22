import React from "react";
import styled from "styled-components";

const AuctionProgressBarStyled = styled.div`
  height: 32px;
  background: #fff;

  border-radius: 16px;
  overflow: hidden;
`;

const ProgressIndicator = styled.div<{ percentage: number }>`
  height: 100%;
  background: ${({ theme }) => theme.global.colors["accent-1"]};

  width: ${({ percentage }) => percentage}%;
`;

type AuctionProgressBarProps = {
  maxCap: number;
  stackedAmount: number;
};

export const AuctionProgressBar: React.FC<AuctionProgressBarProps> = ({
  maxCap = 200000,
  stackedAmount = 0,
}) => {
  const percentage = (stackedAmount / maxCap) * 100;
  return (
    <AuctionProgressBarStyled>
      <ProgressIndicator percentage={percentage} />
    </AuctionProgressBarStyled>
  );
};
