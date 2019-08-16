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
               <Paragraph className="tinlake_paragraph">Any asset that can be tokenized (represented on-chain as a Non-Fungible Token, NFT) can be financed using the Tinlake infrastructure. This could be a Centrifuge Business NFT or any other NFT following the ERC721 standard. The NFT is an on-chain representation of an individual real-world asset which becomes tradable, assignable and easily fundable. Tinlake can be used with many types of collateral such as financial documents, real-estate or royalties.</Paragraph>
            </div>
         </Column>
         <Spacer span={{ medium: 2, large: 2}} />
         <Column span={{ medium: 5, large: 5 }}>
            <div>
               <Heading className="tinlake_heading" level={2} lined >Governance</Heading>
               <Paragraph className="tinlake_paragraph">The governance of Tinlake is necessary to manage the financing process. Tinlake governance assumes the responsibility of approving borrowers, underwriting and valuing assets, managing rates and funding sources, as well as keeping a balanced portfolio. In case of a payment default, collateral governance manages the liquidation of the assets.</Paragraph>
               <Paragraph className="tinlake_paragraph">Tinlake facilitates transparency of the collateral pool at any time and supports different ways to add collateral types.</Paragraph>
            </div>
         </Column>
      </Grid>
   )
}
