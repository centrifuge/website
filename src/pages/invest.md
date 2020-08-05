---
title: Invest | Earn Yield on Asset Pools with Centrifuge
description: "Centrifuge introduces bankless financing: invest in diversified, asset-backed pools for attractive yields."
---

<!-- Imports -->

import HorizontalSteps from "../components/HorizontalSteps";
import ReachOutSection from "../partials/home/ReachOutSection";
import InvestorContactForm from "../partials/home/InvestorContactForm";

import investor_1 from "../images/home/step_images/investor_1.svg";
import investor_2 from "../images/home/step_images/investor_2.svg";
import investor_3 from "../images/home/step_images/investor_3.svg";
import investor_4 from "../images/home/step_images/investor_4.svg";

<!-- Intro -->
<Section>

<ResponsiveContent breakpoints={["medium", "large"]}>
<Row gap="100">

<Col span={4} align="start">

# High Yield, Low Risk, Short Term

</Col>
<Col span={4} align="start">
<p margin={{ top: "0" }}>
With DeFi, Centrifuge is building transparent securitizations and continuous returns, 24/7/365. Investors will have access to new asset classes previously reserved for big banks. 
</p>

When you invest with Centrifuge, you invest in the future of finance.

</Col>
<Col span={4} align="start">
<p margin="0">
We are providing some of the most powerful finanical tools to help investors make a safe investment and attractive yield.
</p>
</Col>
</Row>

</ResponsiveContent>

<ResponsiveContent breakpoints={["small"]}>

# High Yield, Low Risk, Short Term

With DeFi, Centrifuge is building transparent securitizations and continuous returns, 24/7/365. Investors will have access to new asset classes previously reserved for big banks. 

When you invest with Centrifuge, you invest in the future of finance.

We are providing some of the most powerful finanical tools to help investors make a safe investment and attractive yield.

</ResponsiveContent>

</Section>

<!-- Steps -->
<Section>
<HorizontalSteps steps={[{ image: investor_1, text: "Choose a Tinlake pool to invest in" }, { image: investor_2, text: "Build your risk / return portfolio" }, { image: investor_3, text: "Lend against tokenized collateral assets" }, { image: investor_4, text: "Redeem after repayment to earn an attractive yield" }]} />
</Section>

<!-- Reach Out -->
<ReachOutSection linkLabel="Open Tinlake" linkHref="https://tinlake.centrifuge.io/" targetBlank>
{(toggleModal) => <InvestorContactForm toggleModal={toggleModal} />}
</ReachOutSection>

<Section>
<Text size="20px" alignSelf="center">Any Questions Left?</Text>
<Text size="20px" alignSelf="center">Please get in touch: <a href="mailto:tinlake@centrifuge.io">tinlake@centrifuge.io</a></Text>
</Section>
