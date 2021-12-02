import { Box } from "grommet";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { encodeAddress } from "@polkadot/util-crypto";
import { ResponsivePlayer } from "../../News";
import { useWeb3 } from "../../Web3Provider";
import { useAuctionContext } from "../shared/context/AuctionContext";
import { useStakeFormContext } from "../shared/context/StakeFormContext";

import { InfoBoxList } from "./InfoBoxList";
import { ExtensionMissing } from "./ExtensionMissing";
import { GetReady } from "./GetReady";
import { ReferYourFriends } from "./ReferYourFriends";
import { StakeForm } from "./StakeForm";
import { ThanksForContribution } from "./ThanksForContribution";
import { TopContributors } from "./TopContributors";
import { TopReferrers } from "./TopReferrers";
import { YourContribution } from "./YourContribution";
import { PARACHAIN_NAME } from "../shared/const";
import { Container } from "../shared/Container";
import { onBreakpoint } from "../shared/responsive";

const ContributeStyled = styled.div`
  color: #000;
  background-color: #fff;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  padding: 20px 0;

  ${onBreakpoint("M")} {
    padding: 30px 0;
  }
`;

const GetReadyWrapper = styled.div`
  color: #000;
  background-color: #fff;

  padding: 24px 8px;
`;

const LeftCol = styled.div`
  grid-column: 1 / span 12;
  display: flex;
  flex-direction: column;

  ${onBreakpoint("L")} {
    grid-column: 1 / span 3;
    padding-top: 26px;
  }
`;

const ContribSection = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 16px;

  grid-column: 1 / span 12;

  ${onBreakpoint("L")} {
    grid-column: 5 / span 8;
  }
`;

const CentralCol = styled.div`
  grid-column: 1 / span 12;
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  margin-top: 8px;

  ${onBreakpoint("M")} {
    grid-column: 1 / span 5;
  }
`;

const RightCol = styled.div`
  display: grid;
  justify-content: stretch;

  grid-column: 1 / span 12;
  min-width: initial;

  ${onBreakpoint("M")} {
    grid-column: 6 / span 3;
  }
`;

const BeforeAuction = styled.div`
  grid-column: 1 / span 12;

  ${onBreakpoint("L")} {
    grid-column: 1 / span 5;
  }
`;

const LearnHowToStake = styled.div``;

const TextHeading1 = styled.div`
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;

  margin-bottom: 24px;
`;

export type ContributionOutcome = {
  amount: string;
};

export const Content = () => {
  const { isAuctionStarted, isAuctionEnded } = useAuctionContext();
  const { contribHash, dotAmount } = useStakeFormContext();
  const { isWeb3Injected, selectedAccount } = useWeb3();
  const [newReferralCode, setNewReferralCode] = useState<string>("");

  // create referral code after the contribution has been successful
  useEffect(() => {
    (async () => {
      try {
        if (!contribHash || !selectedAccount?.address) {
          return;
        }
        const response = await fetch("/.netlify/functions/createReferralCode", {
          method: "POST",
          body: JSON.stringify({
            referrerAddress: encodeAddress(selectedAccount.address, 2),
            parachain: PARACHAIN_NAME,
          }),
        });

        const json = await response.json();
        setNewReferralCode(json.referralCode);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [contribHash, selectedAccount?.address]);

  return (
    <Container>
      <ContributeStyled>
        <LeftCol>
          {isAuctionStarted && (
            <Box margin="0 0 48px 0">
              <TopReferrers />
            </Box>
          )}
          {isAuctionEnded && <TopContributors />}
          {!isAuctionEnded && <InfoBoxList />}
        </LeftCol>

        <ContribSection>
          {!isAuctionStarted && (
            <BeforeAuction>
              <GetReadyWrapper>
                <GetReady />
              </GetReadyWrapper>
              <LearnHowToStake>
                <TextHeading1>Learn how to stake DOT</TextHeading1>
                <ResponsivePlayer videoId="se8mBXHCV-w" />
              </LearnHowToStake>
            </BeforeAuction>
          )}
          <CentralCol>
            {!isWeb3Injected && <ExtensionMissing />}

            {contribHash && (
              <ThanksForContribution
                amount={dotAmount}
                claimHash={contribHash}
              />
            )}

            {newReferralCode && (
              <ReferYourFriends referralCode={newReferralCode} />
            )}

            {isAuctionStarted && !isAuctionEnded && <StakeForm />}
            {isAuctionEnded && <YourContribution />}
          </CentralCol>
          <RightCol>
            {isAuctionStarted && !isAuctionEnded && <YourContribution />}
          </RightCol>
        </ContribSection>
      </ContributeStyled>
    </Container>
  );
};
