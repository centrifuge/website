import React from 'react'
import { Heading, Paragraph } from "grommet";

import Grid from "../../../components/Grid";
import Column, { Spacer } from "../../../components/Column";

import Image from './Image'

import whatTinlake from "../../../images/tinlake/what-is-tinlake.svg";

export default function WhatIsTinlake() {
   return (
      <Grid align="start">
         <Column span={{ medium: 6, large: 5 }}>
            <div>
               <Heading className="tinlake_heading" level={2} lined >What is Tinlake?</Heading>
               <Paragraph className="tinlake_paragraph">Tinlake is a platform that enables you to draw loans against non-fungible assets, such as invoices, royalty payments or artworks. It dramatically simplifies the process of accessing decentralized finance for previously illiquid assets. Any asset that can be represented on-chain as an NFT (Non-Fungible Token) can be financed using the Tinlake infrastructure. </Paragraph>
            </div>
         </Column>
         <Spacer width={1}/>
         <Column justifySelf="stretch" span={{ medium: 6, large: 5 }}>
            <Image  alt=""  src={whatTinlake} />
         </Column>
      </Grid>
   )
}
