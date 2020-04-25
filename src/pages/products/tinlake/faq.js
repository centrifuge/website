import React from "react";
import {
  Box,
  Paragraph,
  Image,
  Heading,
  Text,
  Anchor,
  ResponsiveContext,
} from "grommet";

import Layout from "../../../components/Layout";
import SEO from "../../../components/SEO";
import Container from "../../../components/Container";
import FullWidthContainer from "../../../components/FullWidthContainer";
import Column from "../../../components/Column";
import Grid from "../../../components/Grid";
import { DesktopFAQBlock, MobileFAQBlock } from "../../../components/FAQ";

import tinlake_logo_small from "../../../images/tinlake/tinlake-logo-small.svg";
import faq_placeholder from "../../../images/faq-placeholder.svg";

const FAQPage = () => {
  const data = [
    {
      title: "Asset Originators",
      faqs: [
        {
          q: "What is an asset originator?",
          a:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          q: "How can I become an asset originator?",
          a:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          q: "What kinds of assets are needed?",
          a:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          q: "How can I become an asset originator?",
          a:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
    },
    {
      title: "Pricing Assets",
      faqs: [
        {
          q: "What is an asset originator?",
          a:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          q: "How can I become an asset originator?",
          a:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          q: "How can I become an asset originator?",
          a:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
    },
    {
      title: "Financial Mechanics",
      faqs: [
        {
          q: "What is an asset originator?",
          a:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          q: "How can I become an asset originator?",
          a:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          q: "What is an asset originator?",
          a:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          q: "How can I become an asset originator?",
          a:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
    },
  ];

  return (
    <Layout>
      <SEO />

      <Container>
        <Grid staggered mt="xlarge" mb="xlarge">
          <Column
            justifySelf="stretch"
            span={{ medium: 4, large: 4 }}
            margin={{ bottom: "large" }}
          >
            <Image src={faq_placeholder} />
          </Column>
          <Column justifySelf="stretch" span={{ medium: 8, large: 8 }}>
            <Image
              src={tinlake_logo_small}
              margin={{ bottom: "small" }}
              alignSelf="start"
            />
            <Heading level={2} margin={{ bottom: "medium" }} lined>
              Frequently Asked Questions
            </Heading>
            <Paragraph>
              Find a list of frequently asked questions on how Tinlake works
              below. Is your question not answered, feel free to reach out to us
              at{" "}
              <Anchor
                href="mailto:tinlake@centrifuge.io"
                primary
                label="tinlake@centrifuge.io"
              />
              .
            </Paragraph>
          </Column>
        </Grid>
      </Container>

      <FullWidthContainer>
        <ResponsiveContext.Consumer>
          {(size) =>
            size === "small" ? (
              <MobileFAQBlock data={data} />
            ) : (
              <DesktopFAQBlock data={data} />
            )
          }
        </ResponsiveContext.Consumer>
      </FullWidthContainer>
    </Layout>
  );
};

export default FAQPage;
