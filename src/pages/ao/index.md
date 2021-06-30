---
dark: true
---

<!-- imports -->
import AOHero from "../../partials/ao/AOHero";
import SecondSection from "../../partials/ao/SecondSection";
import WhyCentrifuge from "../../partials/ao/WhyCentrifuge";
import AltairUtilityBlock from "../../components/AltairUtilityBlock";
import { ResponsivePlayer } from "../../components/News";

import borderless from "../../images/ao/borderless.svg";
import scalable from "../../images/ao/scalable.svg";
import balanced from "../../images/ao/balanced.svg";
import section_3 from "../../images/ao/section_3.mp4";
import docs from "../../images/ao/docs-wordmark.svg";

<AOHero />

<SecondSection />

<Section gap="large">

<Row>

<Col span={4} align="center">
<AltairUtilityBlock text={<Box align="center" gap="small" justify="start" flex="grow"><Text size="large" weight="bold">Borderless</Text><Box justify="center" flex="grow"><Text textAlign="center" color="dark-3" weight={500}>No gatekeeping from institutions or countries. This makes rates highly competitive</Text></Box></Box>} logo={borderless} />
</Col>
<Col span={4} align="center">
<AltairUtilityBlock text={<Box align="center" gap="small" justify="start" flex="grow"><Text size="large" weight="bold">Scalable</Text><Box justify="center" flex="grow"><Text textAlign="center" color="dark-3" weight={500}>Access capital at any point in, whether starting out or looking to scale</Text></Box></Box>} logo={scalable} />
</Col>
<Col span={4} align="center">
<AltairUtilityBlock text={<Box align="center" gap="small" justify="start" flex="grow"><Text size="large" weight="bold">Balanced</Text><Box justify="center" flex="grow"><Text textAlign="center" color="dark-3" weight={500}>Diversify your funding portfolio with DeFi. Make your business resilient, appealing long-term to the market, and on the front edge of tech.</Text></Box></Box>} logo={balanced} />
</Col>

</Row>
<Row>

<Col span={12}>
<Button primary brand label="Access Capital" href="/ao/form" />
</Col>

</Row>

</Section>

<Box background="black">
<video autoPlay loop muted>
<source src={section_3} type="video/mp4" />
</video>
</Box>

<Section gap="large">

<Row>
<Col span={2} />
<Col span={8}><ResponsivePlayer videoId="23nQWgO4AfA" /></Col>
</Row>

<Box align="center" gap="small">
<Text color="dark-3" weight={500} textAlign="center">For a deeper dive, head to our documentation:</Text>
<a href="https://docs.centrifuge.io" target="_blank"><Image src={docs} /></a>
</Box>

</Section>

<WhyCentrifuge />