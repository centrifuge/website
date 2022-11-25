import { Box, Container } from '@centrifuge/fabric'
import styled from 'styled-components'

export const Viewport = styled(Container)<{ threshold?: number; desktopMaxWidth?: number }>`
  cursor: grab;

  ${({ desktopMaxWidth }) =>
    desktopMaxWidth
      ? `
    @media screen and (min-width: ${desktopMaxWidth}px) {
      --fadeOffset: 300px;
      mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 1%,
        black calc(0% + var(--fadeOffset)),
        black calc(100% - var(--fadeOffset)),
        rgba(0, 0, 0, 0) 99%
      );
      mask-size: cover;
    }  
  `
      : undefined}

  &:active {
    cursor: grabbing;
  }

  ${({ threshold }) =>
    threshold
      ? `
    li:nth-child(n+${threshold}) {
      transform: translateX(50%)
    }
  `
      : undefined}
`
