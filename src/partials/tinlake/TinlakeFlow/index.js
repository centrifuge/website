import React from 'react'
import { Heading, Paragraph } from "grommet";

import Grid from "../../../components/Grid";
import Column from "../../../components/Column";

import Image from './Image'
import List from './List'

import tinlakeFlow from "../../../images/tinlake/tinlake-flow.svg";


export default function TinlakeWork() {
   return (
      <Grid align="start">
         <Column span={{ medium: 8, large: 8 }}>
            <div>
               <Heading className="tinlake_heading" level={2} lined >The Borrowing Experience</Heading>
               <Paragraph className="tinlake_paragraph">
                  Imagine the following scenario: Alice owns a small company in Madrid. She delivers goods and sends an invoice to her client, to be paid within 30 days. Simultaneously, Alice receives inventory and needs to pay her suppliers immediately, but she doesn’t have enough money. She needs a short term loan, and can use her outstanding invoice as collateral in Tinlake. 
               </Paragraph>
               <Paragraph className="tinlake_paragraph">
                  Below you can see what the borrowing process looks like
               </Paragraph>
            </div>
         </Column>
         <Image justifySelf="stretch" span={{ medium: 8, large: 8 }}>
            <img  alt=""  src={tinlakeFlow} />
         </Image>
         <List span={{ medium: 4, large: 4 }} />
      </Grid>
   )
}
