import React, { useEffect, useState } from 'react';
import { Anchor, Box, Grid, Spinner, Text } from 'grommet';
import { Stats } from './Stats';
import { ReferralLeaderboard } from './ReferralLeaderboard';
import { JoinWaitlist } from './JoinWaitlist';
import { MediaCard } from './MediaCard';
import { ContributionLeaderboard } from './ContributionLeaderboard';
import crowdloan_banner from '../../images/altair/crowdloan_banner.svg';
import faq from '../../images/altair/faq.svg';
import next_step from '../../images/altair/next-step.svg';
import wildest_assets from '../../images/altair/wildest-assets.svg';

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
    <Box>
      <Box background="black" style={{ paddingBottom: '98px' }}>
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
            marginTop: '56px',
          }}
          alignSelf="center"
        >
          <Grid columns={['269px', '364px', '269px']} gap="95px">
            <Box>
              <Box style={{ marginBottom: '42px' }}>
                <ReferralLeaderboard topReferrers={topReferrers} />
              </Box>
              <Box>
                <ContributionLeaderboard topContributors={topContributors} />
              </Box>
            </Box>
            <Box height="min-content">
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
      <Box
        background="white"
        style={{ padding: '64px 0' }}
        direction="row"
        gap="16px"
        justify="center"
      >
        <MediaCard>
          <Box
            background={`url('${faq}')`}
            width="364px"
            height="204px"
            style={{ borderRadius: '10px 10px 0px 0px' }}
          />
          <Box height="230px" style={{ padding: '24px' }} gap="20px">
            <Text size="20px" textAlign="start" weight={600}>
              FAQ: Altair Crowdloan
            </Text>
            <Text size="16px" textAlign="start">
              Here are some answers to the most common questions about Altair’s
              Kusama parachain bid and crowdloan
            </Text>
            <Anchor
              target="_blank"
              href="https://medium.com/altair-network/faq-altair-crowdloan-85b9d9abd235"
              primary
              label="Read more..."
              size="16px"
              weight={600}
            />
          </Box>
        </MediaCard>
        <MediaCard>
          <Box
            background={`url('${wildest_assets}')`}
            width="364px"
            height="204px"
            style={{ borderRadius: '10px 10px 0px 0px' }}
          />
          <Box height="230px" style={{ padding: '24px' }} gap="20px">
            <Text size="20px" textAlign="start" weight={600}>
              Your Wildest Assets Competition
            </Text>
            <Text size="16px" textAlign="start">
              It’s time to unleash your creativity and tell us what could you
              imagine with asset financing on Altair
            </Text>
            <Anchor
              target="_blank"
              href="https://medium.com/@katebeecroft/your-wildest-assets-competition-f2a4c9f3bf69"
              primary
              label="Read more..."
              size="16px"
              weight={600}
            />
          </Box>
        </MediaCard>
        <MediaCard>
          <Box
            background={`url('${next_step}')`}
            width="364px"
            height="204px"
            style={{ borderRadius: '10px 10px 0px 0px' }}
          />
          <Box height="230px" style={{ padding: '24px' }} gap="20px">
            <Text size="20px" textAlign="start" weight={600}>
              Going, going...
            </Text>
            <Text size="16px" textAlign="start">
              With the Kusama parachain auctions creeping up again, we are
              revving up the engine for round two and this post sets the scene
              for why these..
            </Text>
            <Anchor
              target="_blank"
              href="https://medium.com/centrifuge/going-going-e1896d9e28a2"
              primary
              label="Read more..."
              size="16px"
              weight={600}
            />
          </Box>
        </MediaCard>
      </Box>
    </Box>
  );
};
