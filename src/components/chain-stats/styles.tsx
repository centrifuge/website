import styled from 'styled-components'
import { Box } from '@centrifuge/fabric'

export const Root = styled(Box)`
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    display: flex;
    gap: ${({ theme }) => theme.space[3]}px;
    border-top: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints['M']}) {
    gap: ${({ theme }) => theme.space[6]}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints['L']}) {
    gap: ${({ theme }) => theme.space[10]}px;
  }
`

export const ListItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: end;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    display: block;

    & + & {
      border-top: none;
    }

    > * {
      display: block;
    }

    > * + * {
      margin-top: 0.6rem;
    }
  }
`
