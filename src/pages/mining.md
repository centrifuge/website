---
title: Radial Mining
description: Learn more about the different ways you can obtain Radial
---

<!-- Imports -->

import MiningLink from "../components/MiningLink";

import discourse_icon from "../images/mining/discourse-icon.svg";
import monitor_icon from "../images/mining/monitor-icon.svg";
import reward_icon from "../images/mining/reward-icon.svg";
import smile_icon from "../images/mining/smile-icon.svg";

<!-- Body -->

<Section>
<Row>
<Col span={5}>

<Box gap="medium">
<Box>

# Mining Radial

The Radial token is the powerhouse of the Centrifuge chain. As a substrate-based token bridged to Ethereum, it links Centrifuge with the biggest DeFi ecosystems in the world. Learn more about it in our [token summary](https://ir.centrifuge.io/static/rad-executive-summary-1d6380e77c1518e69336704bd17cea99.pdf).

</Box>
<Box>

![](../images/mining/mining-illustration.svg)

</Box>
<Box direction="row" justify="between">

<Text>If you have further questions:</Text>
<Button plain label="Discourse" href="https://discourse.centrifuge.io" target="_blank" rel="noreferrer noopener" icon={<Image src={discourse_icon} />} />

</Box>
</Box>

</Col>

<Col span={2} margin={{ bottom: "xlarge" }}></Col>

<Col span={5}>

<Box gap="medium">
<MiningLink external title="Become a Validator" subtitle="For the tech savvy" icon={<Image src={monitor_icon} />} link="https://developer.centrifuge.io/chain/get-started/validate/" />

<MiningLink external title="Radial Rewards" subtitle="For investors and asset originators" icon={<Image src={reward_icon} />} link="https://medium.com/centrifuge/start-earning-radial-rad-rewards-for-tinlake-cbd98fcd8330" />

<MiningLink external title="Bounty Program" subtitle="Build a community with us" icon={<Image src={smile_icon} />} />
</Box>

</Col>
</Row>
</Section>