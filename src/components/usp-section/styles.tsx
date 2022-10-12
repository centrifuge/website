import styled from 'styled-components'
import { Box, Stack } from '@centrifuge/fabric'

export const Intro = styled(Box)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints['M']}) {
    max-width: 50%;
  }
`

export const ItemContent = styled(Stack)`
  border-top: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`
