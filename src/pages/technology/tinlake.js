import React from "react";
import {Box } from "grommet";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Container from "../../components/Container";

import Hero from "../../partials/tinlake/Hero"
import WhatIsTinlake from "../../partials/tinlake/WhatIsTinlake"
import TinlakeWork from "../../partials/tinlake/TinlakeWork"
import TinlakeAssets from "../../partials/tinlake/TinlakeAssets"
import TinlakeFlow from "../../partials/tinlake/TinlakeFlow"
import Disclaimer from "../../partials/tinlake/Disclaimer"


const TinlakePage = () => {

  return (
    <Layout>
      <SEO title="Tinlake" description="Tinlake description"/>
      <Container>

         {/* Block 1 */}
         <Hero />

         {/* Block 2 */}
         <WhatIsTinlake />

         {/* Block 3 */}
         <TinlakeWork />

         {/* Block 4 */}
         <TinlakeAssets />

         {/* Block 5 */}
         <TinlakeFlow />
      </Container>

      {/* Disclaimer section 5 */}
      <Box background="light-2" pad="medium">
        <Container>
          <Disclaimer />
        </Container>
      </Box>
    </Layout>
  );
};

export default TinlakePage;
