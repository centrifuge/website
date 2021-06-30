import React from "react";
import { Col, Row, Section } from "../../components/MDXLayout/shortcodes";
import { Box, Button, Image, Text } from "grommet";

import maker from "../../images/ao/maker.png";
import aave from "../../images/ao/aave.svg";

const WhyCentrifugeBox = ({ children }) => (
  <Box
    background={{ color: "dark-6", opacity: "weak" }}
    round="small"
    pad="medium"
    align="center"
    gap="xsmall"
    height={{ min: "250px" }}
  >
    {children}
  </Box>
);

const WhyCentrifuge = () => {
  return (
    <Box background="brand-dark">
      <Section gap="large">
        <Text textAlign="center" size="xlarge" weight={500}>
          Why Centrifuge?
        </Text>
        <Box>
          <Row>
            <Col span={4}>
              <WhyCentrifugeBox>
                <Text size="large" weight={500} textAlign="center">
                  Composable with the largest DeFi Market Makers
                </Text>
                <Box flex="grow" justify="center" align="center" gap="medium">
                  <Image src={maker} height="30px" />
                  <Image src={aave} height="30px" />
                </Box>
              </WhyCentrifugeBox>
            </Col>
            <Col span={4}>
              <WhyCentrifugeBox>
                <Text size="large" weight={500} textAlign="center">
                  We make the first moves
                </Text>
                <Box flex="grow" justify="center">
                  <Text textAlign="center">
                    Centrifuge has made many firsts in DeFi, including the first
                    loan drawn by a DeFi protocol learn more
                  </Text>
                </Box>
              </WhyCentrifugeBox>
            </Col>
            <Col span={4}>
              <WhyCentrifugeBox>
                <Text size="large" weight={500} textAlign="center">
                  KYC/AML Compliant
                </Text>
                <Box flex="grow" justify="center">
                  <Text textAlign="center">
                    Centrifuge is actively working alongside traditional finance
                    institutions to integrate DeFi and CeFi
                  </Text>
                </Box>
              </WhyCentrifugeBox>
            </Col>
          </Row>
        </Box>
        <Box direction="row" justify="center" gap="small">
          <Button primary label="Access Capital" />
          <Button primary color="accent-1" label="Join the Community" />
        </Box>
      </Section>
    </Box>
  );
};

export default WhyCentrifuge;
