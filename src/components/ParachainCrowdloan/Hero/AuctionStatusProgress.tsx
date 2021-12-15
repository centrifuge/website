import React from "react";
import styled from "styled-components";
import { AuctionProgressBar } from "./AuctionProgressBar";
import { formatDOT } from "../shared/format";
import { onBreakpoint } from "../shared/responsive";

type AuctionStatusProgressProps = {
  maxCap?: number;
  stackedAmount?: number;
  numContributions?: number;
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
  font-size: 16px;
  line-height: 16px;

  ${onBreakpoint("M")} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const TextLabel = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;

  ${onBreakpoint("M")} {
    font-size: 16px;
  }
`;

const FadeInDiv = styled.div<{ show: boolean }>`
  opacity: ${({ show }) => (show ? 1 : 0)};

  transition: opacity 800ms ease-out;

  display: flex;
  flex-direction: column;

  ${onBreakpoint("L")} {
    flex-direction: row;
    align-items: baseline;
    gap: 8px;
  }
`;

export const AuctionStatusProgress: React.FC<AuctionStatusProgressProps> = ({
  maxCap,
  stackedAmount,
  numContributions,
}) => {
  return (
    <div>
      <ProgressRow>
        <FadeInDiv show={numContributions != null}>
          <TextValue>
            {numContributions != null &&
              numContributions.toLocaleString("en-US")}
          </TextValue>
          <TextLabel>contributions</TextLabel>
        </FadeInDiv>
        <FadeInDiv show={stackedAmount != null}>
          <TextValue>
            {stackedAmount != null && formatDOT(stackedAmount, 2, true)}
          </TextValue>
          <TextLabel>DOT staked</TextLabel>
        </FadeInDiv>
        <FadeInDiv show={maxCap != null}>
          <TextValue>{maxCap != null && formatDOT(maxCap, 0, true)}</TextValue>
          <TextLabel>DOT soft cap</TextLabel>
        </FadeInDiv>
      </ProgressRow>
      <AuctionProgressBar maxCap={maxCap || 0} stackedAmount={stackedAmount} />
    </div>
  );
};
