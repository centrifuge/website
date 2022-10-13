import styled from 'styled-components'
import { Box } from '@centrifuge/fabric'

export const Column = styled(Box)<{ flipped: boolean }>`
  @media (min-width: ${({ theme }) => theme.breakpoints['M']}) {
    order: ${({ flipped }) => (flipped ? 2 : 1)};
  }

  img {
    display: block;
    width: 100%;
    max-width: 300px;
    height: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints['M']}) {
      max-width: none;
    }
  }
`
