import { Box, Shelf, Grid, Text, Stack } from '@centrifuge/fabric'
import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { useTheme } from 'styled-components'
import { Anchor } from './styles'
import { Image, ImageProps } from '../Image'

export const query = graphql`
  fragment NewsCardFragment on PostsJsonConnection {
    nodes {
      id
      label
      title
      body
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], width: 1024, height: 545)
        }
      }
      alt
      href
    }
  }
`

export type PostProps = {
  id: string
  label: string
  title: string
  body: string
  image: ImageProps
  alt: string
  href: string
}

export type NewsCardProps = Omit<PostProps, 'id'> &
  ReadMoreProps & {
    boxed?: boolean
    featured?: boolean
  }

export function NewsCard({ label, title, body, image, href, alt, boxed = false, featured = false }: NewsCardProps) {
  const { shadows } = useTheme()

  return featured ? (
    <Box>
      <Label>{label}</Label>
      <Grid gridTemplateColumns={['1fr', '1fr', 'repeat(2, minmax(0, 1fr))']} gap={[2, 2, 4]} mt={[1, 1, 2]}>
        <Media image={image} alt={alt} order={[1, 1, 2]} featured />

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
      minHeight="100%"
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

      {image && <Media image={image} alt={alt} />}

      <Shelf mt={image ? 2 : 0} gap={2} flexDirection="column" alignItems="start" flexGrow={2}>
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
    <Text
      as="span"
      variant="body3"
      color="textSecondary"
      style={{
        display: 'block',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </Text>
  )
}

const Clamped = styled(Text)`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
`

function Title({ featured = false, children }: { featured: boolean; children: React.ReactNode }) {
  return (
    <Clamped
      forwardedAs="h2"
      variant={featured ? 'heading3' : 'heading6'}
      fontWeight={600}
      lineHeight={featured ? 1.05 : 1.2}
    >
      {children}
    </Clamped>
  )
}

function Body({ featured = false, children }: { featured: boolean; children: React.ReactNode }) {
  return (
    <Clamped forwardedAs="p" variant={featured ? 'body1' : 'body2'} color="textSecondary">
      {children}
    </Clamped>
  )
}

type ReadMoreProps = {
  href: PostProps['href']
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
        <Text as="span" variant="body1" color="textSecondary">
          Read more…
        </Text>
      )}
    </Anchor>
  )
}

function Media({
  image,
  order = 0,
  featured = false,
}: {
  image: PostProps['image']
  alt: PostProps['alt']
  order?: number | number[]
  featured?: boolean
}) {
  return (
    <Box order={order} width="100%" mt={featured ? 0 : 1}>
      <Image data={image} />
    </Box>
  )
}
