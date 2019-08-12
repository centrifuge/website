import React from 'react'
import { Heading, Paragraph,  } from "grommet";

import Grid from "../../../components/Grid";
import Column, { Spacer } from "../../../components/Column";

import Image from './Image'

import block2Image from "../../../images/tinlake/tinlake-logo.svg";

export default function Hero() {
   return (
      <Grid>
         <Column justifySelf="stretch" span={{ medium: 6, large: 6 }}>
            <Image  alt=""  src={block2Image} />
         </Column>
         <Spacer width={2}/>
         <Column span={{ medium: 6, large: 3 }} justifySelf="flex-end">
            <div>
               <Heading level={1} size="medium" margin={{bottom: "tinlakeH1MarginBt", top: "0px"}}>Tokenized Assets in DeFi</Heading>
               <Paragraph>Unlock the value of your real-world assets in the decentralized finance ecosystem. </Paragraph>
            </div>
         </Column>
      </Grid>
   )
}