import * as React from 'react'
import { graphql } from 'gatsby'
import { AnchorButton, Container, Shelf, Stack, Text, Grid } from '@centrifuge/fabric'
import { links } from '../../config/links'
import { Reveal, RevealWrapper } from './Reveal'

export const query = graphql`
  fragment PrimeTargetsFragment on DataJsonPrime_targets {
    title
    body
    items {
      title
      body
    }
  }
`

export type PrimeTargetsProps = {
  title: string
  body: string
  items: {
    title: string
    body: string
  }[]
}

export function PrimeTargets({ title, body, items }: PrimeTargetsProps) {
  return (
    <RevealWrapper>
      <Stack as="section" px={2} gap={[4, 4, 6, 10]}>
        <Container>
          <Stack gap={2}>
            <Reveal as={Shelf} justifyContent="space-between" alignItems="center" gap={1}>
              <Text as="h2" variant="heading2b">
                {title}
              </Text>

              <AnchorButton
                href={links.prime}
                rel="noopener noreferrer"
                target="_blank"
                variant="secondary"
                style={{ whiteSpace: 'nowrap' }}
                small
              >
                Join
              </AnchorButton>
            </Reveal>

            <Reveal staggerIndex={1}>
              <Text as="p" color="textSecondary" variant="body1">
                {body}
              </Text>
            </Reveal>
          </Stack>

          <Grid as="ul" columns={[1, 1, 3]} gap={4} mt={[6, 6, 8, 10]}>
            {items.map((entry, index) => (
              <Reveal as="li" staggerIndex={index + 2} key={index}>
                <Item {...entry} />
              </Reveal>
            ))}
          </Grid>
        </Container>
      </Stack>
    </RevealWrapper>
  )
}

type ItemProps = PrimeTargetsProps['items'][number]

function Item({ title, body }: ItemProps) {
  return (
    <Stack gap={1}>
      <Text as="h3" variant="heading4b">
        {title}
      </Text>
      <Text as="p">{body}</Text>
    </Stack>
  )
}
