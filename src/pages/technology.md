---
title: Technology
---

<!-- Imports -->

import { Slack, Github } from "grommet-icons";

import Animation from "../components/Animation";
import Repos from "../components/Repos";

import block1Animation from "../lottie/Ecosystem_Q.json";

<!-- Block 1 -->
<Section>
<Row>
<Col span={6}>

# Contribute to Centrifuge

Centrifuge is open source software. You can find all of our code on [github.com/centrifuge](https://github.com/centrifuge).

We want the community to build on our code: use it, fork it, imagine new use cases, suggest improvements.

We welcome all contributions!

<Box direction="row" gap="large" margin={{ vertical: "small" }}>
<Button
plain
href="https://github.com/centrifuge"
target="_blank"
rel="noreferrer noopener"
icon={<Github />}
label="GitHub"
/>
<Button
plain
href="https://centrifuge-io.slack.com/join/shared_invite/enQtNDk1MzkwODM4OTgxLWRlNTU4NDQzOWIwYWEzNGRhN2UzMzQwNThjZjI0ZmIxMTU4NmQwMjc2ZDBkOTEyNWJhMjE4MzA2NTE5MWU1NWE"
target="_blank"
rel="noreferrer noopener"
icon={<Slack />}
label="Slack"
/>
</Box>

</Col>
<Col span={6}>
<Animation file={block1Animation} />
</Col>
</Row>
</Section>

<!-- Block 2 -->
<Section>
<Repos />
</Section>

<!-- Block 3 -->
<Section>
<Row>
<Col span={2}>
</Col>
<Col span={8}>

# Code of Conduct

Creating a new system for the global financial supply chain is only possible through the collaboration of a global ecosystem and community of companies, groups, organizations, and individuals. We want to come together to exchange ideas and build Centrifuge as an inclusive, welcoming, and safe community of collaborators, operators, investors, and users. Harmful or discriminating behavior by anyone will not be tolerated.

Community members should be judged by their actions, not criteria such as age, race, nationality, sex, sexual orientation, gender, gender identity or expression, disability, physical appearance, religion (or lack thereof), degrees, geographic location, or position.

We will not tolerate any discriminating behaviour and will keep our platforms free from policy violations, either deleting the content or hiding it from view.

</Col>
</Row>
</Section>

<!-- Block 4 -->
<Section>
<Row>
<Col span={3}></Col>
<Col span={6}>
<Heading lined textAlign="center">
Come join our team of experienced, smart, and nice people building the future of B2B software!
</Heading>
<Button primary alignSelf="center" label="Join the Team" href="/careers" />
</Col>
</Row>
</Section>
