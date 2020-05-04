import React from "react";
import { Heading, Paragraph, Box, Button, Image, Text } from "grommet";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Container from "components/Container";
import FullWidthContainer from "components/FullWidthContainer";
import Column, { Spacer } from "components/Column";
import Grid from "components/Grid";

import chain from "images/chain/chain.svg";
import why_we_built_chain from "images/chain/why-we-built-chain.svg";
import how_does_chain_work from "images/chain/how-does-chain-work.svg";
import radial_token_logo from "images/radial-token-logo.svg";

const ChainPage = () => (
  <Layout>
    <SEO />
    {/* What */}
    <Container>
      <Grid staggered mt="large" mb="xlarge" align="flex-start">
        <Column
          span={{ medium: 6, large: 4 }}
          align="start"
          margin={{ bottom: "large" }}
        >
          <Text
            size="xxlarge"
            weight="bold"
            margin={{ bottom: "large" }}
            textAlign="start"
          >
            Centrifuge Chain — The Gateway for Real-World Assets into DeFi
          </Text>
          <Image src={chain} />
        </Column>
        <Spacer />
        <Column justifySelf="stretch" span={{ medium: 6, large: 7 }}>
          <Heading level={2} margin={{ bottom: "medium" }} lined>
            What is Centrifuge Chain?
          </Heading>
          <Paragraph>
            Centrifuge Chain is the gateway for real-world assets to the
            Blockchain Multiverse. We built Centrifuge Chain on Parity Substrate
            with an initial bridge to Ethereum. This allows us to move faster
            and use a consistent approach for certain features.
          </Paragraph>
          <Paragraph>
            Centrifuge Chain is optimized specifically for the transactions
            required by our specific use case. This focus allows us to improve
            upon our current architecture in a few key ways: speed, cost,
            storage efficiencies, and privacy.
          </Paragraph>
          <Paragraph>
            We envision a larger ecosystem of many, connected blockchains- where
            Dapps on Ethereum could use data from other chains, value could move
            freely, and Centrifuge Chain can enable off-chain assets to access
            financing through DeFi.
          </Paragraph>
        </Column>
      </Grid>
    </Container>

    {/* Why */}
    <Container>
      <Box>
        <Heading level={2} margin={{ bottom: "medium" }} lined>
          Why did we build Centrifuge Chain?
        </Heading>
        <Paragraph>
          We built Centrifuge Chain to enable businesses to exchange business
          documents (such as invoices) and tokenize those assets to have greater
          access to financing — thereby unlocking value that has previously been
          inaccessible. Our mission is to change the rules of global trade to
          foster economic opportunity everywhere.
        </Paragraph>
      </Box>
    </Container>
    <FullWidthContainer>
      <Box margin={{ top: "large", bottom: "xlarge" }}>
        <Image src={why_we_built_chain} style={{ width: "100%" }} />
      </Box>
    </FullWidthContainer>

    {/* How */}
    <Container>
      <Box>
        <Heading level={2} margin={{ bottom: "medium" }} lined>
          How does Centrifuge Chain work?
        </Heading>
        <Paragraph>
          Using Centrifuge Chain, businesses can convert their Real World Assets
          (RWA) into Non-Fungible Tokens (NFTs). This enables Asset Originators
          to put up these NFTs as collateral in Tinlake pools on Ethereum.
          Centrifuge Chain is an open source PoS blockchain built for finance
          and powered by the Radial (RAD) token. Tinlake taps into the
          Centrifuge ecosystem, including the Centrifuge Chain and a P2P
          messaging protocol, to bring DeFi to a consumer-ready interface.
        </Paragraph>
      </Box>
    </Container>
    <FullWidthContainer>
      <Box margin={{ top: "large", bottom: "xlarge" }}>
        <Image src={how_does_chain_work} style={{ width: "100%" }} />
      </Box>
    </FullWidthContainer>

    {/* Split Section */}
    <Container>
      <Grid staggered mt="large" mb="xlarge" align="flex-start">
        <Column
          justifySelf="stretch"
          span={{ medium: 12, large: 5 }}
          margin={{ bottom: "medium" }}
        >
          <Heading level={2} margin={{ bottom: "medium" }} lined>
            Chain Architecture
          </Heading>
          <Paragraph>
            Centrifuge Chain uses its own native token - the Radial (RAD) token.
            It also incentivizes Validators and Nominators to participate
            through a block reward.
          </Paragraph>
          <Paragraph>
            Centrifuge Chain is built on Parity Substrate, and relies on staked
            Validators to come to consensus in order to commit blocks to the
            blockchain. Any node can offer itself as a Validator candidate, but
            only a limited number will be selected. Only top Validators by stake
            are elected into the Validator Set. Validators can stake their own
            RAD and can be elected by staked Nominators
          </Paragraph>
        </Column>
        <Spacer width={2} />
        <Column
          justifySelf="stretch"
          span={{ medium: 12, large: 5 }}
          margin={{ bottom: "medium" }}
        >
          <Heading level={2} margin={{ bottom: "medium" }} lined>
            Interested in running a Validator?
          </Heading>
          <Paragraph>
            If you are interested in running a Validator for Centrifuge Chain,
            check out our documentation to get started! The Flint and Amber
            testnets are a great way to get up and running. One of the main
            benefits of becoming a validator on Centrifuge testnets first is to
            get experience running your own Centrifuge Chain node and to test
            your infrastructure.
          </Paragraph>
          <Paragraph>
            Thanks to BlockXLabs, you can get Centrifuge testnet tokens from
            their faucet!
          </Paragraph>
        </Column>
      </Grid>
    </Container>

    {/* Radial Token */}
    <Container>
      <Grid staggered mt="large" mb="xlarge">
        <Column
          justifySelf="stretch"
          span={{ medium: 3, large: 2 }}
          margin={{ bottom: "medium" }}
        >
          <Image src={radial_token_logo} />
        </Column>
        <Spacer />
        <Column justifySelf="stretch" span={{ medium: 9, large: 9 }}>
          <Heading level={2} margin={{ bottom: "medium" }} lined>
            The Radial Token
          </Heading>
          <Paragraph>
            The Radial token (RAD) powers Centrifuge Chain. RAD is designed to incentivize desirable behavior on Centrifuge Chain — so called mechanism design — to create a robust, decentralized system. Owning RAD gives users a stake in the Centrifuge network and can be used to pay for transaction fees, stake towards Validators, and participate in Centrifuge on-chain governance. It will also incentivize Validators and Nominators to participate through a block reward.
          </Paragraph>
          <Box align="start" margin={{ top: "medium" }}>
            <Button href="https://ctrf-tk-ppr.s3-us-west-1.amazonaws.com/Centrifuge+Token+Design+Spec+v0.5.pdf" label="Read Token Summary" />
          </Box>
        </Column>
      </Grid>
    </Container>
  </Layout>
);

export default ChainPage;
