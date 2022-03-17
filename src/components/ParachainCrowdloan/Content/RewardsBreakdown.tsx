import { encodeAddress } from "@polkadot/util-crypto";
import BigNumber from "bignumber.js";
import { Box, Button, Spinner } from "grommet";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useWeb3 } from "../../Web3Provider";
import { useAuctionContext } from "../shared/context/AuctionContext";
import { useStakeFormContext } from "../shared/context/StakeFormContext";

import { PARACHAIN_NAME } from "../shared/const";
import { formatNumber } from "../shared/format";

import { TextSpan } from "../shared/TextSpan";
import { onBreakpoint } from "../shared/responsive";
import { ExternalLink } from "../../Links";
import {
  MIN_BASE_REWARD,
  REWARD_EARLY_BIRD_PERCENT,
  REWARD_LOYALTY_PERCENT,
  REWARD_REFERRAL_PERCENT,
  CLAIM_ACTIVE,
} from "../shared/config";
import { ClaimProps } from "../shared/useClaimRewards";

const RewardsBreakdownStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #f8f8f8;
  border-radius: 6px;
  padding: 24px;

  text-align: center;

  ${onBreakpoint("M")} {
    text-align: left;
  }
`;

const TextHeading2 = styled.span<{ color?: string }>`
  font-size: 20px;
  line-height: 25px;
  font-weight: 600;
  color: ${({ theme, color }) =>
    theme.global.colors[color || ""] || color || "black"};
`;

const TextLabel = styled.span`
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;

  color: #757575;
`;

const TextLearn = styled(ExternalLink)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;

  color: #000;
  &:hover {
    color: #000;
  }
`;

const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 1px;
  background: #757575;
`;

const CustomSpinner = styled(Spinner)<{ color?: string }>`
  height: 10px;
  width: 10px;
  display: inline-block;
  padding: 6px;
  margin-right: 8px;
  border-top-color: ${({ color }) => color || undefined};
`;

const SubscanLink = styled(ExternalLink)`
  color: #757575;
