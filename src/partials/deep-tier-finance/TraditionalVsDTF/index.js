import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Paragraph, Text } from 'grommet'

import Grid from 'components/Grid'
import Column from 'components/Column'
import Container from 'components/Container'

export default function TraditionalVsDTF() {
  return (
    <Box tag='section' background='brand'>
      <Container>
        <Grid>
          <Column>
            <Heading lined level={2} style={{ borderBottomColor: '#d8d8d8' }}>
              {data.heading}
            </Heading>
            <Paragraph style={{ paddingBottom: 50 }}>
              {data.paragraph}
            </Paragraph>
          </Column>

          <Column span={{ medium: 6, large: 6 }}>
            <Text size='large' style={{ paddingBottom: 25 }}>
              {data.column1.heading}
            </Text>
            {data.column1.bulletPoints.map((line, i) => (
              <Text key={`TraditionalVsDTF-column1-${i}`}>{line}</Text>
            ))}
          </Column>

          <Column span={{ medium: 6, large: 6 }} width='100%'>
            <Card background='white'>
              <Text size='large' style={{ paddingBottom: 25 }}>
                {data.column2.heading}
              </Text>
              {data.column2.bulletPoints.map((line, i) => (
                <Text key={`TraditionalVsDTF-column3_${i}`}>{line}</Text>
              ))}
            </Card>
          </Column>
        </Grid>
      </Container>
    </Box>
  )
}

const data = {
  heading: 'Traditional vs Deep Tier Financing',
  paragraph:
    'Traditional supply chain finance models rarely reach beyond the first-tier suppliers of large corporates, and thus exclude the long tail and deeper tiers. Micro, Small, and Medium-sized Enterprises, often located in emerging and frontier markets, represent the biggest portion of these deeper tiers and are in most need of access to capital. Deep Tier Finance tackles this problem.',

  column1: {
    heading: 'Traditional Supply Chain Financing Solutions',
    bulletPoints: [
      '- Covers only Tier 1 suppliers',
      '- Prolonged turnaround time',
      '- Manual processing of documents',
      '- Incomplete transactional information',
      '- Vulnerable to fraud risk'
    ]
  },
  column2: {
    heading: 'Centrifuge’s Deep Tier Financing ',
    bulletPoints: [
      '- Covers the entire supply chain',
      '- Quick turnaround time via full automation',
      '- Simple, transparent online process',
      '- Immutability and traceability of data',
      '- Full commercial privacy',
      '- Additional sustainability data layer'
    ]
  }
}

const Card = styled(Box)`
  width: 100%;
  border-radius: 16px;
  padding: 32px;

  span {
    text-align: start;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 70px;
  }
`
