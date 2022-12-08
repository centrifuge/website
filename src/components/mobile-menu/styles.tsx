import { Box, Text } from '@centrifuge/fabric'
import styled, { css } from 'styled-components'

const List = styled.ul<{ open: boolean }>`
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
`

export const Panel = styled(List)<{ open: boolean }>`
  --offset: ${({ theme }) => theme.sizes.headerHeight[0]}px;

  position: fixed;
  top: var(--offset);
  right: 0;
  width: 100%;
  height: calc(100vh - var(--offset));
  overflow: auto;

  background-color: ${({ theme }) => theme.colors.backgroundPage};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  @supports (height: calc(100dvh - 1px)) {
    height: calc(100dvh - var(--offset));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    --offset: ${({ theme }) => theme.sizes.headerHeight[1]}px;
  }
`

export const Collapsable = styled(List)`
  height: ${({ open }) => (open ? 'auto' : '0px')};
`

export const Wrapper = styled(Box)<{ open: boolean }>`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.accentSecondary};
    transform-origin: 0 50%;
    transition: transform 0.1s;
    transform: ${({ open }) => (open ? 'scaleX(1)' : 'scaleX(0)')};
  }
`

const sharedFontStyle = css`
  font-size: 36px;
  font-weight: 400;
  line-height: 1.4em;
  color: inherit;
`

export const Link = styled(Text)`
  ${sharedFontStyle}
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const Toggle = styled(Text)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 6px;
  ${sharedFontStyle}
`

export const ToogleIcon = styled.span<{ open: boolean }>`
  position: relative;
  width: 0.8em;
  height: 0.8em;

  &::before,
  &:after {
    --width: 100%;
    --height: 2px;

    content: '';
    position: absolute;
    top: calc(50% - var(--height) * 0.5);
    left: calc(50% - var(--width) * 0.5);
    width: var(--width);
    height: var(--height);
    background-color: ${({ theme }) => theme.colors.textPrimary};
  }

  &:after {
    transition: transform 0.1s;
    transform: ${({ open }) => (open ? 'scaleY(0) rotate(90deg)' : 'scaleY(1) rotate(90deg)')};
  }
`
