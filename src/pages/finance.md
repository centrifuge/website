---
title: Borrow
description: Collateralize your invoices, royalties, and other real-world assets with Centrifuge to access a new source of liquidity. 
---

<!-- Imports -->

import HorizontalSteps from "../components/HorizontalSteps";
import ReachOutSection from "../partials/home/ReachOutSection";
import BorrowerContactForm from "../partials/home/BorrowerContactForm";

import borrower_1 from "../images/home/step_images/borrower_1.svg";
import borrower_2 from "../images/home/step_images/borrower_2.svg";
import borrower_3 from "../images/home/step_images/borrower_3.svg";

<!-- Intro -->
<Section>

<ResponsiveContent breakpoints={["medium", "large"]}>
<Row gap="100">
<Col span={4} align="start">

# Your Decentralized Line of Credit

</Col>
<Col span={4} align="start">
<p margin="0">
At any given moment, $30 Trillion is locked up in invoices and other non liquid assets. Asset Originators are businesses that help companies and individuals access this liquidity.
</p>
</Col>
<Col span={4} align="start">
<p margin="0">
Together with DeFi, Centrifuge helps make these illiquid assets accessible.
</p>
</Col>
</Row>
</ResponsiveContent>

<ResponsiveContent breakpoints={["small"]}>

# Your Decentralized Line of Credit

At any given moment, $30 Trillion is locked up in invoices and other non liquid assets. Asset Originators are businesses that help companies and individuals access this liquidity.

Together with DeFi, Centrifuge helps make these illiquid assets accessible.

</ResponsiveContent>

</Section>

<!-- Steps -->
<Section>
<HorizontalSteps steps={[{ image: borrower_1, text: "Tokenize your assets on the Centrifuge Chain" }, { image: borrower_2, text: "Pool assets in Tinlake, our asset-backed lending protocol" }, { image: borrower_3, text: "Borrow money with DeFi" }]} />
</Section>

<!-- Reach Out -->
<ReachOutSection linkLabel="Learn More" linkHref="/products/tinlake">
{(toggleModal) => <BorrowerContactForm toggleModal={toggleModal} />}
</ReachOutSection>

<!-- User Stories -->
<Section>
<Row gap="100">
<Col span={4}>

# User Stories

</Col>
</Row>

<ResponsiveContent breakpoints={["medium", "large"]}>
<Row gap="100" mb="medium">
<Col span={4}>
<Image src="../images/home/paperchain_logo.svg" alignSelf="start" />
</Col>
<Col span={4}>
<Image src="../images/home/consolfreight_logo.svg" alignSelf="start" />
</Col>
<Col span={4}>
<Image src="../images/home/shuttleone_logo.svg" alignSelf="start" />
</Col>
</Row>
</ResponsiveContent>

<Row gap="100">
<Col span={4} align="start">

<ResponsiveContent breakpoints={["small"]}>
<Image src="../images/home/paperchain_logo.svg" alignSelf="start" margin={{ bottom: "medium" }} />
</ResponsiveContent>

“By pricing the streaming data and connecting that to programmatic banking solutions like decentralized finance technology, we can build financial products that get money faster to creators at a fraction of the cost of traditional finance.”

**Daniel Dewar**, Co-Founder of Paperchain

<Box direction="row" gap="small">
<Image src="../images/home/medium_small_logo.svg" />

<a href="https://medium.com/centrifuge/centrifuge-tinlake-and-paperchain-join-forces-to-accelerate-music-streaming-revenues-c83324d116e7" target="_blank" rel="noreferrer noopener">Read More</a>

</Box>

</Col>
<Col span={4} align="start">

<ResponsiveContent breakpoints={["small"]}>
<Image src="../images/home/consolfreight_logo.svg" alignSelf="start" margin={{ top: "xlarge", bottom: "medium" }} />
</ResponsiveContent>

“DeFi is especially important in moments of emergency: disaster relief shipments need quick and reliable processing. Tinlake would allow us to increase operational efficiencies and decrease the operational cost on this future shipment.”

**Alejandro Gutierrez**, Co-Founder of ConsolFreight

<Box direction="row" gap="small">
<Image src="../images/home/medium_small_logo.svg" />

<a href="https://medium.com/centrifuge/the-first-drop-for-defi-23e5240cadf2" target="_blank" rel="noreferrer noopener">Read More</a>

</Box>

</Col>
<Col span={4} align="start">

<ResponsiveContent breakpoints={["small"]}>
<Image src="../images/home/shuttleone_logo.svg" alignSelf="start" margin={{ top: "xlarge", bottom: "medium" }} />
</ResponsiveContent>

“Our customer HappyFresh operates in major markets in South East Asia. To cater to increased demand, they need to have access to new liquidity markets fast. Combining our frictionless payments with Centrifuge Tinlake seemed like the logical step to access liquidity in DeFi.”

**HongZhuang Lim**, CEO of ShuttleOne

<Box direction="row" gap="small">
<Image src="../images/home/medium_small_logo.svg" />

<a href="https://medium.com/centrifuge/defi-in-the-coronavirus-pandemic-from-blockchain-to-the-supermarket-83a09ff4762" target="_blank" rel="noreferrer noopener">Read More</a>

</Box>

</Col>
</Row>
</Section>

<Section>
<Text size="20px" alignSelf="center">Any Questions Left?</Text>
<Text size="20px" alignSelf="center">Please get in touch: <a href="mailto:tinlake@centrifuge.io">tinlake@centrifuge.io</a></Text>
</Section>
