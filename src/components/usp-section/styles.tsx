import styled from 'styled-components'
import { Box, Stack } from '@centrifuge/fabric'

export const ItemContent = styled(Stack)`
  border-top: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`

export const Media = styled(Box)`
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`
