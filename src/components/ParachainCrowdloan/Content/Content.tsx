import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { encodeAddress } from "@polkadot/util-crypto";
import { ResponsivePlayer } from "../../News";
import { useWeb3 } from "../../Web3Provider";
import { useAuctionContext } from "../shared/context/AuctionContext";
import { useStakeFormContext } from "../shared/context/StakeFormContext";

import { InfoBoxList } from "./InfoBoxList";
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
import { WarningInsufficientFunds } from "./WarningInsufficientFunds";
import { WarningExistentialDeposit } from "./WarningExistentialDeposit";
import { formatDOT } from "../shared/format";
import { FormTitle } from "./FormTitle";
import { WarningWalletNotConnected } from "./WarningWalletNotConnected";
import { WarningExtensionNotAuthorized } from "./WarningExtensionNotAuthorized";
import { WarningExtensionMissing } from "./WarningExtensionMissing";
import { VIDEO_ID } from "../shared/config";

const ContributeStyled = styled.div`
  color: #000;
  background-color: #fff;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  padding: 20px 0;

  ${onBreakpoint("M")} {
    padding: 64px 0;
  }
`;

const GetReadyWrapper = styled.div`
  color: #000;
  background-color: #fff;

  padding: 24px 0;
`;

const LeftCol = styled.div`
  grid-column: 1 / span 12;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${onBreakpoint("L")} {
    grid-column: 1 / span 3;
    min-width: 256px;
    max-width: 256px;
  }
`;

const ContribSection = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 16px;
  align-items: flex-start;

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
  const { isAuctionStarted, crowdloanPhase } = useAuctionContext();
  const { contribHash, dotAmount, warning, gasFee } = useStakeFormContext();
  const { isWeb3Injected, selectedAccount, accounts } = useWeb3();
  const [newReferralCode, setNewReferralCode] = useState<string>("");

  const isAuctionEnded = crowdloanPhase === "ended";

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
          {!isAuctionEnded && <InfoBoxList />}
          {crowdloanPhase !== "notStarted" && <TopReferrers />}
          {isAuctionEnded && <TopContributors />}
        </LeftCol>

        <ContribSection>
          {crowdloanPhase === "notStarted" && (
            <BeforeAuction>
              <GetReadyWrapper>
                <GetReady />
              </GetReadyWrapper>
              {VIDEO_ID && (
                <LearnHowToStake>
                  <TextHeading1>Learn how to stake DOT</TextHeading1>
                  <ResponsivePlayer videoId={VIDEO_ID} />
                </LearnHowToStake>
              )}
            </BeforeAuction>
          )}
          <CentralCol>
            {!isWeb3Injected && <WarningExtensionMissing />}

            {contribHash && (
              <ThanksForContribution
                amount={dotAmount}
                claimHash={contribHash}
              />
            )}

            {newReferralCode && (
              <ReferYourFriends referralCode={newReferralCode} />
            )}

            {isWeb3Injected && isAuctionStarted && !isAuctionEnded && (
              <>
                <FormTitle margin="8px 0 0">Contribute</FormTitle>
                {warning === "insufficientFunds" && (
                  <WarningInsufficientFunds
                    gasFee={formatDOT(gasFee || 0, 18)}
                  />
                )}
                {warning === "existentialDeposit" && (
                  <WarningExistentialDeposit />
                )}
                {!isWeb3Injected && !selectedAccount?.address && (
                  <WarningWalletNotConnected />
                )}
                {isWeb3Injected && !accounts?.length && (
                  <WarningExtensionNotAuthorized />
                )}
                <StakeForm />
              </>
            )}
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
