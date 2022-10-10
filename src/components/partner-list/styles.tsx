import styled from 'styled-components'
import { Shelf, Text } from '@centrifuge/fabric'

export const Inner = styled(Shelf)`
  overflow: hidden;

  .marquee-container {
    position: absolute;
    top: 0;
    left: 0;
  }

  > span {
    display: none;
    white-space: nowrap;

    @media (min-width: ${({ theme }) => theme.breakpoints['S']}) {
      display: block;
    }
  }
`

export const List = styled(Shelf)`
  list-style: none;
`

export const Image = styled.img<{ spaced?: boolean }>`
  display: block;
  width: auto;
  height: 20px;
  margin-left: ${({ spaced }) => (spaced ? '30px' : '0')};
`
