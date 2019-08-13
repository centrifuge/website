import React from 'react'
import styled from 'styled-components'
import { Heading, Paragraph } from "grommet";

import Column from "../../../components/Column";

export default function List({span ={ medium: 4, large: 4 }}) {
   return (
      <StyledColumn span={span}>
         {listContent.map(({heading, paragraphs}, index) => (
            <Wrapper key={`flow_list_${index}`}>
               <Heading level={3}>{heading}</Heading>
               {paragraphs.map( (p, index) => <Paragraph key={`flow_p_${index}`} className="tinlake_paragraph" >{p}</Paragraph>)}
            </Wrapper>
         ))}
      </StyledColumn>
   )
} 

const StyledColumn = styled(Column)`
   @media only screen and (min-width: 769px) {
      margin-top: 90px;               
   }
`
const Wrapper = styled.div`
   margin-bottom: 82px;

   @media only screen and (min-width: 769px) {
      margin-bottom: 34px;              
   }

   &:last-of-type {
      margin-bottom: 0;
   }

   h3 {
      font-size: 24px;
      line-height: 40px;
      margin-bottom: 24px;
      margin-top: 0;

      @media only screen and (min-width: 769px) {
         font-size: 16px;
         line-height: 24px;            
      }
   }

   p {
      @media only screen and (min-width: 769px) {
         line-height: 20px;            
      }
   }
`

const listContent = [
   {
      heading: "1. Transfer 100 NFT",
      paragraphs: [
         "Alice converts her real-world asset worth $100 into a digital representation of this asset, a non-fungible token (NFT) ",
         "Alice transfers this NFT into Tinlake as collateral for a loan in DAI"
      ]
   },
   {
      heading: "2. Lock 100 CVT",
      paragraphs: [
         "Tinlake mints 100 CVT (a fungible ERC20 token) and locks the CVTs into a crypto Lending Facility, such as a Maker CDP or Compound"
      ]
   },
   {
      heading: "3. Draw 90 DAI",
      paragraphs: [
         "In return, Tinlake draws 90 DAI. The 10 DAI difference is covering the financing fees and is creating a risk retention buffer"
      ]
   },
   {
      heading: "4. Lend 90 DAI",
      paragraphs: [
         "The 90 DAI are forwarded to Alice’s wallet"
      ]
   },
   {
      heading: "5. Repay 95 DAI",
      paragraphs: [
         "Assuming 5 DAI interest, Alice is repaying 95 DAI at the maturity date of her loan to Tinlake"
      ]
   },
   {
      heading: "6. Repay 92 DAI",
      paragraphs: [
         "3 DAI remain at Tinlake for the SPV as service charge and 92 DAI are forwarded to the Lending Facility covering also the interest of 2 DAI"
      ]
   },
   {
      heading: "7. Return 100 CVT",
      paragraphs: [
         "The 100 CVT are unlocked from the Lending facility and returned to Tinlake."
      ]
   },
   {
      heading: "8. Return 100 NFT",
      paragraphs: [
         "Tinlake burns the 100 CVT, unlocks the NFT and returns it to Alice "
      ]
   },
]