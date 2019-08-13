import React from 'react'
import { Heading, Paragraph } from "grommet";

import Grid from "../../../components/Grid";
import Column, { Spacer } from "../../../components/Column";

import Image from './Image'
import Content from './Content'

import tinlakeLogo from "../../../images/tinlake/tinlake-logo.svg";

export default function Hero() {
   return (
      <Grid>
         <Column justifySelf="stretch" span={{ medium: 6, large: 6 }}>
            <Image  alt=""  src={tinlakeLogo} />
         </Column>
         <Spacer width={2}/>
         <Column span={{ medium: 4, large: 3 }}>
            <Content>
               <Heading level={1} className="tinlake_heading">Tokenized Assets in DeFi</Heading>
               <Paragraph className="tinlake_paragraph" >Unlock the value of your real-world assets in the decentralized finance ecosystem. </Paragraph>
            </Content>
         </Column>
      </Grid>
   )
}