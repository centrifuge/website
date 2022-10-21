import React from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql, Link } from 'gatsby'
import { Stack, Text, Box } from '@centrifuge/fabric'
import styled from 'styled-components'

export const query = graphql`
  fragment MarkdownSectionFragment on File {
    childMarkdownRemark {
      internal {
        content
      }
    }
  }
`

export type MarkdownSectionProps = {
  childMarkdownRemark: {
    internal: {
      content: string
    }
  }
}

const Root = styled(Stack)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    &:not(:first-child) {
      margin-top: 1.2em;
    }
  }

  li + li {
    margin-top: 0.4em;
  }
`

export function MarkdownSection({ childMarkdownRemark }: MarkdownSectionProps) {
  return (
    <Root maxWidth="75ch" gap={2}>
      <ReactMarkdown
        children={childMarkdownRemark.internal.content}
        components={{
          h1: ({ children }) => (
            <Text as="h2" variant="heading4">
              {children}
            </Text>
          ),
          h2: ({ children }) => (
            <Text as="h2" variant="heading4">
              {children}
            </Text>
          ),
          h3: ({ children }) => (
            <Text as="h3" variant="heading4">
              {children}
            </Text>
          ),
          h4: ({ children }) => (
            <Text as="h4" variant="heading4">
              {children}
            </Text>
          ),
          h5: ({ children }) => (
            <Text as="h5" variant="heading5">
              {children}
            </Text>
          ),
          h6: ({ children }) => (
            <Text as="h6" variant="heading6">
              {children}
            </Text>
          ),
          ul: ({ children }) => (
            <Box as="ul" pl={4} style={{ listStyle: 'initial' }}>
              {children}
            </Box>
          ),
          ol: ({ children }) => (
            <Box as="ol" pl={4} style={{ listStyle: 'decimal' }}>
              {children}
            </Box>
          ),
          li: ({ children }) => (
            <Text as="li" variant="body1">
              {children}
            </Text>
          ),
          p: ({ children }) => (
            <Text as="p" variant="body1">
              {children}
            </Text>
          ),
          a: ({ children, href }) => {
            const isExternal = !href?.startsWith('/')

            if (!href) {
              return <Text as="span">{children}</Text>
            }

            return isExternal ? (
              <Text
                as="a"
                href={href}
                color="textPrimary"
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: 'underline' }}
              >
                {children}
              </Text>
            ) : (
              <Text as={Link} to={href} color="textPrimary" style={{ textDecoration: 'underline' }}>
                {children}
              </Text>
            )
          },
        }}
      />
    </Root>
  )
}
