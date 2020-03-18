import React from "react";
import { Heading, Paragraph, Image, Box, Button } from "grommet";
import styled from "styled-components";

import { ExternalLink } from "../Links";
import Column, { Spacer } from "../Column";
import Grid from "../Grid";

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.15) !important;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    pointer-events: none;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
`;

const LinkedMediumImage = ({ imageId, slug, highlight }) => (
  <ExternalLink href={slug}>
    <ImageWrapper
      style={
        !highlight
          ? {
              width: "100%",
              paddingTop: "50%",
              margin: "0",
              overflow: "hidden"
            }
          : {}
      }
    >
      <Image
        style={
          !highlight
            ? {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%"
              }
            : { maxWidth: "100%", verticalAlign: "middle" }
        }
        src={imageId}
      />
    </ImageWrapper>
  </ExternalLink>
);

const PressArticle = ({ article }) => (
  <Box direction="row-responsive" gap="large">
    <Box basis="1/4">
      <Image
        style={{ width: "100%", maxWidth: 128 }}
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

const stripHtml = html => {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const truncate = (desc, length = 120) => {
  return `${String(desc).substring(0, length)}...`;
};

const MediumPost = ({ post }) => (
  <>
    <Box margin={{ bottom: "medium" }}>
      <LinkedMediumImage imageId={post.thumbnail} slug={post.link} />
    </Box>
    <PostInfo
      title={post.title}
      subtitle={post.description}
      link={post.link}
      heading="3"
    />
  </>
);

const HighlightPost = ({ post }) => (
  <Grid mt="" mb="xlarge" justify="" align="flex-start">
    <Column span={{ medium: 10, large: 6 }}>
      <Box margin={{ bottom: "medium" }}>
        <LinkedMediumImage
          highlight
          imageId={post.thumbnail}
          slug={post.link}
        />
      </Box>
    </Column>
    <Spacer width={2} />
    <Column span={{ medium: 10, large: 4 }}>
      <PostInfo
        title={post.title}
        subtitle={post.description}
        link={post.link}
      />
    </Column>
  </Grid>
);

const PostInfo = ({ title, subtitle, link, heading }) => (
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

export { PostInfo, HighlightPost, MediumPost, PressArticle, LinkedMediumImage };
