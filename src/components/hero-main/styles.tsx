import styled from 'styled-components'
import { Box, Container, Text } from '@centrifuge/fabric'

export const Root = styled(Box)`
  --header-height: ${({ theme }) => theme.sizes.headerHeight[0]}px;
  min-height: calc(70vh - var(--header-height));
  position: relative;

  @media screen and (min-height: 1000px) {
    min-height: calc(700px - var(--header-height));
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
/*
export const Media = styled(Box)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints['M']}) {
    z-index: 1;
    position: absolute;
    right: 0;
    top: 0;
  }
`*/

export const Media = styled.div`
  display:none;
  max-width: 33%;
  position: absolute;
  right: 0;
  top: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints['M']}) {
    display: block;
  }

  @media screen and (max-height: 1000px) {
    width: 60vh;
    min-width: 280px;
    margin-inline: auto;
  }
`

export const Title = styled(Text)`
  max-width: 15ch;
`
