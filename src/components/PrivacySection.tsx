import { Grid, Stack, Text } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'
import { CenterContainer } from './CenterContainer'

export const query = graphql`
  fragment PrivacySectionFragment on DataJsonPrivacy_section {
    title
    sections {
      title
      body
    }
    imprint {
      name
      address
      email
    }
  }
`

export type PrivacySectionProps = {
  title: string
  sections: { title: string; body: string }[]
  imprint: {
    name: string
    address: string
    email: string
  }
}

export function PrivacySection({ title, sections, imprint }: PrivacySectionProps) {
  return (
    <CenterContainer as="section">
      <Stack gap={140} pt={8}>
        <Stack gap={3}>
          <Text variant="tag">Imprint</Text>
          <Stack gap={1} as="address">
            <Text variant="heading6">{imprint.name}</Text>
            <Text variant="body2" as="pre">
              {imprint.address}
            </Text>
            <Text variant="body2" as="a" href={`mailto:${imprint.email}`}>
              {imprint.email}
            </Text>
          </Stack>
        </Stack>
        <Stack gap={5}>
          <Text variant="heading2" as="h1">
            {title}
          </Text>
          <Grid gridTemplateColumns={['1fr', '1fr', '2fr 1fr']}>
            <Stack gap={8}>
              {sections.map((section) => (
                <Stack key={section.title} gap={2}>
                  <Text variant="heading4" as="h3" role="listitem">
                    {section.title}
                  </Text>
                  <Text variant="body1" as="p">
                    {section.body}
                  </Text>
                </Stack>
              ))}
            </Stack>
            <span />
          </Grid>
        </Stack>
      </Stack>
    </CenterContainer>
  )
}
