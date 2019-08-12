import React from "react";
import { Heading, Paragraph, Image, Box, Grid as GrommetGrid , ThemeContext} from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import tinlakeTheme from '../components/Theme/tinlakeTheme'

import Hero from '../partials/tinlake/Hero'



const TinlakePage = () => {

  return (
    <Layout>
      <SEO title="Tinlake" description="Tinlake description"/>
      <ThemeContext.Extend value={tinlakeTheme}>
         <Container>

           {/* Block 1 */}
            <Hero />

           {/* Block 2 */}
           {/* Block 3 */}
           {/* Block 4 */}
           {/* Block 5 */}

         </Container>
      </ThemeContext.Extend>
    </Layout>
  );
};

export default TinlakePage;
