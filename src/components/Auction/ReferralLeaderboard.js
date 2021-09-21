import React from 'react';
import { Box, Grid, Spinner, Text } from 'grommet';

const formatAddress = address => {
  const front = address.slice(0, 8);
  const back = address.slice(-2);

  return `${front}..${back}`;
};

export const ReferralLeaderboard = ({ topReferrers }) => (
  <Box style={{ paddingLeft: '24px' }}>
    <Text weight={600} size="16px" style={{ paddingBottom: '8px' }}>
      Top Referrers
    </Text>
    {topReferrers.length ? (
      topReferrers.map((datum, index) => (
        <Grid columns={['24px', '100px', '90px']} style={{ paddingTop: '8px' }}>
          <Text weight={500}>{index + 1}</Text>
          <Text weight={500}>{formatAddress(datum.account)}</Text>
          <Text color="altair" weight={600} textAlign="end">
            {datum.numberOfTimesUsed}
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
  </Box>
);
