import React from "react";
import { Heading, Paragraph, Image, Box, Button } from "grommet";
import styled from "styled-components";

import { ExternalLink } from "../Links";
import Column, { Spacer } from "../Column";
import Grid from "../Grid";

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 2;
    border: 1px solid rgba(0, 0, 0, 0.15) !important;
  }
`;

const LinkWrapper = styled.a`
  text-decoration: none;
  color: inherit;
`;

const NewsCard = ({ link, children }) => (
  <LinkWrapper href={link}>
    <Box
      gap="xsmall"
      pad=""
      round="xsmall"
      elevation="medium"
      margin={{ bottom: "large" }}
    >
      {children}
    </Box>
  </LinkWrapper>
);

const CardImage = ({ src }) => (
  <Box
    round={{ corner: "top", size: "xsmall" }}
    height="200px"
    width="100%"
    justify="center"
    style={{
      backgroundImage: `url("${src}")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}
  />
);

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
                width: "100%",
                zIndex: 1
              }
            : {
                maxWidth: "100%",
                verticalAlign: "middle",
                zIndex: 1
              }
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
  <Grid mt="" mb="large" justify="" align="flex-start">
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
  <LinkWrapper target="_blank" rel="noopener noreferrer" href={link}>
    <Heading level={heading || "1"} lined={heading !== "3" ? true : false}>
      {title}
    </Heading>
    <Paragraph margin={{ bottom: "medium" }}>{subtitle}</Paragraph>
    <Button plain target="_blank" rel="noopener noreferrer" href={link}>
      Read more...
    </Button>
  </LinkWrapper>
);

const LatestNews = ({ posts }) => (
  <Grid mt="" mb="">
    {posts.map((post, index) => (
      <Column span={{ small: 12, medium: 4, large: 4 }} key={index}>
        <NewsCard link={post.link}>
          <CardImage src={post.thumbnail} />
          <Box
            justify="center"
            align="center"
            height="96px"
            pad={{
              horizontal: "medium",
              top: "medium",
              bottom: "0px"
            }}
          >
            <Heading level={3} margin="0px">
              {post.title}
            </Heading>
          </Box>
          <Box
            justify="center"
            align="center"
            height="96px"
            pad={{
              horizontal: "medium",
              top: "medium",
              bottom: "0px"
            }}
          >
            <Paragraph margin="0px">{post.description}</Paragraph>
          </Box>
          <Box justify="center" align="start" pad="medium">
            <Button
              plain
              target="_blank"
              rel="noopener noreferrer"
              href={post.link}
            >
              Read more...
            </Button>
          </Box>
        </NewsCard>
      </Column>
    ))}
  </Grid>
);

export {
  PostInfo,
  HighlightPost,
  MediumPost,
  PressArticle,
  LinkedMediumImage,
  LatestNews
};
