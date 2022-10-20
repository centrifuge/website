import React from 'react'
import { Text, Box, Container, Shelf } from '@centrifuge/fabric'
import { InternalLink } from '../components/InternalLink'
import { Layout } from '../components/Layout'
import styled from 'styled-components'

const Title = styled.span`
  position: relative;
  display: block;
  font-size: 23vw;
  font-weight: 600;
  line-height: 1.1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints['M']}) {
    font-size: 190px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.borderPrimary};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints['M']}) {
      width: 40%;
    }
  }
`

const Body = styled.span`
  font-size: 18px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    font-size: 25px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints['M']}) {
    font-size: 35px;
  }
`

export default function NotFoundPage() {
  return (
    <Layout>
      <Box px={2} py={6}>
        <Container
          maxWidth="containerNarrow"
          as={Shelf}
          flexDirection="column"
          alignItems={['center', 'center', 'start']}
        >
          <Text as="h1" textAlign={['center', 'center', 'left']} style={{ width: 'max-content' }}>
            <Title>404</Title>
            <br />
            <Body>Oops! Page not found</Body>
          </Text>

          <Box mt={2}>
            <InternalLink to="/">Back to homepage</InternalLink>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export const Head = () => <title>Not found</title>
