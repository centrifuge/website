import React, { useEffect, useState } from 'react';
import { Box, Grid, Spinner, Text } from 'grommet';
import { Stats } from './Stats';
import { ReferralLeaderboard } from './ReferralLeaderboard';
import { JoinWaitlist } from './JoinWaitlist';
import { ContributionLeaderboard } from './ContributionLeaderboard';
import crowdloan_banner from '../../images/altair/crowdloan_banner.svg';

const KSM = '187.84K';
const CONTRIBUTIONS = '18,342';

const KUSAMA_GENESIS_HASH =
  '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe';

export const Crowdloan = () => {
  /*
   * have to do this since Gatsby tries to SSR but the @polkadot/extension-dapp library
   * tries to reference `window` which is not available on the server-side
   */
  let polkadot;
  let web3Accounts;
  let web3Enable;

  try {
    polkadot = require('@polkadot/extension-dapp');
    web3Accounts = polkadot.web3Accounts;
    web3Enable = polkadot.web3Enable;
  } catch (polkadotError) {
    console.error(polkadotError);
  }

  const [selectedAccount, setSelectedAccount] = useState({});
  const [topContributors, setTopContributors] = useState([]);
  const [topReferrers, setTopReferrers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('/.netlify/functions/getTopContributors', {
        method: 'POST',
        body: JSON.stringify({ amount: 5 }),
      });

      const json = await response.json();

      setTopContributors(json);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch('/.netlify/functions/getTopReferrers', {
        method: 'POST',
        body: JSON.stringify({ amount: 5 }),
      });

      const json = await response.json();

      setTopReferrers(json);
    })();
  }, []);

  useEffect(
    () => {
      setLoading(true);
      (async () => {
        await web3Enable('Altair Auction');
        const allAccounts = await web3Accounts();

        const kusamaAccounts = allAccounts.filter(
          account =>
            account.meta.genesisHash === KUSAMA_GENESIS_HASH ||
            account.meta.genesisHash === '' ||
            account.meta.genesisHash === null,
        );

        setAccounts(kusamaAccounts);
        setSelectedAccount(kusamaAccounts[0]);
        setLoading(false);
      })();
    },
    [setSelectedAccount, web3Accounts],
  );

  return (
    <Box background="black">
      <Box
        background={{
          image: `url('${crowdloan_banner}')`,
          size: 'cover',
          position: 'top',
        }}
        height="220px"
        style={{ justifyContent: 'center' }}
      >
        <Text
          size="16px"
          textAlign="center"
          weight={500}
          style={{ paddingBottom: '24px' }}
        >
          Auction ended &#8212; Closed for contribution
        </Text>
        <Text
          color="altair"
          size="32px"
          textAlign="center"
          weight={600}
          style={{ paddingBottom: '16px' }}
        >
          Altair Wins 9th Slot in Kusama Auctions
        </Text>
        <Text
          size="20px"
          textAlign="center"
          weight={600}
          style={{ paddingBottom: '3px' }}
        >
          <Text size="32px">{KSM}</Text> KSM raised from{' '}
          <Text size="32px">{CONTRIBUTIONS}</Text> contributions
        </Text>
      </Box>
      <Box
        style={{
          marginTop: '100px',
        }}
        alignSelf="center"
      >
        <Grid
          columns={['min-content', 'min-content', 'min-content']}
          gap="medium"
        >
          <Box style={{ minWidth: '234px' }}>
            <Box style={{ marginBottom: '42px' }}>
              <ReferralLeaderboard topReferrers={topReferrers} />
            </Box>
            <Box>
              <ContributionLeaderboard topContributors={topContributors} />
            </Box>
          </Box>
          <Box
            width="600px"
            height="min-content"
            style={{
              padding: '0 64px',
            }}
          >
            {loading ? (
              <Box align="center">
                <Spinner color="white" size="medium" />
              </Box>
            ) : (
              <Stats
                accounts={accounts}
                selectedAccount={selectedAccount}
                setSelectedAccount={setSelectedAccount}
              />
            )}
          </Box>
          <Box gap="medium">
            <JoinWaitlist />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
