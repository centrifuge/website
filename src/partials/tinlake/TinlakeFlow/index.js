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
               <Heading className="tinlake_heading" level={2} lined >Borrower Flow?</Heading>
               <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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