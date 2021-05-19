import AltairHero from "../components/AltairHero";
import AltairUtilityBlock from "../components/AltairUtilityBlock";
import JoinAltairCommunity from "../components/JoinAltairCommunity";

import token_distribution from "../images/altair/token_distribution.svg"; 
import air_1 from "../images/altair/air-token-logos/1.svg";
import air_2 from "../images/altair/air-token-logos/2.svg";
import air_3 from "../images/altair/air-token-logos/3.svg";
import air_4 from "../images/altair/air-token-logos/4.svg";

<AltairHero />

<Section gap="large">

<Box alignSelf="center">
<Text size="xlarge" weight={900} textAlign="center">AIR: The Altair Network Token</Text>
<Text size="large" weight={500} textAlign="center">The AIR token powers Altair with the utility to:</Text>
</Box>

<Row>

<Col span={3} align="center"><AltairUtilityBlock text="Govern Altair Development" logo={air_1} /></Col>
<Col span={3} align="center"><AltairUtilityBlock text="Pay for transaction fees" logo={air_2} /></Col>
<Col span={3} align="center"><AltairUtilityBlock text="Secure the chain" logo={air_3} /></Col>
<Col span={3} align="center"><AltairUtilityBlock text="Reward adoption" logo={air_4} /></Col>

</Row>

</Section>

<Section gap="large">

<Box alignSelf="center">
<Text size="xlarge" weight={900} textAlign="center">Token Distribution Snapshot</Text>
<Text size="large" textAlign="center">425,000,000 AIR</Text>
</Box>

<Image src={token_distribution} />

</Section>

<JoinAltairCommunity />