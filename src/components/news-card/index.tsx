import { Box, Shelf, Grid, Text, Stack } from '@centrifuge/fabric'
import React from 'react'
import { useTheme } from 'styled-components'
import { Anchor } from './styles'

export type NewsCardProps = MediaProps &
  ReadMoreProps & {
    label: string
    title: string
    body: string
    boxed?: boolean
    featured?: boolean
  }

export function NewsCard({ label, title, body, image, href, boxed = false, featured = false }: NewsCardProps) {
  const { shadows } = useTheme()

  return featured ? (
    <Box>
      <Label>{label}</Label>
      <Grid gridTemplateColumns={['1fr', '1fr', 'repeat(2, minmax(0, 1fr))']} gap={[2, 2, 4]} mt={[1, 1, 2]}>
        <Media image={image} order={[1, 1, 2]} />

        <Stack gap={2} order={[2, 2, 1]}>
          <Title featured={featured}>{title}</Title>
          <Body featured={featured}>{body}</Body>
          <ReadMore href={href} boxed={false} />
        </Stack>
      </Grid>
    </Box>
  ) : (
    <Shelf
      as="article"
      position="relative"
      p={boxed ? 2 : 0}
      flexDirection="column"
      alignItems="start"
      borderWidth={boxed ? 1 : 0}
      borderStyle="solid"
      borderColor="borderPrimary"
      borderRadius={boxed ? 'input' : 0}
      style={{
        boxShadow: boxed ? shadows.cardInteractive : 'none',
      }}
    >
      <Label>{label}</Label>

      <Media image={image} />

      <Shelf mt={2} gap={1} flexDirection="column" alignItems="start" flexGrow={2}>
        <Title featured={featured}>{title}</Title>
        <Body featured={featured}>{body}</Body>

        <Box mt="auto" pt={boxed ? 0 : 1}>
          <ReadMore href={href} boxed={boxed} />
        </Box>
      </Shelf>
    </Shelf>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <Text as="span" variant="tag">
      {children}
    </Text>
  )
}

function Title({ featured = false, children }: { featured: boolean; children: React.ReactNode }) {
  return (
    <Text as="h2" variant={featured ? 'heading4' : 'heading3'}>
      {children}
    </Text>
  )
}

function Body({ featured = false, children }: { featured: boolean; children: React.ReactNode }) {
  return (
    <Text as="p" variant={featured ? 'body1' : 'body2'}>
      {children}
    </Text>
  )
}

type ReadMoreProps = {
  href: string
  boxed?: boolean
}

function ReadMore({ href, boxed = false }: ReadMoreProps) {
  return (
    <Anchor
      as="a"
      href={href}
      title={boxed ? 'Read more…' : ''}
      target="_blank"
      rel="noopener noreferrer"
      boxed={boxed}
    >
      {!boxed && (
        <Text as="span" variant="body1" color="textSecondary" underline>
          'Read more…'
        </Text>
      )}
    </Anchor>
  )
}

type MediaProps = { image: string }

function Media({ image, order = 0 }: MediaProps & { order?: number | number[] }) {
  return (
    <Box
      as="img"
      src={image}
      alt=""
      order={order}
      aspectRatio="1.88 / 1" // 1024:545 medium article thumbnail ratio
      display="block"
      width="100%"
      mt={1}
      style={{ objectFit: 'cover' }}
    />
  )
}
