import React from "react";
import { ThemeContext } from "grommet";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Container from "../../components/Container";
import tinlakeTheme from "../../components/Theme/tinlakeTheme"

import Hero from "../../partials/tinlake/Hero"
import WhatIsTinlake from "../../partials/tinlake/WhatIsTinlake"
import TinlakeWork from "../../partials/tinlake/TinlakeWork"
import TinlakeAssets from "../../partials/tinlake/TinlakeAssets"
import TinlakeFlow from "../../partials/tinlake/TinlakeFlow"



const TinlakePage = () => {

  return (
    <Layout>
      <SEO title="Tinlake" description="Tinlake description"/>
      <ThemeContext.Extend value={tinlakeTheme}>
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
      </ThemeContext.Extend>
    </Layout>
  );
};

export default TinlakePage;
