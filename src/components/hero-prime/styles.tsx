import styled from 'styled-components'
import { Box, Container, Text } from '@centrifuge/fabric'

export const Root = styled(Box)`
  --header-height: ${({ theme }) => theme.sizes.headerHeight[0]}px;
  min-height: calc(70vh - var(--header-height));
  position: relative;

  @supports (min-height: 70dvh) {
    min-height: calc(70dvh - var(--header-height));
  }

  @media screen and (min-height: 1200px) {
    min-height: calc(1200px - var(--header-height));
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    --header-height: ${({ theme }) => theme.sizes.headerHeight[1]}px;
  }
`

export const Inner = styled(Container)`
  position: relative;
  z-index: 2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    display: grid;
    grid-template-areas: 'inner';
  }
`

export const Media = styled(Box)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints['M']}) {
    z-index: 1;
    position: absolute;
    top: 5%;
    right: 0;
    height: 95%;
  }

  > * {
    display: block;
    width: 100%;
    height: 100%;
  }
`

export const Title = styled(Text)`
  max-width: 15ch;
`
