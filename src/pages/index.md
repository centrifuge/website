<!-- Imports -->

import LatestNewsSection from '../partials/home/LatestNewsSection';
import OrbitSection from '../partials/home/OrbitSection';
import Hero from '../components/Hero';
import SocialTipButton from '../components/SocialTipButton';

import illustration_1 from "../images/home/illustrations/1.svg";
import illustration_2 from "../images/home/illustrations/2.svg";
import orbit from "../images/home/orbit.svg";

import forum from "../images/social-icons/forum.svg";
import discord from "../images/social-icons/discord.svg";
import telegram from "../images/social-icons/telegram.svg";
import twitter from "../images/social-icons/twitter.svg";

import play_button from "../images/play_button.svg";

<!-- Intro -->
<Hero />

<Section>
<Box fill="horizontal" border />
</Section>

<Section gap="large">

<Row>

<Col span={{ large: 3 }}>
<Text size="large" textAlign="left">
Centrifuge bridges assets like invoices, real estate, and royalties to DeFi.
</Text>
</Col>

<Col span={{ large: 1 }} margin={{ bottom: "large" }} />
<Col span={{ large: 8 }}>
<Box style={{ position: "relative" }}>
<Image src={illustration_1} />

<ResponsiveContent breakpoints={["large"]}>
<Button plain icon={<Image src={play_button} />} style={{ position: "absolute", top: "52%", left: "16%", transform: "translateY(-50%)" }} href="https://youtu.be/23nQWgO4AfA" target="_blank" rel="noreferrer noopener" />
</ResponsiveContent>

<ResponsiveContent breakpoints={["medium"]}>
<Button plain icon={<Image src={play_button} />} style={{ position: "absolute", top: "52%", left: "17%", transform: "translateY(-50%)" }} href="https://youtu.be/23nQWgO4AfA" target="_blank" rel="noreferrer noopener" />
</ResponsiveContent>

<ResponsiveContent breakpoints={["small"]}>
<Button plain icon={<Image src={play_button} width="30px" />} style={{ position: "absolute", top: "52%", left: "16%", transform: "translateY(-50%)" }} href="https://youtu.be/23nQWgO4AfA" target="_blank" rel="noreferrer noopener" />
</ResponsiveContent>

</Box>
</Col>

</Row>

<Row>

<Col span={{ large: 5 }} align="stretch">
<Box justify="around" flex="grow">
<Text size="large" textAlign="left">
Borrowers can finance their real-world assets without banks or other intermediaries.
</Text>

<ResponsiveContent breakpoints={["large"]}>
<Text size="large" textAlign="left">
Providing liquidity is open to everyone. Investors receive an return in stablecoins plus CFG liquidity rewards.
</Text>
</ResponsiveContent>

</Box>
</Col>

<Col span={{ large: 1 }} margin={{ bottom: "large" }} />
<Col span={{ large: 6 }}>
<Image src={illustration_2} />
</Col>

</Row>

<ResponsiveContent breakpoints={["small", "medium"]}>
<Row>
<Col span={12}>
<Text size="large" textAlign="left">
Providing liquidity is open to everyone. Investors receive an return in stablecoins plus CFG liquidity rewards.
</Text>
</Col>
</Row>
</ResponsiveContent>

</Section>

<!-- Orbit Section -->
<OrbitSection gap="large">
<Row>
<Col span={6}>
<Image src={orbit} />
</Col>
<Col span={1} margin={{ bottom: "large" }} />
<Col span={5}>
<Box gap="large">
<Text size="xlarge" weight={500} textAlign="left">We are the bridge that brings<br/>trillions from he real world to DeFi</Text>

<ResponsiveContent breakpoints={["large", "medium"]}>
<Button primary white label="About Centrifuge" alignSelf="start" href="/about" />
</ResponsiveContent>
<ResponsiveContent breakpoints={["small"]}>
<Button primary color="black" label="About Centrifuge" href="/about" />
</ResponsiveContent>

</Box>
</Col>
</Row>

<Box>
<ResponsiveContent breakpoints={["large", "medium"]}>
<Box direction="row" gap="medium" justify="center">
<Text textAlign="center"><em>‍🛠 built on Substrate</em></Text>
<Text textAlign="center"><em>⚡ powered by Ethereum</em></Text>
<Text textAlign="center"><em>🔗 bridged with Polkadot</em></Text>
</Box>
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
<Section gap="medium">

<Text color="dark-4" size="large" textAlign="center">Join the Community</Text>

<ResponsiveContent breakpoints={["large", "medium"]}>
<Box direction="row" gap="xlarge" justify="center">
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

</Section>

<!-- Latest News -->
<Section>
<LatestNewsSection />
</Section>
