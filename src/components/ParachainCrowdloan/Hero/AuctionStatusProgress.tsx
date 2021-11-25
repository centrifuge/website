import React from "react";
import styled from "styled-components";
import { AuctionProgressBar } from "./AuctionProgressBar";
import { Spinner } from "grommet";
import { formatDOT } from "../shared/format";

const AuctionStatusProgressStyled = styled.div``;

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
  font-size: 24px;
  line-height: 32px;
`;

const TextLabel = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;

  margin-left: 8px;
`;

const CustomSpinner = styled(Spinner)`
  display: inline-block;
  height: 5px;
  width: 5px;
  padding: 7px;
  margin-top: 3px;
  margin-left: 2px;
`;

export const AuctionStatusProgress: React.FC<AuctionStatusProgressProps> = ({
  maxCap,
  stackedAmount,
  numContributions,
}) => {
  return (
    <AuctionStatusProgressStyled>
      <ProgressRow>
        <div>
          {numContributions != null ? (
            <TextValue>{numContributions.toLocaleString('en-US')}</TextValue>
          ) : (
            <CustomSpinner color="accent-1" />
          )}
          <TextLabel>contributions</TextLabel>
        </div>
        <div>
          {stackedAmount != null ? (
            <TextValue>{formatDOT(stackedAmount, 2, true)}</TextValue>
          ) : (
            <CustomSpinner color="accent-1" />
          )}
          <TextLabel>DOT staked</TextLabel>
        </div>
        <div>
          {maxCap != null ? (
            <TextValue>{formatDOT(maxCap, 0, true)}</TextValue>
            ) : (
            <CustomSpinner color="accent-1" />
          )}
          <TextLabel>DOT maximum cap</TextLabel>
        </div>
      </ProgressRow>
      <AuctionProgressBar maxCap={maxCap || 0} stackedAmount={stackedAmount || 0} />
    </AuctionStatusProgressStyled>
  );
};
