import React, { useEffect, useMemo, useState } from 'react';
import { encodeAddress } from '@polkadot/util-crypto';
import { Box, FormField, Select, Spinner, Text, ThemeContext } from 'grommet';
import { BigNumber } from 'bignumber.js';
import { FormDown, FormUp } from 'grommet-icons';

const formatAmount = value => {
  const number = new BigNumber(value);
  return number
    .dividedBy(10 ** 12)
    .decimalPlaces(3)
    .toFormat()
    .toString();
};

const truncateAddress = address => {
  const encodedAddress = encodeAddress(address, 2);
  const firstFifteen = encodedAddress.slice(0, 8);
  const lastFifteen = encodedAddress.slice(-2);

  return `${firstFifteen}...${lastFifteen}`;
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

export const Stats = ({ accounts, selectedAccount, setSelectedAccount }) => {
  const [contributionAmount, setContributionAmount] = useState();
  const [earlyBirdBonus, setEarlyBirdBonus] = useState();
  const [firstCrowdloanBonus, setFirstCrowdloanBonus] = useState();
  const [numberOfReferrals, setNumberOfReferrals] = useState();
  const [referralBonus, setReferralBonus] = useState();

  useEffect(
    () => {
      (async () => {
        if (selectedAccount?.address) {
          setContributionAmount();
          setEarlyBirdBonus();
          setFirstCrowdloanBonus();
          setNumberOfReferrals();
          setReferralBonus();

          const response = await fetch('/.netlify/functions/getRewardData', {
            method: 'POST',
            body: JSON.stringify({
              address: encodeAddress(selectedAccount.address, 2),
            }),
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
    [selectedAccount?.address],
  );

  const stakingReward = useMemo(
    () => {
      if (contributionAmount) {
        return new BigNumber(contributionAmount).multipliedBy(430);
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

  if (selectedAccount?.address) {
    return (
      <ThemeContext.Extend
        value={{
          select: {
            icons: {
              down: () => <FormDown color="white" />,
              up: () => <FormUp color="white" />,
            },
          },
        }}
      >
        <Box gap="medium">
          <Text size="16px" weight={600}>
            Your Contribution
          </Text>
          <FormField label="Kusama account">
            <Select
              children={account => (
                <Box pad="small" style={{ textAlign: 'left' }}>
                  <div>
                    {account.meta?.name} - {truncateAddress(account.address)}
                  </div>
                </Box>
              )}
              options={accounts}
              onChange={({ option }) => setSelectedAccount(option)}
              style={{ color: 'white' }}
              valueKey={'address'}
              valueLabel={
                selectedAccount?.address ? (
                  <Box pad="small" style={{ textAlign: 'left' }}>
                    <div>
                      {selectedAccount.meta?.name} -{' '}
                      {truncateAddress(selectedAccount?.address)}
                    </div>
                  </Box>
                ) : (
                  ''
                )
              }
              value={`${selectedAccount?.meta?.name} - ${
                selectedAccount?.address
              }`}
            />
          </FormField>
          <Stat amount={contributionAmount} label="Staked Amount" token="KSM" />
          <Stat amount={stakingReward} label="Staking Reward" token="AIR" />
          <Stat
            amount={earlyBirdReward}
            label="Early Bird Reward"
            token="AIR"
          />
          <Stat
            amount={referralBonus}
            label={
              numberOfReferrals !== undefined ? (
                `Referral Rewards (${
                  numberOfReferrals === 1
                    ? `${numberOfReferrals} referral`
                    : `${numberOfReferrals} referrals`
                })`
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
      </ThemeContext.Extend>
    );
  }

  return (
    <Box style={{ padding: '0 24px' }}>
      <Text size="16px" style={{ lineHeight: '28px' }} weight={600}>
        Can’t see your contribution?
      </Text>
      <Text size="16px" style={{ lineHeight: '28px' }}>
        Make sure the Polkadot.js extension already installed.
      </Text>
      <Text size="16px" style={{ lineHeight: '28px' }}>
        Authorize this page in the extension.
      </Text>
      <Text size="16px" style={{ lineHeight: '28px' }}>
        Make sure the account is visible and the use is allowed on any chain.
      </Text>
      <Text size="16px" style={{ lineHeight: '28px' }}>
        Refresh the page after changing settings in the extension.
      </Text>
    </Box>
  );
};
