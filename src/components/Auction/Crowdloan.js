import React, { useMemo, useState } from 'react';
import { Box, Grid, Text } from 'grommet';
import parseMilliseconds from 'parse-ms';
import { useCountDown } from './useCountdown';
import { Header } from './Header';
import { BonusCard } from './BonusCard';
import { Stake } from './Stake';
import { Success } from './Success';
import referral_bonus from '../../images/altair/referral_bonus.svg';
import early_bird_bonus from '../../images/altair/early_bird_bonus.svg';

// the deadline for the early bird rewards - September 1, 2021 @ 12:00pm GMT
const EARLY_BIRD_DEADLINE = 1630497600000;
const now = Date.now();
const timeUntilDeadline = EARLY_BIRD_DEADLINE - now;

const Countdown = () => {
  const { completed, timeLeft } = useCountDown(timeUntilDeadline);
  const { days, hours, minutes } = parseMilliseconds(timeLeft);

  const day = useMemo(
    () => {
      if (days === 1) {
        return `${days} day`;
      }

      return `${days} days`;
    },
    [days],
  );

  const hour = useMemo(
    () => {
      if (hours === 1) {
        return `${hours} hour`;
      }

      return `${hours} hours`;
    },
    [hours],
  );

  const minute = useMemo(
    () => {
      if (minutes === 1) {
        return `${minutes} min`;
      }

      return `${minutes} mins`;
    },
    [minutes],
  );

  if (completed) {
    return (
      <Text color="altair">
        Ends in: <Text weight={900}>0 days 0 hrs 0 mins</Text>
      </Text>
    );
  }

  return (
    <Text color="altair">
      Ends in:{' '}
      <Text weight={900}>
        {day} {hour} {minute}
      </Text>
    </Text>
  );
};

export const Crowdloan = ({ location }) => {
  const [isFinalized, setIsFinalized] = useState(false);
  const [ksmAmount, setKsmAmount] = useState('');
  const [hash, setHash] = useState();
  const [selectedAccount, setSelectedAccount] = useState({});
  const [estimatedAirRewards, setEstimatedAirRewards] = useState(0);

  const isEarlybird = timeUntilDeadline > 0 ? true : false;

  return (
    <Box background="black">
      <Header />
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
              pad="medium"
              width="644px"
              style={{
                borderRadius: '8px',
              }}
            >
              <Stake
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
              <BonusCard background={early_bird_bonus}>
                <Box style={{ paddingLeft: '54px' }}>
                  <Text weight={900} size="24px" style={{ paddingTop: '6px' }}>
                    Early Bird
                  </Text>
                  <Text size="medium">10% Bonus</Text>
                </Box>
                <Box style={{ paddingTop: '12px' }}>
                  <Text textAlign="left">
                    Stake within 48 hours after the auction's opening.
                  </Text>
                </Box>
                <Box style={{ paddingTop: '12px' }}>
                  <Countdown />
                </Box>
              </BonusCard>
              <BonusCard background={referral_bonus}>
                <Box>
                  <Text weight={900} size="24px" style={{ paddingTop: '6px' }}>
                    Referral Bonus
                  </Text>
                  <Text size="medium">Extra 5% Reward</Text>
                </Box>
                <Box style={{ paddingTop: '48px' }}>
                  <Text textAlign="left">
                    Earn an extra 5% for you and a friend when you share your
                    referral link.
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
