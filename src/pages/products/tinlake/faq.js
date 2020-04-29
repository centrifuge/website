import React from "react";

import Layout from "../../../components/Layout";
import SEO from "../../../components/SEO";
import Container from "../../../components/Container";
import FullWidthContainer from "../../../components/FullWidthContainer";
import { FAQPageHeader, FAQBlock } from "../../../components/FAQ";

const FAQPage = ({ data }) => (
  <Layout>
    <SEO />

    <Container>
      <FAQPageHeader />
    </Container>

    <FullWidthContainer>
      <FAQBlock data={data.allFaqsYaml.edges} />
    </FullWidthContainer>
  </Layout>
);

export const FAQPageQuery = graphql`
  query {
    allFaqsYaml {
      edges {
        node {
          title
          expand
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
