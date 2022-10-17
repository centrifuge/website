import { Box, Card, Grid, Shelf, Stack, Text } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'
import { CenterContainer } from '../CenterContainer'
import { HeroTitle } from '../HeroTitle'
import { ImageProps } from '../Image'
import circles from './circles.svg'

export const query = graphql`
  fragment HeroGovernanceFragment on DataJsonHero_governance {
    title
    subtitle
    body
    items {
      title
      body
      link
      image {
        publicURL
        extension
      }
    }
  }
`

type ItemProps = {
  image: ImageProps['data']
  title: string
  body: string
  link: string
}

export type HeroGovernanceProps = {
  title: string
  subtitle: string
  body: string
  items: ItemProps[]
}

export function HeroGovernance({ title, subtitle, body, items }: HeroGovernanceProps) {
  return (
    <CenterContainer>
      <Stack gap={8} pt={8}>
        <Shelf gap={8} alignItems="flex-start">
          <Box flex="1 1 65%">
            <HeroTitle title={title} subtitle={subtitle} body={body} />
          </Box>
          <Box flex="0 1 30%" minWidth={0} ml="auto" display={['none', 'none', 'block']}>
            <Box as="img" src={circles} alt="" width="100%" />
          </Box>
        </Shelf>
        <Grid columns={[1, 2, 3]} equalColumns gap={3}>
          {items.map((item) => (
            <Card
              p={3}
              variant="interactive"
              as="a"
              rel="noopener noreferrer"
              target="_blank"
              href={item.link}
              key={item.title}
            >
              <Stack gap={2}>
                <Shelf
                  justifyContent="center"
                  borderWidth={1}
                  borderStyle="solid"
                  borderColor="borderPrimary"
                  backgroundColor="yellowScale.30"
                  height={140}
                  p={1}
                >
                  <Box as="img" src={item.image.publicURL} alt="" maxWidth="100%" />
                </Shelf>
                <Text variant="heading4">{item.title}</Text>
                <Text as="p" variant="body1">
                  {item.body}
                </Text>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Stack>
    </CenterContainer>
  )
}
