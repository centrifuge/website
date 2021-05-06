<!-- Imports -->

import LatestNewsSection from '../partials/home/LatestNewsSection';
import OrbitSection from '../partials/home/OrbitSection';
import PlayButton from '../partials/home/PlayButton';
import Hero from '../components/Hero';
import SocialTipButton from '../components/SocialTipButton';

import illustration_1 from "../images/home/illustrations/1.svg";
import illustration_2 from "../images/home/illustrations/2.svg";
import orbit from "../images/home/orbit.png";

import forum from "../images/social-icons/forum.svg";
import discord from "../images/social-icons/discord.svg";
import telegram from "../images/social-icons/telegram.svg";
import twitter from "../images/social-icons/twitter.svg";

<!-- Intro -->
<Hero />

<Section>
<Box fill="horizontal" border />
</Section>

<!-- Second Section -->
<Section>
<ResponsiveContent breakpoints={["large", "medium"]}>
<Box gap="large">
<Row>

<Col span={3}>
<Text size="large" textAlign="start">
Centrifuge bridges assets like invoices, real estate, and royalties to DeFi.
</Text>
</Col>

<Col span={1} />

<Col span={8}>
<Image src={illustration_1} />
</Col>
</Row>

<Row>
<Col span={3} align="stretch">
<Box justify="between" flex="grow" pad={{ vertical: "medium" }}>
<Text size="large" textAlign="start">
Borrowers can finance their real-world assets without banks or other intermediaries.
</Text>

<Text size="large" textAlign="start">
Providing liquidity is open to everyone. Investors receive a return  plus CFG rewards.
</Text>
</Box>
</Col>

<Col span={1} />

<Col span={8}>
<Box pad={{ left: "xlarge" }}>
<Image src={illustration_2} />
</Box>
</Col>

</Row>
<Row>
<Col span={4} />
<Col span={8}>

<Box pad={{ left: "xlarge" }}>
<PlayButton />
</Box>

</Col>
</Row>
</Box>
</ResponsiveContent>

<ResponsiveContent breakpoints={["small"]}>
<Box gap="xlarge">

<Text size="large" textAlign="start">
Centrifuge bridges assets like invoices, real estate, and royalties to DeFi.
</Text>

<Image src={illustration_1} />

<Text size="large" textAlign="start">
Borrowers can finance their real-world assets without banks or other intermediaries.
</Text>

<Image src={illustration_2} />

<Text size="large" textAlign="start">
Providing liquidity is open to everyone. Investors receive an return in stablecoins plus CFG liquidity rewards.
</Text>

<PlayButton />

</Box>
</ResponsiveContent>
</Section>

<!-- Orbit Section -->
<OrbitSection gap="large">
<Box>

<ResponsiveContent breakpoints={["large", "medium"]}>
<Row>
<Col span={6}>
<Image src={orbit} />
</Col>
<Col span={1} margin={{ bottom: "large" }} />
<Col span={5} align="end">
<Box gap="large">
<Text size="xlarge" weight={500} textAlign="start">We are the bridge that brings<br/>trillions from the real world to DeFi</Text>
<Button primary darkBackground color="black" label="About Centrifuge" alignSelf="start" href="/about" />
</Box>
</Col>
</Row>
</ResponsiveContent>



<ResponsiveContent breakpoints={["small"]}>
<Box gap="xlarge">

<Box gap="large">
<Text size="xlarge" weight={500} textAlign="center">We are the bridge that brings<br/>trillions from the real world to DeFi</Text>
<Button primary white label="About Centrifuge" alignSelf="center" href="/about" />
</Box>

<Image src={orbit} />

</Box>
</ResponsiveContent>

</Box>

<Box>
<ResponsiveContent breakpoints={["large", "medium"]}>
<Row>
<Col span={6}>
<Box direction="row" gap="medium" justify="center">
<Text textAlign="center"><em>‍🛠 built on Substrate</em></Text>
<Text textAlign="center"><em>⚡ powered by Ethereum</em></Text>
<Text textAlign="center"><em>🔗 bridged with Polkadot</em></Text>
</Box>
</Col>
</Row>
</ResponsiveContent>

<ResponsiveContent breakpoints={["small"]}>
<Box gap="medium">
<Text textAlign="center"><em>‍🛠 built on Substrate</em></Text>
<Text textAlign="center"><em>⚡ powered by Ethereum</em></Text>
<Text textAlign="center"><em>🔗 bridged with Polkadot</em></Text>
</Box>
</ResponsiveContent>
</Box>

</OrbitSection>

<!-- Social Buttons -->
<Section gap="large">

<Text color="dark-4" size="20px" textAlign="center" weight={500}>Join the Community</Text>

<Box>
<ResponsiveContent breakpoints={["large", "medium"]}>
<Box direction="row" gap="xxlarge" justify="center">
<SocialTipButton icon={<Image src={forum} />} tooltipContent="For long form and governance discussions" href="https://gov.centrifuge.io" />
<SocialTipButton icon={<Image src={discord} />} tooltipContent="The social hub of Centrifuge" href="https://centrifuge.io/discord" />
<SocialTipButton icon={<Image src={telegram} />} tooltipContent="The one stop Centrifuge channel" href="https://t.me/centrifuge_chat" />
<SocialTipButton icon={<Image src={twitter} />} tooltipContent="Follow us on Twitter" href="https://twitter.com/centrifuge" />
</Box>
</ResponsiveContent>

<ResponsiveContent breakpoints={["small"]}>
<Box gap="large">
<Box direction="row" gap="xlarge" justify="center">
<SocialTipButton icon={<Image src={forum} />} tooltipContent="For long form and governance discussions" href="https://gov.centrifuge.io" />
<SocialTipButton icon={<Image src={discord} />} tooltipContent="The social hub of Centrifuge" href="https://centrifuge.io/discord" />
</Box>
<Box direction="row" gap="xlarge" justify="center">
<SocialTipButton icon={<Image src={telegram} />} tooltipContent="The one stop Centrifuge channel" href="https://t.me/centrifuge_chat" />
<SocialTipButton icon={<Image src={twitter} />} tooltipContent="Follow us on Twitter" href="https://twitter.com/centrifuge" />
</Box>
</Box>
</ResponsiveContent>
</Box>

</Section>

<!-- Latest News -->
<Section>
<LatestNewsSection />
</Section>
