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
import { RewardsBreakdown } from "./RewardsBreakdown";
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
import { FloatingDismissable } from "../shared/FloatingDismissable";

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
  }
`;

const ContribSection = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 16px;
  align-items: flex-start;

  grid-column: 1 / span 12;

  ${onBreakpoint("L")} {
    grid-column: 4 / span 9;
  }
`;

const CentralCol = styled.div`
  grid-column: 1 / span 12;
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;

  ${onBreakpoint("M")} {
    grid-column: 1 / span 6;
    max-width: 393px;
    justify-self: center;
  }
`;

const RightCol = styled.div`
  display: grid;
  justify-content: stretch;

  grid-column: 1 / span 12;
  min-width: initial;

  ${onBreakpoint("M")} {
    grid-column: 7 / span 3;
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
            referrerAddress: encodeAddress(selectedAccount.address, 0),
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

  useEffect(() => {
    (async () => {
      try {
        if (!selectedAccount?.address) {
          return;
        }
        const response = await fetch(
          "/.netlify/functions/getExistingReferralCode",
          {
            method: "POST",
            body: JSON.stringify({
              referrerAddress: encodeAddress(selectedAccount.address, 0),
              parachain: PARACHAIN_NAME,
            }),
          }
        );

        if (response.ok) {
          const json = await response.json();
          setNewReferralCode(json.referralCode);
        } else {
          setNewReferralCode("");
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [selectedAccount?.address]);

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
                  <TextHeading1>Learn how to contribute</TextHeading1>
                  <ResponsivePlayer videoId={VIDEO_ID} />
                </LearnHowToStake>
              )}
            </BeforeAuction>
          )}
          {crowdloanPhase !== "notStarted" && crowdloanPhase !== "ended" && (
            <FloatingDismissable storageKey={VIDEO_ID}>
              <ResponsivePlayer videoId={VIDEO_ID} />
            </FloatingDismissable>
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
                {warning === "insufficientFunds" && !contribHash && (
                  <WarningInsufficientFunds
                    gasFee={formatDOT(gasFee || 0, 18)}
                  />
                )}
                {warning === "existentialDeposit" && !contribHash && (
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
            {isAuctionEnded && <RewardsBreakdown />}
          </CentralCol>
          <RightCol>
            {isAuctionStarted && !isAuctionEnded && <RewardsBreakdown />}
          </RightCol>
        </ContribSection>
      </ContributeStyled>
    </Container>
  );
};
