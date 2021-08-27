import React, { useCallback, useEffect, useState } from 'react';
import { encodeAddress } from '@polkadot/util-crypto';
import fetch from 'node-fetch';
import { Anchor, Box, Button, Spinner, Text } from 'grommet';
import { Checkmark, StatusGood } from 'grommet-icons';
import { useCopyToClipboard } from 'react-use';
import referral_bonus_success_card from '../../images/altair/referral_bonus_success_card.svg';

export const Success = ({
  address,
  estimatedAirRewards,
  hash,
  ksmAmount,
  location,
}) => {
  const [referralCode, setReferralCode] = useState('');
  const [state, copyToClipboard] = useCopyToClipboard();

  const referralLink = `${
    location?.origin
  }/altair/crowdloan?refer=${referralCode}`;

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/.netlify/functions/createReferralCode', {
          method: 'POST',
          body: JSON.stringify({ refererAddress: encodeAddress(address, 2) }),
        });

        const json = await response.json();
        setReferralCode(json.referralCode);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const CopyLinkLabel = useCallback(
    () => {
      if (state.value) {
        return (
          <Box style={{ flexDirection: 'row' }} align="center">
            <Checkmark size="small" />
            <Text style={{ paddingLeft: '5px' }}>Link copied</Text>
          </Box>
        );
      }

      return (
        <Box>
          <Text>Copy Link</Text>
        </Box>
      );
    },
    [state],
  );

  return (
    <Box
      style={{
        marginTop: '48px',
        marginBottom: '100px',
      }}
      align="center"
      gap="medium"
    >
      <Text size="xlarge" weight={900}>
        Your contribution is in... Earn 5% more now!
      </Text>
      <Box
        width="554px"
        style={{
          border: '1px solid white',
          borderRadius: '8px',
        }}
      >
        <Box
          height="168px"
          background={{
            image: `url('${referral_bonus_success_card}')`,
            size: 'contain',
            position: 'right',
          }}
          style={{
            borderRadius: '8px 8px 0px 0px',
          }}
        >
          <Box pad="medium" width="350px">
            <Text size="large" textAlign="center">
              Referral Bonus
            </Text>
            <Text size="xlarge" weight={900} textAlign="center">
              You and your friend can earn an extra 5%
            </Text>
          </Box>
        </Box>
        <Box
          background="white"
          style={{
            borderRadius: '0px 0px 8px 8px',
          }}
          pad="32px"
          gap="medium"
        >
          <Box gap="small">
            <Text>
              Send this link to your friends to earn an additional 5% reward for
              both you and for them.
            </Text>
            {referralCode ? (
              <Anchor
                target="_blank"
                href={referralLink}
                primary
                label={referralLink}
              />
            ) : (
              <Spinner />
            )}
          </Box>
          <Button
            primary
            alignSelf="center"
            color="altair"
            label={<CopyLinkLabel />}
            onClick={() => copyToClipboard(referralLink)}
          />
          <Text alignSelf="center" color="#808080">
            Make sure to store your referral link. You will not be able to
            access it again.
          </Text>
        </Box>
      </Box>
      <Box width="500px" gap="small">
        <Box>
          <Text weight={900}>
            <StatusGood color="white" size="small" /> Your {ksmAmount} KSM have
            been staked successfully!
          </Text>
        </Box>
        <Box>
          <Text>Thank you for your contribution.</Text>
          <Text>
            View your transaciton on{' '}
            <Anchor
              target="_blank"
              href={`https://kusama.subscan.io/extrinsic/${hash}`}
              primary
              label="Subscan"
            />
            .
          </Text>
          <Text>
            Check out the crowdloan progress on the{' '}
            <Anchor
              href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.elara.patract.io#/parachains/crowdloan"
              target="_blank"
            >
              Polkadot/Substrate portal
            </Anchor>
            .
          </Text>
        </Box>
        <Box>
          <Text>
            Your estimated reward is {estimatedAirRewards.toFixed(4)} AIR.
          </Text>
          <Text>
            Rewards are available once the Altair Parachain goes live.{' '}
            <Anchor
              target="_blank"
              href="https://medium.com/altair-network/altair-round-2-go-94fa0f115081"
              primary
              label="Learn more"
            />
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
