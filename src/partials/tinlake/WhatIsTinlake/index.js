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
               <Paragraph className="tinlake_paragraph">Tinlake is a platform that enables you to draw loans against non-fungible assets, such as invoices, royalty payments or artworks. Anything that can be represented as an NFT. Tinlake dramatically simplifies the process of accessing decentralized finance for previously illiquid assets. It simplifies the process bc it allows you to pool those assets. This is done by issuing an ERC-20 token that represents a fraction of the collateral. </Paragraph>
            </div>
         </Column>
         <Spacer width={1}/>
         <Column justifySelf="stretch" span={{ medium: 6, large: 5 }}>
            <Image  alt=""  src={whatTinlake} />
         </Column>
      </Grid>
   )
}