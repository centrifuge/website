import { Spinner } from "grommet";
import React from "react";
import styled from "styled-components";

const AuctionProgressBarStyled = styled.div`
  position: relative;
  height: 24px;
  background: #fff;

  border-radius: 16px;
  overflow: hidden;
`;

const ProgressIndicator = styled.div<{ percentage: number }>`
  position: absolute;
  height: 100%;
  background: ${({ theme }) => theme.global.colors.centrifugeOrange};

  width: ${({ percentage }) => percentage}%;

  transition: width 800ms ease-out;
`;

const Centre = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const CustomSpinner = styled(Spinner)`
  display: inline-block;
  height: 5px;
  width: 5px;
  padding: 7px;
  margin-top: 3px;
  margin-left: 2px;
`;

type AuctionProgressBarProps = {
  maxCap: number;
  stackedAmount?: number;
};

export const AuctionProgressBar: React.FC<AuctionProgressBarProps> = ({
  maxCap = 200000,
  stackedAmount,
}) => {
  const isLoading = stackedAmount == null;
  const percentage = isLoading ? 0 : (stackedAmount / maxCap) * 100;
  return (
    <AuctionProgressBarStyled>
      <ProgressIndicator percentage={Math.max(percentage, 2)} />
      <Centre>
        {isLoading && <CustomSpinner size="3px" color="accent-1" />}
      </Centre>
    </AuctionProgressBarStyled>
  );
};
