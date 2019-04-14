import React from "react";
import { Heading, Paragraph, Image, Box, Button, ResponsiveContext } from "grommet";

import Column, { Spacer } from "../Column";
import Grid from "../Grid";
import imgGetStarted2 from "../../images/getstarted/getstarted2.png";
import { RichTextRenderer } from "../../helpers";

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
  <ResponsiveContext.Consumer>
    {size => 
      (size === "small") || (size === "medium") 
      ? (
        <React.Fragment>
          <ImageGetStartedSub />
          <Grid noMargin align="start">
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
        </React.Fragment>
      )
      : (
        <React.Fragment>
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
        </React.Fragment>
      )
    }
  </ResponsiveContext.Consumer>
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
