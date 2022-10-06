import styled from 'styled-components'
import { AnchorButton, Container, Text } from '@centrifuge/fabric'

export const Inner = styled(Container)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    display: grid;
    grid-template-areas: 'inner';
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 15vw;
  font-weight: 400;
  line-height: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    font-size: 10vw;
    font-size: min(10vw, 9rem);
    grid-area: inner;
  }
`

export const Content = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    margin-top: 3vw;
    grid-area: inner;
    width: 50%;
    max-width: 500px;
    justify-self: end;
    text-align: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints['M']}) {
    margin-top: 0;
  }
`

export const Graphic = styled.div`
  display: none;
  width: 100%;
  aspect-ratio: 1 / 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    display: block;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`

export const Paragraph = styled(Text)`
  margin: 0;

  & + & {
    margin-top: 0.3em;
  }
`
export const CTA = styled(AnchorButton)`
  margin-top: 1.5rem;
`
