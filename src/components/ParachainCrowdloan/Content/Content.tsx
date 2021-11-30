import { Box } from "grommet";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { encodeAddress } from "@polkadot/util-crypto";
import { ResponsivePlayer } from "../../News";
import { useWeb3 } from "../../Web3Provider";
import { useCountdownContext } from "../CountdownContext";
import { mediaGreaterThan } from "../shared/media";
import { BlackInfoBoxList } from "./BlackInfoBoxList";
import { ExtensionMissing } from "./ExtensionMissing";
import { GetReady } from "./GetReady";
import { ReferYourFriends } from "./ReferYourFriends";
import { StakeForm } from "./StakeForm";
import { ThanksForContribution } from "./ThanksForContribution";
import { TopContributors } from "./TopContributors";
import { TopReferrers } from "./TopReferrers";
import { YourContribution } from "./YourContribution";
import { PARACHAIN_NAME } from "../shared/const";

const ContributeStyled = styled.div`
  color: #000;
  background-color: #fff;

  display: flex;
  flex-direction: column;

  padding: 20px;

  ${mediaGreaterThan("small")} {
    flex-direction: row;
    justify-content: space-around;
    padding: 16px;
    gap: 16px;
  }

  ${mediaGreaterThan("medium")} {
    padding: 38px;
    gap: 48px;
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

  ${mediaGreaterThan("small")} {
    padding-top: 26px;
  }
`;

const CentralCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  min-width: 280px;
  ${mediaGreaterThan("small")} {
    max-width: 476px;
    flex-grow: 1;
    padding-top: 12px;
  }
`;

const RightCol = styled.div`
  min-width: initial;
  ${mediaGreaterThan("small")} {
    min-width: 180px;
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
  hash: string;
  amount: string;
  error?: string;
};

export const Contribute = () => {
  const { isAuctionStarted, isAuctionEnded } = useCountdownContext();
  const { isWeb3Injected, selectedAccount } = useWeb3();

  const [contributionOutcome, setContributionOutcome] = useState<
    ContributionOutcome
  >();
  const [referralCode, setReferralCode] = useState<string>("");

  // create referral code after the contribution has been successful
  useEffect(() => {
    (async () => {
      try {
        if (!contributionOutcome?.hash || !selectedAccount?.address) {
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
        setReferralCode(json.referralCode);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [contributionOutcome?.hash, selectedAccount?.address]);

  return (
    <ContributeStyled>
      <LeftCol>
        {isAuctionStarted && (
          <Box margin="0 0 48px 0">
            <TopReferrers />
          </Box>
        )}
        {isAuctionEnded && <TopContributors />}
        {!isAuctionEnded && <BlackInfoBoxList />}
      </LeftCol>

      <CentralCol>
        {!isWeb3Injected && <ExtensionMissing />}

        {contributionOutcome?.hash && (
          <ThanksForContribution
            amount={contributionOutcome.amount}
            claimHash={contributionOutcome.hash}
          />
        )}

        {referralCode && <ReferYourFriends referralCode={referralCode} />}

        {isAuctionStarted && !isAuctionEnded && (
          <StakeForm setContributionOutcome={setContributionOutcome} />
        )}

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
      </CentralCol>

      <RightCol>{isAuctionStarted && <YourContribution />}</RightCol>
    </ContributeStyled>
  );
};
