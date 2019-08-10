import React from "react";
import { Heading, Paragraph, Image, Box, Grid as GrommetGrid , ThemeContext} from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";

import tinlakeTheme from '../components/Theme/tinlakeTheme'
import block2Image from "../images/Careers.svg";

const TinlakePage = () => {

  return (
    <Layout>
      <SEO title="Tinlake" description="Tinlake description"/>
      <ThemeContext.Extend value={tinlakeTheme}>
         <Container>

           {/* Block 1 */}
           <Grid>
            <Column span={{ medium: 7, large: 7 }}>
               <img alt="" src={block2Image} />
            </Column>
            <Spacer/>
            <Column span={{ medium: 4, large: 4 }}>
               <div>
                  <Heading level={1} size="medium" margin={{bottom: "tinlakeH1MarginBt"}}>Tokenized Assets in DeFi</Heading>
                  <Paragraph>Unlock the value of your real-world assets in the decentralized finance ecosystem. </Paragraph>
               </div>
            </Column>
           </Grid>

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
