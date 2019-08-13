import React from 'react'
import { Heading, Paragraph } from "grommet";

import Grid from "../../../components/Grid";
import Column from "../../../components/Column";

import Spacer from './Spacer'

export default function TinlakeAssets() {
   return (
      <Grid align="start">
         <Column span={{ medium: 5, large: 5 }}>
            <div>
               <Heading className="tinlake_heading" level={2} lined >What types of assets?</Heading>
               <Paragraph className="tinlake_paragraph">Centrifuge NFTs or any other NFTs can be used.</Paragraph>
               <Paragraph className="tinlake_paragraph">Assets that can be represented on-chain as NFTs (Non-Fungible Tokens) can be financed using the Tinlake infrastructure. The NFT is an on-chain representation of an individual real-world asset which becomes tradable, assignable and easily fundable. Tinlake supports many types of collateral such as financial documents, real-estate or royalties.</Paragraph>
            </div>
         </Column>
         <Spacer span={{ medium: 2, large: 2}} />
         <Column span={{ medium: 5, large: 5 }}>
            <div>
               <Heading className="tinlake_heading" level={2} lined >Governance</Heading>
               <Paragraph className="tinlake_paragraph">Tinlake- what assets to be added can be defined in a centralized or decentralized way</Paragraph>
               <Paragraph className="tinlake_paragraph">DAO? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Paragraph>
            </div>
         </Column>
      </Grid>
   )
}