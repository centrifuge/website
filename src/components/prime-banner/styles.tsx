import styled from 'styled-components'
import { Text } from '@centrifuge/fabric'

export const Title = styled(Text)`
  @media (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    white-space: pre;
  }
`
