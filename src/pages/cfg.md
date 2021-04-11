---
title: Mining Centrifuge Token
description: Learn more about the different ways you can earn CFG
---

<!-- Imports -->

import MiningLink from "../components/MiningLink";

import monitor_icon from "../images/mining/monitor-icon.svg";
import reward_icon from "../images/mining/reward-icon.svg";
import smile_icon from "../images/mining/smile-icon.svg";
import telegram_logo from "../images/icons/telegram.svg";

<!-- Body -->

<Section>
<Row>
<Col span={5}>

<Box gap="medium">
<Box>

# Mining Centrifuge Token

The Centrifuge token is the powerhouse of the Centrifuge chain. As a substrate-based token bridged to Ethereum, it links Centrifuge with the biggest DeFi ecosystems in the world. Learn more about it in our [token summary](https://ir.centrifuge.io/static/rad-executive-summary-8e1bfe96bbae3981fe43e4bf1fbcec70.pdf).

</Box>
<Box>

![](../images/mining/mining-illustration.svg)

</Box>
<Box direction="row" justify="between">

<Text>For more discussion about CFG:</Text>
<Button plain label="Telegram" href="https://t.me/centrifuge_chat" target="_blank" rel="noreferrer noopener" icon={<Image src={telegram_logo} height="24px" />} />

</Box>
</Box>

</Col>

<Col span={2} margin={{ bottom: "xlarge" }}></Col>

<Col span={5}>

<Box gap="medium">
<MiningLink external title="Become a Validator" subtitle="For the tech savvy" icon={<Image src={monitor_icon} />} link="https://developer.centrifuge.io/chain/get-started/validate/" />

<MiningLink external title="CFG Rewards" subtitle="For investors and asset originators" icon={<Image src={reward_icon} />} link="https://medium.com/centrifuge/start-earning-radial-rad-rewards-for-tinlake-cbd98fcd8330" />

<MiningLink external title="Purchase CFG" subtitle="Indicate interest for future sales" icon={<Image src={smile_icon} />} link="https://ir.centrifuge.io" />
</Box>

</Col>
</Row>
</Section>
