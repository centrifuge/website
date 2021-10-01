import React, { useEffect, useState } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Anchor, Box, Grid, Text } from 'grommet';
import { BonusCard } from './BonusCard';
import { Stake } from './Stake';
import referral_bonus from '../../images/altair/referral_bonus.svg';
import surprise_bonus from '../../images/altair/surprise_bonus.svg';
import early_bird_bonus from '../../images/altair/early_bird_bonus.svg';
import crowdloan_banner from '../../images/altair/crowdloan_banner.svg';

// the deadline for the early bird rewards - September 2, 2021 @ 12:00pm GMT
const EARLY_BIRD_DEADLINE = 1630584000000;
const now = Date.now();
const timeUntilDeadline = EARLY_BIRD_DEADLINE - now;

const KSM = '187.84K';
const CONTRIBUTIONS = '18,342';

export const Crowdloan = ({ location }) => {
  const [, setIsFinalized] = useState(false);
  const [ksmAmount, setKsmAmount] = useState('');
  const [, setHash] = useState();
  const [selectedAccount, setSelectedAccount] = useState({});
  const [estimatedAirRewards, setEstimatedAirRewards] = useState(0);
  const [api, setApi] = useState();

  const isEarlybird = timeUntilDeadline > 0 ? true : false;

  useEffect(() => {
    (async () => {
      const wsProvider = new WsProvider('wss://kusama-rpc.polkadot.io');

      const response = await ApiPromise.create({ provider: wsProvider });

      setApi(response);
    })();
  }, []);

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
          Parachain Crowdloan Auction Ended
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
        <Grid columns={['min-content', 'min-content']} gap="medium">
          <Box>
            <Box
              background="white"
              pad="none"
              width="644px"
              height="min-content"
              style={{
                borderRadius: '8px',
              }}
            >
              <Stake
                api={api}
                estimatedAirRewards={estimatedAirRewards}
                isEarlybird={isEarlybird}
                ksmAmount={ksmAmount}
                location={location}
                selectedAccount={selectedAccount}
                setEstimatedAirRewards={setEstimatedAirRewards}
                setHash={setHash}
                setIsFinalized={setIsFinalized}
                setKsmAmount={setKsmAmount}
                setSelectedAccount={setSelectedAccount}
              />
            </Box>
            <Box style={{ marginTop: '72px' }}>
              <Text size="large" weight={500} textAlign="center">
                Need help to stake your KSM? &#8212; Watch this video!
              </Text>
              <iframe
                style={{ marginTop: '30px' }}
                width="644"
                height="362"
                src="https://www.youtube.com/embed/se8mBXHCV-w"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </Box>
          <Box gap="medium">
            <BonusCard background={early_bird_bonus}>
              <Box>
                <Box
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    textAlign: 'center',
                    paddingTop: '10px',
                  }}
                >
                  <Text weight={600} size="32px">
                    Top 1,500
                  </Text>
                </Box>
              </Box>
              <Text weight={600} size="24px">
                Heavyweight Bonus
              </Text>
              <Box style={{ paddingTop: '48px' }}>
                <Text textAlign="left" style={{ lineHeight: '20px' }}>
                  Leading contributors receive limited RMRK next-generation NFTs
                </Text>
              </Box>
            </BonusCard>
            <BonusCard background={referral_bonus}>
              <Box>
                <Box
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Text weight={600} size="32px">
                    +
                  </Text>
                  <Text weight={900} size="48px" style={{ paddingLeft: '2px' }}>
                    5
                    <Text
                      weight={600}
                      size="48px"
                      style={{ paddingLeft: '8px' }}
                    >
                      %
                    </Text>
                  </Text>
                </Box>
              </Box>
              <Text weight={600} size="24px">
                Referral Bonus
              </Text>
              <Box style={{ paddingTop: '48px' }}>
                <Text textAlign="left" style={{ lineHeight: '20px' }}>
                  Earn an extra 5% for you and a friend when you share your
                  referral link.
                </Text>
              </Box>
            </BonusCard>
            <BonusCard background={surprise_bonus}>
              <Box>
                <Box
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text weight={600} size="32px">
                    &ge;
                  </Text>
                  <Text weight={900} size="48px" style={{ paddingLeft: '2px' }}>
                    10
                    <Text
                      size="24px"
                      weight={600}
                      style={{ paddingLeft: '6px' }}
                    >
                      KSM
                    </Text>
                  </Text>
                </Box>
              </Box>
              <Text weight={600} size="24px">
                Heavyweight Bonus
              </Text>
              <Box style={{ paddingTop: '28px' }}>
                <Text textAlign="left" style={{ lineHeight: '20px' }}>
                  Contribute at least 10 KSM to receive a special surprise
                  bonus.{' '}
                  <Anchor
                    target="_blank"
                    href="https://medium.com/altair-network/rmrk-and-altair-collaborate-for-kusama-auctions-with-limited-edition-nft-d04daea24911"
                    primary
                    label="Learn more"
                    size="14px"
                  />
                </Text>
                <Text color="altair" weight={600}>
                  Limit of 1,500 contributions reached
                </Text>
              </Box>
            </BonusCard>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
