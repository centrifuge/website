import React, { useCallback } from 'react';
import { Col, Row, Section } from '../MDXLayout/shortcodes';
import { Anchor, Box, Button, Image, Text } from 'grommet';
import altair_logo from '../../images/altair/altair_logo.svg';
import sparkle from '../../images/altair/sparkle.svg';

export const Landing = () => {
  const scrollToStake = useCallback(() => {
    window.scrollTo({
      top: 750,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Box background="black" style={{ position: 'relative', minHeight: '80vh' }}>
      <Section>
        <Row>
          <Col span={8} gap="medium">
            <Box>
              <Box gap="small">
                <Text
                  size="xxlarge"
                  weight={900}
                  textAlign="start"
                  style={{ paddingLeft: '25px' }}
                >
                  Support the Altair Parachain Auction.
                </Text>
                <Text
                  size="xxlarge"
                  weight={900}
                  textAlign="start"
                  style={{ paddingLeft: '25px' }}
                >
                  Earn AIR tokens.
                </Text>
              </Box>
              <Box gap="small" style={{ marginTop: '60px' }}>
                <Box style={{ display: 'inline' }}>
                  <Image
                    src={sparkle}
                    height={22}
                    style={{ paddingRight: '10px' }}
                  />
                  <Text size="xlarge" textAlign="start">
                    Stake 1 KSM to earn 400 AIR
                  </Text>
                </Box>
                <Box style={{ display: 'inline' }}>
                  <Image
                    src={sparkle}
                    height={22}
                    style={{ paddingRight: '10px' }}
                  />
                  <Text size="xlarge" textAlign="start">
                    The first 250 participants earn a bonus of 10%
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box gap="small">
              <Button
                primary
                color="altair"
                label="Stake Kusama Now"
                alignSelf="start"
                onClick={() => scrollToStake()}
                style={{
                  marginLeft: '24px',
                  marginTop: '64px',
                  height: '48px',
                  fontSize: '20px',
                }}
              />
              <Text size="small" color="white" style={{ marginLeft: '24px' }}>
                You can also participate in the crowdloan on the{' '}
                <Anchor
                  href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.elara.patract.io#/parachains/crowdloan"
                  target="_blank"
                >
                  Polkadot/Substrate portal
                </Anchor>{' '}
                directly.
              </Text>
            </Box>
          </Col>
          <Col span={4}>
            <Image src={altair_logo} width={172} />
          </Col>
        </Row>
      </Section>
    </Box>
  );
};
