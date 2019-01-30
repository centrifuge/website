import React from "react";
import { Heading, Paragraph, Image, Box, Button } from "grommet";

import { ExternalLink } from "../Links";
import { MEDIUM_URL, MEDIUM_CDN } from "../../helpers";
import Column, { Spacer } from "../Column";
import Grid from "../Grid";

const LinkedMediumImage = ({ imageId, slug }) => (
  <ExternalLink href={`${MEDIUM_URL}${slug}`}>
    <Image style={{ maxWidth: "100%" }} src={`${MEDIUM_CDN}/${imageId}`} />
  </ExternalLink>
);

const PressArticle = ({ article }) => (
  <Box direction="row-responsive" gap="large">
    <Box basis="1/4">
      <Image
        style={{ width: "100%", maxWidth: "128px" }}
        src={article.agency.logo.file.url}
        alt={article.agency.logo.file.fileName}
      />
    </Box>
    <Box basis="3/4">
      <PostInfo
        title={article.articleTitle}
        subtitle={article.articleSummary.articleSummary}
        link={article.articleLink}
        heading="3"
      />
    </Box>
  </Box>
);

const MediumPost = ({ post }) => (
  <>
    <Box margin={{ bottom: "medium" }}>
      <LinkedMediumImage
        imageId={post.node.virtuals.previewImage.imageId}
        slug={post.node.uniqueSlug}
      />
    </Box>
    <PostInfo
      title={post.node.title}
      subtitle={post.node.virtuals.subtitle}
      link={`${MEDIUM_URL}${post.node.uniqueSlug}`}
      heading="3"
    />
  </>
);

const HighlightPost = ({ post }) => (
  <Grid align="start" mt="">
    <Column span={{ medium: 10, large: 6 }}>
      <LinkedMediumImage
        imageId={post.virtuals.previewImage.imageId}
        slug={post.uniqueSlug}
      />
      <Box margin={{ top: "medium", bottom: "medium" }}>
        <div>
          <Button
            plain
            target="_blank"
            rel="noopener noreferrer"
            href={MEDIUM_URL}
          >
            Centrifuge on Medium
          </Button>
        </div>
      </Box>
    </Column>
    <Spacer width={2} />
    <Column span={{ medium: 10, large: 4 }}>
      <PostInfo
        title={post.title}
        subtitle={post.virtuals.subtitle}
        link={`${MEDIUM_URL}${post.uniqueSlug}`}
      />
    </Column>
  </Grid>
);

const PostInfo = ({ title, subtitle, link, heading }) => (
  <>
    <Heading level={heading || "1"} lined={heading !== "3" ? true : false}>
      {title}
    </Heading>
    <Paragraph margin={{ bottom: "medium" }}>{subtitle}</Paragraph>
    <div>
      <Button
        margin={{ bottom: "medium" }}
        plain
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        Read more...
      </Button>
    </div>
  </>
);

export { PostInfo, HighlightPost, MediumPost, PressArticle, LinkedMediumImage };
