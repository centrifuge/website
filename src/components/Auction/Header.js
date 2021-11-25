import React, { useEffect, useState } from 'react';
import { hexToBn } from '@polkadot/util';
import { Box, Grid, Image, Text } from 'grommet';
import { HeaderPill } from './HeaderPill';
import crowdloan_banner from '../../images/altair/crowdloan_banner.svg';
import twinkle from '../../images/altair/twinkle.svg';

export const Header = ({ api }) => {
  const [ksm, setKsm] = useState('');
  const [contributions, setContributions] = useState('');

  useEffect(
    () => {
      if (api) {
        (async () => {
          const funds = await api.query.crowdloan.funds(2088);

          const totalKSMContributed = hexToBn(funds.toJSON().raised.toString());

          const ksmInteger = parseInt(
            totalKSMContributed / 10 ** 12,
          ).toLocaleString('en-US');

          setKsm(ksmInteger);
        })();
      }
    },
    [api],
  );

  useEffect(() => {
    (async () => {
      const response = await fetch(
        '/.netlify/functions/getNumberOfContributions?parachain=altair',
      );

      const json = await response.json();

      setContributions(json.numberOfContributions.toLocaleString('en-US'));
    })();
  }, []);

  return (
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
      <Box
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          columnGap: '24px',
        }}
      >
        <HeaderPill label="KSM raised" value={ksm} />
        <HeaderPill label="contributions" value={contributions} />
      </Box>
      <Box align="center">
        <Grid gap="large" columns={['auto', 'auto', 'auto']}>
          <Box style={{ flexDirection: 'row' }} align="center">
            <Image src={twinkle} width="28px" style={{ paddingRight: '6px' }} />
            <Text>Stake 1 KSM to earn 430 AIR</Text>
          </Box>
          <Box style={{ flexDirection: 'row' }} align="center">
            <Image src={twinkle} width="28px" style={{ paddingRight: '6px' }} />
            <Text>10% rewards increase if cap is reached</Text>
          </Box>
          <Box style={{ flexDirection: 'row' }} align="center">
            <Image src={twinkle} width="28px" style={{ paddingRight: '6px' }} />
            <Text>5% reward on referrals</Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
