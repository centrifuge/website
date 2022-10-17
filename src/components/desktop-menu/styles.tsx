import styled, { css } from 'styled-components'
import { Box } from '@centrifuge/fabric'

const dropDownOpen = css`
  visibility: visible;
  transform: translateY(0);
  opacity: 1;
  transition: visibility 0s 0s, transform 0.1s, opacity 0.1s linear;
`

export const Dropdown = styled(Box)`
  --offset: 15px;

  position: absolute;
  top: calc(100% + var(--offset));
  left: calc(var(--offset) * -1);

  visibility: hidden;

  background-color: ${({ theme }) => theme.colors.backgroundPage};
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.radii.tooltip}px;

  transform: translateY(10px);
  opacity: 0;
  transition: visibility 0s 0.05s, transform 0.1s, opacity 0.1s linear;

  &:focus-within,
  &:hover {
    ${dropDownOpen}
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: var(--offset);
  }

  a {
    white-space: nowrap;
  }
`

export const ListItem = styled(Box)`
  > *:hover + ${Dropdown}, > *:focus + ${Dropdown} {
    ${dropDownOpen}
  }
`
