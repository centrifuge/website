import React, { useEffect, useMemo, useState } from 'react';
import { encodeAddress } from '@polkadot/util-crypto';
import { Box, Spinner, Text } from 'grommet';
import { BigNumber } from 'bignumber.js';

const formatAmount = value => {
  const number = new BigNumber(value);
  return number
    .dividedBy(10 ** 12)
    .decimalPlaces(3)
    .toFormat()
    .toString();
};

const Stat = ({ amount, color, label, token }) => (
  <Box>
    <Box direction="row">
      {amount ? (
        <Text color={color} size="32px" weight={600}>
          {formatAmount(amount)}
        </Text>
      ) : (
        <Spinner
          color="altair"
          style={{
            padding: '6px',
            margin: '6px',
            height: '10px',
            width: '10px',
          }}
        />
      )}
      <Text
        alignSelf="end"
        color={color}
        size="20px"
        style={{ paddingBottom: '4px', paddingLeft: '8px' }}
        weight={600}
      >
        {token}
      </Text>
    </Box>
    <Box>
      <Text color={color} weight={500}>
        {label}
      </Text>
    </Box>
  </Box>
);

export const Stats = ({ address }) => {
  const [contributionAmount, setContributionAmount] = useState();
  const [earlyBirdBonus, setEarlyBirdBonus] = useState();
  const [firstCrowdloanBonus, setFirstCrowdloanBonus] = useState();
  const [numberOfReferrals, setNumberOfReferrals] = useState();
  const [referralBonus, setReferralBonus] = useState();

  useEffect(
    () => {
      (async () => {
        if (address) {
          setContributionAmount();
          setEarlyBirdBonus();
          setFirstCrowdloanBonus();
          setNumberOfReferrals();
          setReferralBonus();

          const response = await fetch('/.netlify/functions/getRewardData', {
            method: 'POST',
            body: JSON.stringify({ address: encodeAddress(address, 2) }),
          });

          const json = await response.json();

          setContributionAmount(json.contributionAmount);
          setEarlyBirdBonus(json.earlyBirdBonus);
          setFirstCrowdloanBonus(json.firstCrowdloanBonus);
          setNumberOfReferrals(json.numberOfReferrals);
          setReferralBonus(json.referralBonus);
        }
      })();
    },
    [address],
  );

  const stakingReward = useMemo(
    () => {
      if (contributionAmount) {
        return new BigNumber(contributionAmount).multipliedBy(400);
      }
    },
    [contributionAmount],
  );

  const earlyBirdReward = useMemo(
    () => {
      if (earlyBirdBonus && firstCrowdloanBonus) {
        return new BigNumber(earlyBirdBonus).plus(firstCrowdloanBonus);
      }
    },
    [earlyBirdBonus, firstCrowdloanBonus],
  );

  const totalRewards = useMemo(
    () => {
      if (earlyBirdReward && referralBonus && stakingReward) {
        return stakingReward.plus(earlyBirdReward).plus(referralBonus);
      }
    },
    [earlyBirdReward, referralBonus, stakingReward],
  );

  return (
    <Box gap="medium" width="250px" style={{ paddingLeft: '24px' }}>
      <Text size="16px" weight={600}>
        Your Contribution
      </Text>
      <Stat amount={contributionAmount} label="Staked Amount" token="KSM" />
      <Stat amount={stakingReward} label="Staking Reward" token="AIR" />
      <Stat amount={earlyBirdReward} label="Early Bird Reward" token="AIR" />
      <Stat
        amount={referralBonus}
        label={
          numberOfReferrals !== undefined ? (
            `Referral Rewards (${numberOfReferrals} referrals)`
          ) : (
            <Spinner
              color="white"
              style={{
                padding: '6px',
                margin: '6px',
                height: '10px',
                width: '10px',
              }}
            />
          )
        }
        token="AIR"
      />
      <Stat
        amount={totalRewards}
        color="altair"
        label="Total Rewards"
        token="AIR"
      />
    </Box>
  );
};
