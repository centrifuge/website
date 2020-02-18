import React from 'react'
import { Heading, Paragraph } from 'grommet'

import Grid from 'components/Grid'
import Column from 'components/Column'
import Container from 'components/Container'

export default function Governance() {
  return (
    <Container>
      <Grid align='start'>
        <Column>
          <div>
            <Heading level={2} lined>
              {data.heading}
            </Heading>
            <Paragraph>{data.paragraph}</Paragraph>
          </div>
        </Column>
      </Grid>
    </Container>
  )
}

const data = {
  heading: 'Governance',
  paragraph:
    'The governance of Tinlake is important to manage the financing process. Tinlake provides flexible access for different Administrators to assume the responsibility of approving borrowers, underwriting and valuing assets, managing rates and funding sources, as well as keeping a balanced portfolio. In case of a payment default, collateral governance manages the liquidation of the assets. Tinlake facilitates the transparency of the collateral pool at any time. For provenance, risk assessment and collateral management Tinlake relies on price oracles. The Administrators could theoretically be single centralized entities, a set of smart contracts automatically qualifying and pricing an asset or a DAO that manages the Tinlake deployment.'
}
