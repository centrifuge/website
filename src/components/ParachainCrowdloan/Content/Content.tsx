import React from "react";
import styled from "styled-components";
import { ResponsivePlayer } from "../../News";
import { useWeb3 } from "../../Web3Provider";
import { useCountdownContext } from "../CountdownContext";
import { mediaGreaterThan } from "../shared/media";
import { BlackInfoBoxList } from "./BlackInfoBoxList";
import { ExtensionMissing } from "./ExtensionMissing";
import { GetReady } from "./GetReady";
import { TopContributors } from "./TopContributors";
import { TopReferrers } from "./TopReferrers";
import { YourContribution } from "./YourContribution";

const ContributeStyled = styled.div`
  color: #000;
  background-color: #fff;

  display: flex;
  flex-direction: column;

  padding: 8px;

  ${mediaGreaterThan("small")} {
    flex-direction: row;
    justify-content: space-around;
    padding: 48px;
  }
`;

const GetReadyWrapper = styled.div`
  color: #000;
  background-color: #fff;

  padding: 24px 8px;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const LearnHowToStake = styled.div``;

const TextHeading1 = styled.div`
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;

  margin-bottom: 24px;
`;

export const Contribute = () => {
  const { isAuctionStarted, isAuctionEnded } = useCountdownContext();
  const { isWeb3Injected } = useWeb3();

  return (
    <ContributeStyled>
      <LeftCol>
        {isAuctionStarted && <TopReferrers />}
        {isAuctionEnded && <TopContributors />}
        {!isAuctionEnded && <BlackInfoBoxList />}
      </LeftCol>

      <div style={{ maxWidth: 776 }}>
        {!isWeb3Injected && <ExtensionMissing />}
        <YourContribution />
        {!isAuctionStarted && (
          <>
            <GetReadyWrapper>
              <GetReady />
            </GetReadyWrapper>
            <LearnHowToStake>
              <TextHeading1>Learn how to stake DOT</TextHeading1>
              <ResponsivePlayer videoId="se8mBXHCV-w" />
            </LearnHowToStake>
          </>
        )}
      </div>
    </ContributeStyled>
  );
};