`;

type StatType = {
  min: BigNumber;
  cur: BigNumber;
};

type StatProps = {
  value?: StatType;
  label: string;
  color?: string;
};

type RewardValues = {
  min: string;
  cur: string;
};

type RewardDataResponse = {
  contributionAmount: string;
  baseRewardRate: RewardValues;
  baseReward: RewardValues;
  earlyBirdReward: RewardValues;
  referralReward: RewardValues;
  hasLoyaltyReward: boolean;
};

const rewardValuesToStatType = (reward: RewardValues): StatType => ({
  min: new BigNumber(reward.min),
  cur: new BigNumber(reward.cur),
});

const Stat: React.FC<StatProps> = ({ value, label, color }) => {
  const { crowdloanPhase } = useAuctionContext();

  const isAuctionEnded = crowdloanPhase === "ended";

  if (!isAuctionEnded && value?.cur?.isZero()) return null;

  const formattedVal =
    !value || value?.cur.isZero()
      ? "0"
      : isAuctionEnded
      ? formatNumber(value.cur, 1, false, true, true)
      : `${formatNumber(value.min, 1, false, true, true)} to ${formatNumber(
          value.cur,
          1,
          false,
          true,
          true
        )}`;
  return (
    <StatsItem>
      <TextHeading2 color={color}>
        {value ? formattedVal : <CustomSpinner color="brand" />} CFG
      </TextHeading2>
      <TextLabel>{label}</TextLabel>
    </StatsItem>
  );
};

interface RewardsBreakdownProps extends ClaimProps {}

export const RewardsBreakdown: React.FC<RewardsBreakdownProps> = (
  claimProps
) => {
  const { selectedAccount } = useWeb3();
  const [rewardsData, setRewardsData] = useState<RewardDataResponse>();

  const { dotAmount, referralCode } = useStakeFormContext();
  const { isEarlyBird, crowdloanPhase, baseRewardRate } = useAuctionContext();

  const [stakedAmount, setStakedAmount] = useState<string>();

  const [rewardStaking, setRewardStaking] = useState<StatType>();
  const [rewardEarlyBird, setRewardEarlyBird] = useState<StatType>();
  const [rewardReferral, setRewardReferral] = useState<StatType>();
  const [rewardLoyalty, setRewardLoyalty] = useState<StatType>();
  const [totalRewards, setTotalRewards] = useState<StatType>();

  const {
    claimRewards,
    isClaimingRewards,
    hasClaimedRewards,
    isLoadingClaimStatus,
  } = claimProps;

  const hasRewards = !new BigNumber(totalRewards?.cur || 0).isZero();
  const isAuctionEnded = crowdloanPhase === "ended";

  useEffect(() => {
    if (!rewardsData || !baseRewardRate) {
      return;
    }
    const amountFormNumber =
      Number.isNaN(parseFloat(dotAmount)) || isAuctionEnded
        ? 0
        : parseFloat(dotAmount);

    const earlyBirdFactor = isEarlyBird ? REWARD_EARLY_BIRD_PERCENT / 100 : 0;
    const referralFactor = referralCode ? REWARD_REFERRAL_PERCENT / 100 : 0;
    const loyaltyFactor = rewardsData.hasLoyaltyReward
      ? REWARD_LOYALTY_PERCENT / 100
      : 0;

    // convert values in BN
    const dotAmountForm = new BigNumber(amountFormNumber);
    const dotAmountData = new BigNumber(rewardsData.contributionAmount || 0);
    const totalAmount = dotAmountForm.plus(dotAmountData);

    const baseRewardData = rewardValuesToStatType(rewardsData.baseReward || 0);
    const earlyBirdRewardData = rewardValuesToStatType(
      rewardsData.earlyBirdReward || 0
    );
    const referralRewardData = rewardValuesToStatType(
      rewardsData.referralReward || 0
    );

    // calculate rewards
    const rewardCfgPerDot = {
      min: MIN_BASE_REWARD,
      cur: baseRewardRate,
    };

    const baseRewardForm = {
      min: dotAmountForm.times(rewardCfgPerDot.min),
      cur: dotAmountForm.times(rewardCfgPerDot.cur),
    };

    const sumRewards = (...stats: StatType[]): StatType =>
      stats.reduce(
        (acc, stat) => ({
          min: acc.min.plus(stat.min),
          cur: acc.cur.plus(stat.cur),
        }),
        {
          min: new BigNumber(0),
          cur: new BigNumber(0),
        }
      );

    const multReward = (stat: StatType, factor: number) => ({
      min: stat.min.times(factor),
      cur: stat.cur.times(factor),
    });

    const baseRewardTotal = sumRewards(baseRewardForm, baseRewardData);

    const earlyBirdRewardForm = multReward(baseRewardForm, earlyBirdFactor);

    const earlyBirdRewardTotal = sumRewards(
      earlyBirdRewardForm,
      earlyBirdRewardData
    );

    const referralRewardForm = multReward(baseRewardForm, referralFactor);
    const referralRewardTotal = sumRewards(
      referralRewardForm,
      referralRewardData
    );
    const loyaltyReward = multReward(baseRewardTotal, loyaltyFactor);

    const totalReward = sumRewards(
      baseRewardTotal,
      earlyBirdRewardTotal,
      referralRewardTotal,
      loyaltyReward
    );

    // show values
    setStakedAmount(totalAmount.toString());
    setRewardStaking(baseRewardTotal);
    setRewardEarlyBird(earlyBirdRewardTotal);
    setRewardReferral(referralRewardTotal);
    setRewardLoyalty(loyaltyReward);
    setTotalRewards(totalReward);
  }, [dotAmount, referralCode, rewardsData, baseRewardRate]);

  useEffect(() => {
    (async () => {
      if (!selectedAccount?.address) {
        return;
      }
      setStakedAmount(undefined);
      setRewardStaking(undefined);
      setRewardEarlyBird(undefined);
      setRewardReferral(undefined);
      setRewardLoyalty(undefined);
      setTotalRewards(undefined);

      const response = await fetch(
        "/.netlify/functions/getCentrifugeRewardData",
        {
          method: "POST",
          body: JSON.stringify({
            address: encodeAddress(selectedAccount.address, 0),
            parachain: PARACHAIN_NAME,
          }),
        }
      );

      const json = await response.json();

      setRewardsData(json);
    })();
  }, [selectedAccount?.address]);

  return (
    <RewardsBreakdownStyled>
      <div>
        <TextHeading2>
          {isAuctionEnded ? "Rewards" : "Estimated rewards"}
        </TextHeading2>
      </div>
      <StatsItem>
        <TextSpan
          css={`
            font-size: 20px;
            line-height: 32px;
            font-weight: 600;
            color: #000;
          `}
        >
          {stakedAmount ? (
            formatNumber(stakedAmount, 3, false, true, true)
          ) : (
            <CustomSpinner color="brand" />
          )}{" "}
          DOT
        </TextSpan>
        <TextLabel>Contributed amount</TextLabel>
      </StatsItem>

      {(hasRewards || isAuctionEnded) && (
        <>
          <Divider />

          <Stat value={rewardStaking} label="Base reward" />
          <Stat value={rewardEarlyBird} label="Early bird reward" />
          <Stat value={rewardReferral} label="Referral reward" />
          <Stat value={rewardLoyalty} label="Loyalty reward" />

          <Stat value={totalRewards} label="Total rewards" color="brand" />
        </>
      )}

      {selectedAccount?.address && (
        <>
          <Divider />
          <SubscanLink
            unstyled={0}
            href={`https://polkadot.subscan.io/account/${selectedAccount.address}`}
          >
            View account on Subscan
          </SubscanLink>
        </>
      )}

      {isAuctionEnded && CLAIM_ACTIVE && (
        <Box
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "16px",
            alignItems: "flex-start",
          }}
        >
          <Button
            primary
            label={
              isClaimingRewards ? (
                <CustomSpinner color="white" />
              ) : (
                "Claim rewards"
              )
            }
            onClick={claimRewards}
            disabled={isLoadingClaimStatus || hasClaimedRewards || !hasRewards}
            type="button"
          />

          <TextLearn
            unstyled={1}
            href="https://gov.centrifuge.io/t/how-to-claim-cfg-rewards-from-the-centrifuge-crowdloan-on-polkadot/3590"
          >
            Learn how to claim
          </TextLearn>
        </Box>
      )}
    </RewardsBreakdownStyled>
  );
};
