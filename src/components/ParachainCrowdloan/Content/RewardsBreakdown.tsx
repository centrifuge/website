import { encodeAddress } from "@polkadot/util-crypto";
import BigNumber from "bignumber.js";
import { Spinner } from "grommet";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useWeb3 } from "../../Web3Provider";
import { useAuctionContext } from "../shared/context/AuctionContext";
import { useStakeFormContext } from "../shared/context/StakeFormContext";

import { CFG_PLANCK, DOT_PLANCK, PARACHAIN_NAME } from "../shared/const";
import { formatCFG, formatDOT } from "../shared/format";

import { TextSpan } from "../shared/TextSpan";
import { onBreakpoint } from "../shared/responsive";
import { ExternalLink } from "../../Links";
import {
  MIN_BASE_REWARD,
  REWARD_EARLY_BIRD_PERCENT,
  REWARD_LOYALTY_PERCENT,
  REWARD_REFERRAL_PERCENT,
} from "../shared/config";

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

const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 1px;
  background: #757575;
`;

const CustomSpinner = styled(Spinner)`
  height: 10px;
  width: 10px;
  display: inline-block;
  padding: 6px;
  margin-right: 8px;
`;

const SubscanLink = styled(ExternalLink)`
  color: #757575;
`;

type StatType = {
  min: string;
  current: string;
};

type StatProps = {
  value?: StatType;
  label: string;
  color?: string;
};
const Stat: React.FC<StatProps> = ({ value, label, color }) => {
  const { crowdloanPhase } = useAuctionContext();

  const isAuctionEnded = crowdloanPhase === "ended";

  const currentBn = new BigNumber(value?.current || 0);

  if (!isAuctionEnded && currentBn.isZero()) return null;

  const formattedVal =
    !value || currentBn.isZero()
      ? "0"
      : `${formatCFG(value.min, 1, false, true, true)} to ${formatCFG(
          value.current,
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

type RewardDataResponse = {
  contributionAmount?: string;
  earlyBirdBonus?: string;
  firstCrowdloanBonus?: string;
  numberOfReferrals?: string;
  referralBonus?: string;
  isFirst250PrevCrwdloan?: boolean;
};

export const RewardsBreakdown: React.FC<{}> = () => {
  const { selectedAccount } = useWeb3();
  const [rewardsData, setRewardsData] = useState<RewardDataResponse>({});

  const { dotAmount, referralCode } = useStakeFormContext();
  const { isEarlyBird, crowdloanPhase, baseRewardRate } = useAuctionContext();

  const [stakedAmount, setStakedAmount] = useState<string>();

  const [rewardStaking, setRewardStaking] = useState<StatType>();
  const [rewardEarlyBird, setRewardEarlyBird] = useState<StatType>();
  const [rewardReferral, setRewardReferral] = useState<StatType>();
  const [rewardLoyalty, setRewardLoyalty] = useState<StatType>();
  const [totalRewards, setTotalRewards] = useState<StatType>();

  const hasRewards = !new BigNumber(totalRewards?.current || 0).isZero();
  const isAuctionEnded = crowdloanPhase === "ended";

  useEffect(() => {
    if (!rewardsData || !baseRewardRate) {
      return;
    }
    const curAmountNum =
      Number.isNaN(parseFloat(dotAmount)) || isAuctionEnded
        ? 0
        : parseFloat(dotAmount);

    const earlyBirdFactor = isEarlyBird ? REWARD_EARLY_BIRD_PERCENT / 100 : 0;
    const referralFactor = referralCode ? REWARD_REFERRAL_PERCENT / 100 : 0;
    const loyaltyFactor = rewardsData.isFirst250PrevCrwdloan
      ? REWARD_LOYALTY_PERCENT / 100
      : 0;

    // convert values in BN
    const curAmount = new BigNumber(curAmountNum * DOT_PLANCK);
    const dataAmount = new BigNumber(rewardsData.contributionAmount || 0);
    const totalAmount = curAmount.plus(dataAmount);
    const dataEarlyBirdBonus = new BigNumber(rewardsData.earlyBirdBonus || 0);
    const dataReferralBonus = new BigNumber(rewardsData.referralBonus || 0);

    // calculate rewards
    const curStakingBonus = curAmount
      .div(DOT_PLANCK) // to DOT
      .times(baseRewardRate)
      .times(CFG_PLANCK); // to CFG
    const minStakingBonus = curAmount
      .div(DOT_PLANCK) // to DOT
      .times(MIN_BASE_REWARD)
      .times(CFG_PLANCK); // to CFG
    const dataStakingBonus = dataAmount
      .div(DOT_PLANCK) // to DOT
      .times(baseRewardRate)
      .times(CFG_PLANCK); // to CFG

    const totalStakingBonus = curStakingBonus.plus(dataStakingBonus);
    const totalMinStakingBonus = minStakingBonus.plus(dataStakingBonus);

    const curEarlyBirdBonus = curStakingBonus.times(earlyBirdFactor);
    const minEarlyBirdBonus = minStakingBonus.times(earlyBirdFactor);
    const totalEarlyBirdBonus = curEarlyBirdBonus.plus(dataEarlyBirdBonus);
    const totalMinEarlyBirdBonus = minEarlyBirdBonus.plus(dataEarlyBirdBonus);

    const curReferralBonus = curStakingBonus.times(referralFactor);
    const minReferralBonus = minStakingBonus.times(referralFactor);
    const totalReferralBonus = curReferralBonus.plus(dataReferralBonus);
    const totalMinReferralBonus = minReferralBonus.plus(dataReferralBonus);

    const totalLoyaltyBonus = totalStakingBonus.times(loyaltyFactor);
    const totalMinLoyaltyBonus = totalMinStakingBonus.times(loyaltyFactor);

    const totalBonus = totalStakingBonus
      .plus(totalEarlyBirdBonus)
      .plus(totalReferralBonus)
      .plus(totalLoyaltyBonus);

    const totalMinBonus = totalMinStakingBonus
      .plus(totalMinEarlyBirdBonus)
      .plus(totalMinReferralBonus)
      .plus(totalMinLoyaltyBonus);

    // show values
    setStakedAmount(totalAmount.toString());
    setRewardStaking({
      current: totalStakingBonus.toString(),
      min: totalMinStakingBonus.toString(),
    });
    setRewardEarlyBird({
      current: totalEarlyBirdBonus.toFixed(),
      min: totalMinEarlyBirdBonus.toString(),
    });
    setRewardReferral({
      current: totalReferralBonus.toString(),
      min: totalMinReferralBonus.toString(),
    });
    setRewardLoyalty({
      current: totalLoyaltyBonus.toString(),
      min: totalMinLoyaltyBonus.toString(),
    });
    setTotalRewards({
      current: totalBonus.toString(),
      min: totalMinBonus.toString(),
    });
  }, [dotAmount, referralCode, rewardsData, baseRewardRate]);

  useEffect(() => {
    (async () => {
      if (!selectedAccount?.address) {
        return;
      }
      const response = await fetch("/.netlify/functions/getRewardData", {
        method: "POST",
        body: JSON.stringify({
          address: encodeAddress(selectedAccount.address, 2),
          parachain: PARACHAIN_NAME,
        }),
      });

      const json = await response.json();

      setRewardsData(json);
    })();
  }, [selectedAccount?.address]);

  console.log(rewardStaking);

  return (
    <RewardsBreakdownStyled>
      <div>
        <TextHeading2>Estimated rewards</TextHeading2>
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
            formatDOT(stakedAmount, 3, false, true, true)
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
    </RewardsBreakdownStyled>
  );
};
