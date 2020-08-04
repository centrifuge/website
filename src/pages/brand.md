---
title: Brand
---

import { Stack } from "grommet";

import wordmark from "../images/centrifuge-wordmark.svg";
import wordmarkLight from "../images/centrifuge-wordmark-light.svg";

<Section>
<Row>
<Col span={8}>

# Our Brand

Dark Wordmark on Light Background

<Stack fill anchor="center" margin={{ bottom: "large" }}>
<Box round="xsmall" elevation="small" height="medium" />
<Image height={48} src={wordmark} />
</Stack>

Light Wordmark on Dark Background

<Stack fill anchor="center" margin={{ bottom: "large" }}>
<Box background="black" round="xsmall" height="medium" style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)" }} />
<Image height={48} src={wordmarkLight} />
</Stack>

</Col>
</Row>
</Section>

<Section>
<Row>
<Col span={8}>

# Axis Design System

Single source of truth used to build user interfaces for Centrifuge

<Box margin={{ top: "medium" }} gap="medium" direction="row">
<Button plain href="https://axis.centrifuge.io/" label="Visit the Storybook" />
<Button plain href="https://github.com/centrifuge/axis" label="View the GitHub repository" />
</Box>

</Col>
</Row>
</Section>