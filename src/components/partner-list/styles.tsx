import styled from 'styled-components'
import { Shelf, Text } from '@centrifuge/fabric'

export const Inner = styled(Shelf)`
  overflow: hidden;

  img {
    display: block;
    width: auto;
    height: 20px;
  }

  .marquee-container {
    position: absolute;
    top: 0;
    left: 0;
  }

  .marquee-container img {
    margin-right: 20px;
  }

  > span {
    display: none;
    white-space: nowrap;

    @media (min-width: ${({ theme }) => theme.breakpoints['S']}) {
      display: block;
    }
  }
`
