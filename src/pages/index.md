<!-- Imports -->

import LatestNewsSection from '../partials/home/LatestNewsSection';
import TinlakeCard from '../components/TinlakeCard';

<!-- Intro -->
<Section>

<Row>
<Col span={4}>

<ResponsiveContent breakpoints={["medium", "large"]}>
<Heading lined style={{ fontSize: "24px" }} margin={{ bottom: "large" }}>
Decentralized Asset Finance
</Heading>
</ResponsiveContent>

<ResponsiveContent breakpoints={["small"]}>
<Heading lined style={{ fontSize: "24px" }} margin={{ bottom: "xlarge" }} textAlign="center">
Decentralized Asset Finance
</Heading>
</ResponsiveContent>

</Col>
</Row>

<Row>
<Col span={4} margin={{bottom: "large"}}>

<Box margin={{ bottom: "large" }}>
<Text size="20px" textAlign="center" weight={500}>
Access bankless liquidity.
</Text>
<Text size="20px" textAlign="center" weight={500}>
Use Centrifuge to bring
</Text>
<Text size="20px" textAlign="center" weight={500}>
your assets into DeFi.
</Text>
</Box>

<Button primary href="/finance" label="Pool Your Assets" />
</Col>
<Col span={4} margin={{bottom: "large"}}>

![](../images/home/illustration_1.svg)

</Col>
<Col span={4} margin={{bottom: "large"}}>

<Box margin={{ bottom: "large" }}>
<Text size="20px" textAlign="center" weight={500}>
Invest in diversified
</Text>
<Text size="20px" textAlign="center" weight={500}>
asset-backed pools. Generate a return
</Text>
<Text size="20px" textAlign="center" weight={500}>
on stable assets.
</Text>
</Box>

<Button primary href="/invest" label="Invest" />
</Col>
</Row>

</Section>

<!-- Tinlake -->
<TinlakeCard heading="See how an open source, asset-backed financing protocol works with our first Dapp">

<ResponsiveContent breakpoints={["medium", "large"]}>
<Box gap="small">
<Row>

<Col span={4}>

### Unlock Liquidity

</Col>
<Col span={4}>

### Without the banks

</Col>
<Col span={4}>

### Made by people who understand finance + innovation

</Col>
</Row>
<Row>
<Col span={4}>

Asset Originators can collateralize invoices, royalties, and other real-world assets for untapped liquidity in DeFi.

</Col>
<Col span={4}>

That means your money and collateral passing through fewer hands. An end-to-end solution, powered by our RAD token.

</Col>
<Col span={4}>

We are a team of innovators from both traditional Fintech and DeFi. Together, we find the best way to connect both worlds.

</Col>
</Row>
</Box>
</ResponsiveContent>

<ResponsiveContent breakpoints={["small"]}>
<Row>

<Col span={4} margin={{ bottom: "large" }}>

### Unlock Liquidity

Asset Originators can collateralize invoices, royalties, and other real-world assets for untapped liquidity in DeFi.

</Col>
<Col span={4} margin={{ bottom: "large" }}>

### Without the banks

That means your money and collateral passing through fewer hands. An end-to-end solution, powered by our RAD token.

</Col>
<Col span={4}>

### Made by people who understand finance + innovation

We are a team of innovators from both traditional Fintech and DeFi. Together, we find the best way to connect both worlds.

</Col>
</Row>
</ResponsiveContent>

</TinlakeCard>

<!-- Latest News -->
<LatestNewsSection />

<!-- The Open Protocol to Access Decentralized Future -->
<Section>
<Row>
<Col span={5}>

![](../images/home/illustration_2.svg)

</Col>
<Col span={1} margin={{ bottom: "large" }}></Col>
<Col span={6}>

<Heading lined margin={{ bottom: "medium" }} style={{ fontSize: "24px" }}>
The Open Protocol to Access Decentralized Finance
</Heading>

We see a future of open finance, where businesses use decentralized currencies to make our world spin. The Centrifuge protocol is open source and built to plug your business to Web 3.

<ResponsiveContent breakpoints={["medium", "large"]}>
<Button primary label="Add us to your Stack" align="end" margin={{ top: "medium" }} href="https://developer.centrifuge.io/" target="_blank" rel="noreferrer noopener" />
</ResponsiveContent>
<ResponsiveContent breakpoints={["small"]}>
<Button primary href="https://developer.centrifuge.io/" label="Add us to your Stack" margin={{ top: "medium" }} />
</ResponsiveContent>

</Col>
</Row>
</Section>

<!-- DeFi is a grassroots finanical movement, powered by the community. -->
<Section>
<Row>
<Col span={6}>

# DeFi is a grassroots financial movement, powered by the community.

The DeFi community is different from anything the financial world has seen before. Token holders have a voice and a vote on the direction of the protocol. All of our protocols are interdependent on one another, making it a financial system powered by community.

We are proud to take part in the larger DeFi ecosystem, one that demands the financial world to revisit its purpose in the first place: to circulate and distribute money in a fair and trustless way.

<ResponsiveContent breakpoints={["medium", "large"]}>
<Button primary label="Join the conversation on Discourse" align="end" margin={{ top: "medium" }} href="https://discourse.centrifuge.io/" target="_blank" rel="noreferrer noopener" />
</ResponsiveContent>
<ResponsiveContent breakpoints={["small"]}>
<Button primary label="Join the conversation on Discourse" margin={{ top: "medium" }} href="https://discourse.centrifuge.io/" target="_blank" rel="noreferrer noopener" />
</ResponsiveContent>

</Col>
<Col span={1} margin={{ vertical: "xlarge" }}></Col>
<Col span={5}>
<Box gap="large">
<Text size="20px" textAlign="center">Building a fair financial system with:</Text>
<Image src="../images/home/maker_logo.svg" width="300px" alignSelf="center" />
<Image src="../images/home/celo_logo.svg" width="300px" alignSelf="center" />
<Image src="../images/home/circle_logo.svg" width="300px" alignSelf="center" />
</Box>
</Col>
</Row>
</Section>

<!-- Radial Token -->
<Section>
<Image src="../images/radial-token-logo.svg" margin={{ bottom: "large" }} width="200px" alignSelf="center" />
<Heading lined alignSelf="center" textAlign="center" margin={{ bottom: "large" }}>Centrifuge is powered by Radial token</Heading>
<Button primary label="Learn about RAD" href="/products/chain" />
</Section>
