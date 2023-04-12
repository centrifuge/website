import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Text, IconArrowUpRight, IconBrandSpinner } from '@centrifuge/fabric'
import { useLeverPositions } from '../../hooks/use-lever-positions'
import { Reveal, RevealWrapper } from '../Reveal'
import { NoteCard } from '../NoteCard'
import { Spinner } from '../Spinner'
import { Vacancy } from './styles'

export const query = graphql`
  fragment CareerSectionFragment on DataJsonCareer_section {
    title
    fallback
    note {
      title
      body
    }
  }
`

export type CareerSectionProps = {
  title: string
  fallback: string
  note: { title: string; body: string }
  id?: string
}

export function CareerSection({ title, fallback, note, id }: CareerSectionProps) {
  const { positions, isLoading, isError } = useLeverPositions()

  return (
    <RevealWrapper px={2} as="section" {...(id ? { id } : {})}>
      <Container>
        <Reveal>
          <Text as="h2" variant="heading2">
            {title}
          </Text>
        </Reveal>

        <Reveal
          staggerIndex={1}
          borderStyle="solid"
          borderColor="borderPrimary"
          borderWidth={0}
          borderTopWidth={1}
          borderBottomWidth={1}
          mt={4}
          py={!!positions?.length ? 0 : 4}
        >
          {!isLoading && !isError && !!positions?.length && (
            <Box as="ul" role="list">
              {positions.map(({ id, title, href }, index) => (
                <Box as="li" key={id} borderTop={index > 0 ? '1px solid' : 0} borderTopColor="borderPrimary">
                  <Vacancy href={href} target="_blank" rel="noopener noreferrer">
                    <Text as="span">{title}</Text>
                    <IconArrowUpRight />
                  </Vacancy>
                </Box>
              ))}
            </Box>
          )}

          {!isLoading && !isError && positions?.length === 0 && (
            <Text as="strong" variant="body1" textAlign="center" style={{ display: 'block' }}>
              {fallback}
            </Text>
          )}

          {isLoading && <Spinner />}

          {isError && (
            <NoteCard status="info">
              <Text as="strong" variant="heading6">
                {note.title}
              </Text>
              <Text as="p" variant="body1">
                {note.body}
              </Text>
            </NoteCard>
          )}
        </Reveal>

        <Reveal
          staggerIndex={2}
          py={3}
          borderStyle="solid"
          borderColor="borderPrimary"
          borderWidth={0}
          borderBottomWidth={1}
        >
          <Text variant="body1" as="p" textAlign="right">
            Don’t see your role? Send us a{' '}
            <Text as="a" href="mailto:hello@centrifuge.io" variant="body1" style={{ textDecoration: 'underline' }}>
              message
            </Text>
          </Text>
        </Reveal>
      </Container>
    </RevealWrapper>
  )
}
