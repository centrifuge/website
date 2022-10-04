import styled from 'styled-components'
import { Box, Text } from '@centrifuge/fabric'

export const Root = styled(Box)`
  background-color: ${({ theme }) => theme.colors.textPrimary};
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  &:not(:first-child) {
    margin-top: 0.6em;
  }
`

export const ListItem = styled.li`
  & + & {
    margin-top: 0.2em;
  }
`
