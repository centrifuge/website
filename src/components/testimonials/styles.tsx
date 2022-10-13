import styled from 'styled-components'
import { Box } from '@centrifuge/fabric'

export const Slide = styled.li<{ selected: boolean; offsetX: number; offsetY: number }>`
  --x: ${({ offsetX }) => -100 * offsetX}%;
  --y: ${({ offsetY }) => 100 * offsetY}%;

  flex: 0 0 100%;
  align-self: stretch;
  opacity: ${({ selected }) => (selected ? 1 : 0)};
  transition: transform 0.4s, opacity 0.4s linear;
  transform: translate(var(--x), var(--y));
`

export const Media = styled(Box)`
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export const Dot = styled.button<{ selected: boolean }>`
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ selected, theme }) =>
      selected ? theme.colors.accentSecondary : theme.colors.borderPrimary};
    border-radius: 50%;
    transform: scale(0.4);
  }
`
