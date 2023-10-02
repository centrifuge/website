import * as React from 'react'
import { Box, Container, Grid, Shelf, Text } from '@centrifuge/fabric'
import { Reveal, RevealWrapper } from '../Reveal'
import { Title } from './styles'

export type RwaUspProps = {
  title: string
  body: string
  media: React.ReactNode
  content?: React.ReactNode
  titleAddition?: React.ReactNode
}

export function TextImage({ title, body, media, content, titleAddition }: RwaUspProps) {
  return (
    <RevealWrapper>
      <Box as="section" px={2}>
        <Container>
          <Grid columns={[1, 1, 2]} equalColumns gap={[8, 8, '100px', '200px']}>
            <Box>
              <Reveal as={Shelf} justifyContent="space-between" alignItems="center">
                <Title forwardedAs="h2" variant="heading2b">
                  {title}
                </Title>
                {titleAddition}
              </Reveal>

              <Reveal staggerIndex={1} mt={2}>
                <Text as="p" color="textSecondary" variant="body1">
                  {body}
                </Text>
              </Reveal>

              {content}
            </Box>

            <Reveal staggerIndex={2}>{media}</Reveal>
          </Grid>
        </Container>
      </Box>
    </RevealWrapper>
  )
}
