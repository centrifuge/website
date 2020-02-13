import React from 'react'
import { Heading, Paragraph } from 'grommet'

import Grid from 'components/Grid'
import Column from 'components/Column'
import Container from 'components/Container'

import Disclaimer from './Disclaimer'

export default function GetInTouch() {
  return (
    <Container>
      <Grid align='start'>
        <Column>
          <div>
            <Heading className='tinlake_heading' level={2} lined>
              {data.heading}
            </Heading>
            {data.paragraphs.map((paragraph, i) => (
              <Paragraph key={`GetInTouch-paragraph-${i}`}>
                {paragraph}
              </Paragraph>
            ))}
          </div>
        </Column>
      </Grid>

      <Grid justify='center'>
        <Column style={{ width: '100%' }}>
          <Disclaimer>
            Any questions left?
            <br />
            please get in touch:{' '}
            <a href='mailto:hello@centrifuge.io'>
              deeptierfinance@centrifuge.io.
            </a>
          </Disclaimer>
        </Column>
      </Grid>
    </Container>
  )
}

const data = {
  heading: 'Interested in using Tinlake? Get in touch!',
  paragraphs: [
    'We work with a broad range of asset originators that are looking to offer additional financing services to their existing customer base or are interested in tapping into alternative financing sources. The platforms operate in different markets such as invoice financing, real estate and logistics. Complementarily, we collaborate with capital providers - both fiat and crypto - that want exposure to these types of assets.',
    'Contact us if you are an Asset Originator, funder or service provider and you want to access the decentralized finance ecosystem.',
    'In order to learn more about Tinlake please take a look at the Developer Documentation and corresponding blog posts on our Medium site.'
  ]
}
