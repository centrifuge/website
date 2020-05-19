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
<Row gap="100">
<Col span={4} align="start">

# Simple Lending for Next Generation of Finance

</Col>
<Col span={4} align="start">
<p margin={{ top: "0" }}>
DeFi is building the first internet-native Global Business Graph, powered by decentralized currencies.
</p>

When you invest in DeFi, you invest in the future of finance.

</Col>
<Col span={4} align="start">
<p margin="0">
We are providing some of the most powerful finanical tools to help investors make a safe investment and attractive yield.
</p>
</Col>
</Row>
</Section>

<!-- Steps -->
<Section>
<HorizontalSteps steps={[{ image: investor_1, text: "Choose a Tinlake pool to invest in" }, { image: investor_2, text: "Build your risk / return portfolio" }, { image: investor_3, text: "Lend against tokenized collateral assets" }, { image: investor_4, text: "Redeem after repayment to earn an attractive yield" }]} />
</Section>

<!-- Reach Out -->
<ReachOutSection>
{(toggleModal) => <InvestorContactForm toggleModal={toggleModal} />}
</ReachOutSection>
