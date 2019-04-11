import React from "react";
import { Heading, Paragraph, Image, Box, Button } from "grommet";

import Column, { Spacer } from "../Column";
import Grid from "../Grid";
import imgGetStarted2 from "../../images/getstarted/getstarted2.png";
import { breakpoints } from "../Theme/theme";
import styled from "styled-components";
import { RichTextRenderer } from "../../helpers";

const MobileBuildBox = styled(Box)`
  display: block;
  @media only screen and (min-width: ${breakpoints.medium.value + 1}px) {
    display: none;
  }
`
const ScreenBuildBox = styled(Box)`
  display: none;
  @media only screen and (min-width: ${breakpoints.medium.value + 1}px) {
  display: block;
}
`

const ProvidedFunctionality = ({ functionality, img }) => (
  <Box direction="column" gap="large">
    <Box style={{height: 100}}>
      <Image
        fit="contain"
        style={{ width: "100%", maxWidth: 128 }}
        src={functionality.functionality.logo.file.url}
        alt={functionality.functionality.logo.file.fileName}
      />
    </Box>
    <Box >
      <FunctionalityInfo
        title={functionality.functionalityTitle}
        subtitle={functionality.functionalitySummary.functionalitySummary}
        heading="3"
      />
    </Box>
  </Box>
);

const FunctionalityInfo = ({ title, subtitle, link, heading }) => (
  <div>
    <Heading level={heading || "1"} lined={heading !== "3" ? true : false}>
      {title}
    </Heading>
    <Paragraph margin={{ bottom: "medium" }}>{subtitle}</Paragraph>
  </div>
);

const BuildInfo = ({ title, subtitle, link, heading }) => (
  <div>
    <Heading level={heading || "1"} lined={heading !== "3" ? true : false}>
      {title}
    </Heading>
    <Paragraph margin={{ bottom: "medium" }}>{subtitle}</Paragraph>
    <Button plain target="_blank" rel="noopener noreferrer" href={link}>
      Read more...
    </Button>
  </div>
);

const BuildItem = ({blocks }) => (
  <React.Fragment>
    <MobileBuildBox>
      <ImageGetStartedSub />
      <Grid mt="" mb="" align="start">
        <Spacer />
        {blocks.map((block, index) => (
          <React.Fragment key={index}>
            <Column span={{ medium: 1 }} />
            <Column mobileSpaced span={{ medium: 5, large: 3 }}>
              <RichTextRenderer block={block.content} />
            </Column>
          </React.Fragment>
        ))}

        <Spacer />
        {blocks.map((block, index) => (
          <React.Fragment key={index}>
            <Column span={{ medium: 1 }} />
            <Column mobileSpaced span={{ medium: 5, large: 3 }}>
              <RichTextRenderer block={block.content} />
            </Column>
          </React.Fragment>
        ))}
      </Grid>
    </MobileBuildBox>
    <ScreenBuildBox>
      <Grid mt="" mb="" align="start">
        {blocks.map((block, index) => (
          <React.Fragment key={index}>
            <Column span={{ medium: 1 }} />
            <Column mobileSpaced span={{ medium: 5, large: 3 }}>
              <RichTextRenderer block={block.content} />
            </Column>
          </React.Fragment>
        ))}
      </Grid>
      <ImageGetStartedSub />
      <Grid mt="" mb="" align="start">
        {blocks.map((block, index) => (
          <React.Fragment key={index}>
            <Column span={{ medium: 1 }} />
            <Column mobileSpaced span={{ medium: 5, large: 3 }}>
              <RichTextRenderer block={block.content} />
            </Column>
          </React.Fragment>
        ))}
      </Grid>
    </ScreenBuildBox>

  </React.Fragment>

)

const ImageGetStartedSub = () => (
  <Box 
    align="center"
    style={{ marginTop: 50, marginBottom: 50 }}
  >
    <Image
      style={{ width: "80%", maxWidth: 1184 }}
      src={imgGetStarted2}
      alt={'image'}
    />
  </Box>
)
export { FunctionalityInfo, ProvidedFunctionality, BuildInfo, ImageGetStartedSub, BuildItem};
