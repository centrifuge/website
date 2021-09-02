import React, { useEffect, useState } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Box, Grid, Text } from 'grommet';
import { Header } from './Header';
import { BonusCard } from './BonusCard';
import { Stake } from './Stake';
import { Success } from './Success';
import referral_bonus from '../../images/altair/referral_bonus.svg';
import surprise_bonus from '../../images/altair/surprise_bonus.svg';

// the deadline for the early bird rewards - September 2, 2021 @ 12:00pm GMT
const EARLY_BIRD_DEADLINE = 1630584000000;
const now = Date.now();
const timeUntilDeadline = EARLY_BIRD_DEADLINE - now;

export const Crowdloan = ({ location }) => {
  const [isFinalized, setIsFinalized] = useState(false);
  const [ksmAmount, setKsmAmount] = useState('');
  const [hash, setHash] = useState();
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
      <Header api={api} />
      {isFinalized ? (
        <Box
          style={{
            marginBottom: '100px',
          }}
        >
          <Success
            address={selectedAccount?.address}
            estimatedAirRewards={estimatedAirRewards}
            hash={hash}
            ksmAmount={ksmAmount}
            location={location}
          />
        </Box>
      ) : (
        <Box
          style={{
            marginTop: '100px',
            marginBottom: '100px',
          }}
          alignSelf="center"
        >
          <Grid columns={['min-content', 'min-content']} gap="medium">
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
            <Box gap="medium">
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
                    <Text
                      weight={900}
                      size="48px"
                      style={{ paddingLeft: '2px' }}
                    >
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
                <Box style={{ paddingTop: '36px' }}>
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
                    <Text
                      weight={900}
                      size="48px"
                      style={{ paddingLeft: '2px' }}
                    >
                      10
                    </Text>
                  </Box>
                </Box>
                <Text weight={600} size="24px">
                  Heavyweight Bonus
                </Text>
                <Box style={{ paddingTop: '36px' }}>
                  <Text textAlign="left" style={{ lineHeight: '20px' }}>
                    Contribute at least 10 KSM to receive a special surprise
                    bonus
                  </Text>
                </Box>
              </BonusCard>
            </Box>
          </Grid>
        </Box>
      )}
    </Box>
  );
};
