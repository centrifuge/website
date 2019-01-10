import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Jobs from "../components/Jobs";

const CareersPage = () => (
  <Layout>
    <SEO title="Careers" />
    <h1>
      hello <s>world</s> jobs
    </h1>
    <Jobs />
  </Layout>
);

export default CareersPage;
