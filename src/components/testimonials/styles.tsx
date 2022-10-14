import styled from 'styled-components'
import { Box, Grid } from '@centrifuge/fabric'

// &quot;
const quotationMark = (color: string) =>
  `data:image/svg+xml; utf8, <svg viewBox="0 0 67 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 58.9674V43.4535C0 38.7419 0.833152 33.743 2.49946 28.4567C4.22322 23.1131 6.69395 17.9705 9.91164 13.0291C13.1868 8.03015 17.1227 3.69201 21.7194 0.0146484L32.7515 8.97822C29.1316 14.1495 25.9714 19.5506 23.2708 25.1816C20.6277 30.7551 19.3062 36.7308 19.3062 43.1087V58.9674H0ZM34.2485 58.9674V43.4535C34.2485 38.7419 35.0816 33.743 36.7479 28.4567C38.4717 23.1131 40.9424 17.9705 44.1601 13.0291C47.4353 8.03015 51.3712 3.69201 55.9679 0.0146484L67 8.97822C63.3801 14.1495 60.2198 19.5506 57.5193 25.1816C54.8762 30.7551 53.5546 36.7308 53.5546 43.1087V58.9674H34.2485Z" fill="%23${color.replace(
    '#',
    ''
  )}"/></svg>`

export const Content = styled(Grid)`
  position: relative;

  &::before {
    content: url('${({ theme }) => quotationMark(theme.colors.borderPrimary)}');
    position: absolute;
    top: 56px;
    left: 0;
    width: 67px;
    height: 59px;

    @media (min-width: ${({ theme }) => theme.breakpoints['S']}) {
      top: 15px;
      width: 80px;
      height: 75px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints['M']}) {
      top: 60px;
      left: calc(50% - 20px);
    }
  }
`

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
