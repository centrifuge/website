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
      date
      outlet
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
  date: string
  id: string
  outlet: string
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

export function NewsCard({
  date,
  outlet,
  title,
  body,
  image,
  href,
  alt,
  boxed = false,
  featured = false,
}: NewsCardProps) {
  const { shadows } = useTheme()

  return featured ? (
    <Box>
      <Label {...{ outlet, date }} />
      <Grid gridTemplateColumns={['1fr', '1fr', 'repeat(2, minmax(0, 1fr))']} gap={[2, 2, 4]} mt={[1, 1, 2]}>
        <Media image={image} alt={alt} href={href} order={[1, 1, 2]} featured />

        <Stack gap={2} order={[2, 2, 1]}>
          <Title featured={featured} href={href}>
            {title}
          </Title>
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
      <Label {...{ outlet, date }} />

      {image && <Media image={image} href={href} alt={alt} />}

      <Shelf mt={image ? 2 : 0} gap={2} flexDirection="column" alignItems="start" flexGrow={2}>
        <Title featured={featured} href={href}>
          {title}
        </Title>
        <Body featured={featured}>{body}</Body>

        <Box mt="auto" pt={boxed ? 0 : 1}>
          <ReadMore href={href} boxed={boxed} />
        </Box>
      </Shelf>
    </Shelf>
  )
}

function Label({ outlet, date }: { outlet: string; date: string }) {
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
      <Text as="cite" fontStyle="normal">
        {outlet}
      </Text>{' '}
      - <time date-time={date}>{date}</time>
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

function Title({ featured = false, href, children }: { featured: boolean; href: string; children: React.ReactNode }) {
  return (
    <Box as="h2" my={0}>
      <Clamped
        forwardedAs="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        variant={featured ? 'heading3' : 'heading6'}
        fontWeight={600}
        lineHeight={featured ? 1.05 : 1.2}
      >
        {children}
      </Clamped>
    </Box>
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
  alt,
  href,
  order = 0,
  featured = false,
}: {
  image: PostProps['image']
  alt: PostProps['alt']
  href: string
  order?: number | number[]
  featured?: boolean
}) {
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      order={order}
      width="100%"
      mt={featured ? 0 : 1}
      tabIndex={-1}
    >
      <Image data={image} alt={alt} />
    </Box>
  )
}
