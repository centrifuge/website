import React from "react";
import { Heading, Paragraph, Image, Box, Button, ResponsiveContext } from "grommet";

import Column, { Spacer } from "../Column";
import Grid from "../Grid";
import imgGetStartedLarge from "../../images/getstarted/getstarted-big.svg";
import imgGetStartedSmall from "../../images/getstarted/getstarted-small.svg";

const ProvidedFunctionality = ({ functionality, img }) => (
  <Box direction="column" gap="large">
    <Box style={{height: 100}}>
      <Image
        fit="contain"
        style={{ width: "100%", maxWidth: 128 }}
        src={functionality.image.file.url}
        alt={functionality.image.file.fileName}
      />
    </Box>
    <Box >
      <FunctionalityInfo
        title={functionality.functionality.contentAST.content[0].content[0].value}
        subtitle={functionality.functionality.contentAST.content[1].content[0].value}
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
    <Paragraph margin={{ bottom: "xlarge" }}>{subtitle}</Paragraph>
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
          <ImageGetStartedSub src={imgGetStartedSmall}/>
          <Grid noMargin align="start" >
            <Spacer />
            {blocks.slice(0,2).map((block, index) => (
              <React.Fragment key={index}>
                <Column span={{ medium: 1 }} />
                <Column mobileSpaced span={{ medium: 5, large: 3 }}>
                  <FunctionalityInfo
                    title={block.content.contentAST.content[0].content[0].value}
                    subtitle={block.content.contentAST.content[1].content[0].value}
                    heading="3"
                  />
                </Column>
              </React.Fragment>
            ))}

            <Spacer />
            {blocks.slice(3,5).map((block, index) => (
              <React.Fragment key={index}>
                <Column span={{ medium: 1 }} />
                <Column mobileSpaced span={{ medium: 5, large: 3 }}>
                  <FunctionalityInfo
                    title={block.content.contentAST.content[0].content[0].value}
                    subtitle={block.content.contentAST.content[1].content[0].value}
                    heading="3"
                  />
                </Column>
              </React.Fragment>
            ))}
          </Grid>          
        </React.Fragment>
      )
      : (
        <React.Fragment>
          <Grid noMargin align="start">
            {blocks.slice(0,3).map((block, index) => (
              <React.Fragment key={index}>
                <Column span={{ medium: 1 }} />
                <Column mobileSpaced span={{ medium: 5, large: 3 }}>
                  <FunctionalityInfo
                    title={block.content.contentAST.content[0].content[0].value}
                    subtitle={block.content.contentAST.content[1].content[0].value}
                    heading="3"
                  />
                </Column>
              </React.Fragment>
            ))}
          </Grid>
          <ImageGetStartedSub src={imgGetStartedLarge}/>
          <Grid noMargin align="start">
            {blocks.slice(3,6).map((block, index) => (
              <React.Fragment key={index}>
                <Column span={{ medium: 1 }} />
                <Column mobileSpaced span={{ medium: 5, large: 3 }}>
                  <FunctionalityInfo
                    title={block.content.contentAST.content[0].content[0].value}
                    subtitle={block.content.contentAST.content[1].content[0].value}
                    heading="3"
                  />
                </Column>
              </React.Fragment>
            ))}
          </Grid>
        </React.Fragment>
      )
    }
  </ResponsiveContext.Consumer>
)

const ImageGetStartedSub = ({ src }) => (
  <Box 
    align="center"
    style={{ marginTop: 50, marginBottom: 50 }}
  >
    <Image
      style={{ width: "80%", maxWidth: 1184 }}
      src={src}
      alt={'image'}
    />
  </Box>
)
export { FunctionalityInfo, ProvidedFunctionality, BuildInfo, ImageGetStartedSub, BuildItem};
