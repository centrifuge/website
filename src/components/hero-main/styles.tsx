import styled from 'styled-components'
import { Container } from '@centrifuge/fabric'

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
    font-size: min(10vw, 7rem);
    grid-area: inner;
  }
`

export const Content = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    grid-area: inner;
    width: 50%;
    max-width: 500px;
    justify-self: end;
    text-align: center;
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

export const Paragraph = styled.p`
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.4;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    font-size: 1.3rem;
  }

  & + & {
    margin-block-start: 0.3em;
  }
`
