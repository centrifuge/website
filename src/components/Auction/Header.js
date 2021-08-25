import React from 'react';
import { Box, Grid, Image, Text } from 'grommet';
import crowdloan_banner from '../../images/altair/crowdloan_banner.svg';
import twinkle from '../../images/altair/twinkle.svg';

export const Header = () => (
  <Box
    background={{
      image: `url('${crowdloan_banner}')`,
      size: 'cover',
      position: 'top',
    }}
    height="220px"
    gap="medium"
  >
    <Box align="center" style={{ paddingTop: '32px' }}>
      <Text size="xlarge" weight={900}>
        Support the Altair Parachain Auction.
      </Text>
      <Text size="xlarge" weight={900}>
        Earn AIR Tokens.
      </Text>
    </Box>
    <Box align="center">
      <Grid gap="large" columns={['auto', 'auto', 'auto']}>
        <Box style={{ flexDirection: 'row' }} align="center">
          <Image src={twinkle} width="28px" style={{ paddingRight: '6px' }} />
          <Text>Stake 1 KSM to earn 400 AIR</Text>
        </Box>
        <Box style={{ flexDirection: 'row' }} align="center">
          <Image src={twinkle} width="28px" style={{ paddingRight: '6px' }} />
          <Text>10% bonus for early birds</Text>
        </Box>
        <Box style={{ flexDirection: 'row' }} align="center">
          <Image src={twinkle} width="28px" style={{ paddingRight: '6px' }} />
          <Text>5% reward on referrals</Text>
        </Box>
      </Grid>
    </Box>
  </Box>
);
