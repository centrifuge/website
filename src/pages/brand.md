---
title: Brand Assets
---

import { Stack } from "grommet";

import centrifugeWordmark from "../images/centrifuge-wordmark.svg";
import centrifugeWordmarkLight from "../images/centrifuge-wordmark-light.svg";
import centrifugeMarquee from "../images/centrifuge-marquee.svg";
import centrifugeMarqueeLight from "../images/centrifuge-wordmark-light.svg";

import altairWordmark from "../images/altair-wordmark.svg";
import altairWordmarkLight from "../images/altair-wordmark-light.svg";
import altairMarquee from "../images/altair-marquee.svg";
import altairMarqueeLight from "../images/altair-marquee-light.svg";

<Section>
<Row>
<Col span={8}>

# Centrifuge Brand

Centrifuge wordmark and marquee on light background

<Stack fill anchor="center" margin={{ bottom: "large" }}>
<Box round="xsmall" elevation="small" height="medium" />
<Image height={48} src={centrifugeWordmark} />
<Image height={48} src={centrifugeMarquee} />
</Stack>

Centrifuge wordmark and marquee on dark background

<Stack fill anchor="center" margin={{ bottom: "large" }}>
<Box background="black" round="xsmall" height="medium" style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)" }} />
<Image height={48} src={centrifugeWordmarkLight} />
<Image height={48} src={centrifugeMarqueeLight} />
</Stack>

</Col>
</Row>
</Section>

<Section>
<Row>
<Col span={8}>

# Altair Brand

Altair wordmark and marquee on light background

<Stack fill anchor="center" margin={{ bottom: "large" }}>
<Box round="xsmall" elevation="small" height="medium" />
<Image height={48} src={altairWordmark} />
<Image height={48} src={altairMarquee} />
</Stack>

Altair wordmark and marquee on dark background

<Stack fill anchor="center" margin={{ bottom: "large" }}>
<Box background="black" round="xsmall" height="medium" style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)" }} />
<Image height={48} src={altairWordmarkLight} />
<Image height={48} src={altairMarqueeLight} />
</Stack>

</Col>
</Row>
</Section>

<Section>
<Row>
<Col span={8}>

# Axis Design System

The single source of truth to build user interfaces for Centrifuge

<Box margin={{ top: "medium" }} gap="medium" direction="row">
<Button plain href="https://axis.centrifuge.io/" label="Visit the Storybook" />
<Button plain href="https://github.com/centrifuge/axis" label="View the GitHub repository" />
</Box>

</Col>
</Row>
</Section>
