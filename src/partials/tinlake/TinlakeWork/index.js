import React from 'react'
import { Heading, Paragraph, Box } from "grommet";

import Grid from "../../../components/Grid";
import Column, { Spacer } from "../../../components/Column";

import Image from './Image'

import tinlakeWorkMobile from "../../../images/tinlake/tinlake-work-mobile.svg";
import tinlakeWorkDesktop from "../../../images/tinlake/tinlake-work-desktop.svg";

export default function TinlakeWork() {
   return (
      <Grid>
         <Column span={{medium: 4, large: 4}} />
         <Column span={{ medium: 8, large: 8 }}>
            <div>
               <Heading className="tinlake_heading" level={2} lined >How does Tinlake work?</Heading>
               <Paragraph>
                  Tinlake is a framework of smart contracts on Ethereum that turns digital representations of real-world assets (Non-Fungible Tokens) into ERC-20 tokens, which then gives access to decentralized lending protocols. 
               </Paragraph>
               <Paragraph>
                  Any asset that can be represented on-chain as Non-Fungible Tokens (NFTs) can be financed using the Tinlake infrastructure. 
               </Paragraph>
               <Paragraph>
                  Tinlake enables platforms to pool NFTs in a smart contract and use them as collateral to borrow money in a stable currency such as DAI. In turn for locking in NFTs, the contract mints fungible ERC-20 tokens, called Collateral Value Tokens (CVTs), that each represents a fraction of the bundled collateral.
               </Paragraph>
               <Paragraph>
                  The CVTs are then used as collateral and locked into DeFi lending protocols, such as Compound and Maker, to allow instant smart contract based lending.
               </Paragraph>
            </div>
         </Column>
         <Column span={{medium: 1, large: 1}} />
         <Column mobileHide justifySelf="stretch" span={{ medium: 10, large: 10 }}>
            <Image  alt=""  src={tinlakeWorkDesktop} />
         </Column>
         <Column tabletHide justifySelf="stretch" span={{ medium: 12, large: 12 }}>
            <Image  alt=""  src={tinlakeWorkMobile} />
         </Column>
      </Grid>
   )
}