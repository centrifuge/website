import React from 'react';
import { Box, Grid, Spinner, Text } from 'grommet';
import { BigNumber } from 'bignumber.js';

const formatAddress = address => {
  const front = address.slice(0, 8);
  const back = address.slice(-2);

  return `${front}..${back}`;
};

const formatKSM = value =>
  `${new BigNumber(value).dividedBy(10 ** 12).toFormat(0)} KSM`;

export const ContributionLeaderboard = ({ topContributors }) => (
  <>
    <Text weight={600} size="16px" style={{ paddingBottom: '8px' }}>
      Top Contributors
    </Text>
    {topContributors.length ? (
      topContributors.map((datum, index) => (
        <Grid columns={['24px', '120px', '90px']} style={{ paddingTop: '8px' }}>
          <Text weight={500}>{index + 1}</Text>
          <Text weight={500}>{formatAddress(datum.account)}</Text>
          <Text color="altair" weight={600} textAlign="end">
            {formatKSM(datum.amount)}
          </Text>
        </Grid>
      ))
    ) : (
      <Box
        style={{
          alignItems: 'center',
          height: '128px',
          justifyContent: 'center',
        }}
      >
        <Spinner color="white" />
      </Box>
    )}
  </>
);
