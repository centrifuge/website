import React from 'react'
import { Heading, Paragraph } from 'grommet'

import Grid from '../../../components/Grid'
import Column from '../../../components/Column'
import Container from '../../../components/Container'

import Image from './Image'

import tinlake_work_mobile_img from '../../../images/tinlake/tinlake-work-mobile.svg'
import tinlake_work_desktop_img from '../../../images/tinlake/tinlake-work-desktop.svg'

export default function TinlakeWork() {
  return (
    <Container>
      <Grid mb='0px'>
        <Column>
          <div>
            <Heading className='tinlake_heading' level={2} lined>
              {data.heading}
            </Heading>
            {data.paragraphs.map((paragraph, i) => (
              <Paragraph key={`TinlakeWork-paragraph-${i}`}>
                {paragraph}
              </Paragraph>
            ))}
          </div>
        </Column>
      </Grid>

      <Grid>
        <Column justifySelf='stretch' span={{ medium: 5, large: 5 }}>
          <Paragraph>{data.imageDescription}</Paragraph>
        </Column>

        <Column justifySelf='stretch' span={{ medium: 1, large: 1 }} />

        <Column mobileHide justifySelf='stretch' span={{ medium: 6, large: 6 }}>
          <Image src={tinlake_work_desktop_img} />
        </Column>

        <Column tabletHide justifySelf='stretch' span={{ medium: 6, large: 6 }}>
          <Image src={tinlake_work_mobile_img} />
        </Column>
      </Grid>
    </Container>
  )
}

const data = {
  heading: 'How does Tinlake work?',
  paragraphs: [
    'Tinlake’s set of smart contracts pool NFTs that represent non-fungible real world assets and use them as collateral to draw a loan in a stable crypto currency such as DAI or USDC. This is done by issuing fungible, interest bearing tokens that represent a claim on a fraction of the proceeds of the entire pool. These fungible tokens can be locked in crypto protocols or transferred to investors to draw funding. When liquidity is injected into Tinlake tokens are minted accordingly. The same mechanism applies in reverse when funding is paid out and tokens are burned.',
    'Asset originators can create individual Tinlake pools per asset type, e.g. one dedicated pool for invoices and one pool for mortgages. All Tinlake pools are independent of each other and can be configured individually, e.g. with different interest rates. For funders, risk and proceeds are shared for each pool but not across pools.'
  ],
  imageDescription:
    'Tinlake can be deployed with a two-token structure that allows investors to invest in two different kinds of fungible, interesting bearing tokens: TIN and DROP. Both tokens represent the liquidity deposited into Tinlake and accrue interest over time. TIN takes the risk of defaults first but also receives higher returns. DROP is protected against defaults by the TIN token and receives stable (but usually lower) returns. This is similar to common Junior/Senior investment structures.'
}
