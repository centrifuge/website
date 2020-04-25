import React from "react";
import { Paragraph, Image, Heading, Anchor, ResponsiveContext } from "grommet";

import Layout from "../../../components/Layout";
import SEO from "../../../components/SEO";
import Container from "../../../components/Container";
import FullWidthContainer from "../../../components/FullWidthContainer";
import Column from "../../../components/Column";
import Grid from "../../../components/Grid";
import FAQBlock from "../../../components/FAQ";

import tinlake_logo_small from "../../../images/tinlake/tinlake-logo-small.svg";
import faq_placeholder from "../../../images/faq-placeholder.svg";

const FAQPage = ({ data }) => (
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
        {(size) => <FAQBlock data={data.allFaqsYaml.edges} size={size} />}
      </ResponsiveContext.Consumer>
    </FullWidthContainer>
  </Layout>
);

export const FAQPageQuery = graphql`
  query {
    allFaqsYaml {
      edges {
        node {
          title
          faqs {
            q
            a
          }
        }
      }
    }
  }
`;

export default FAQPage;
