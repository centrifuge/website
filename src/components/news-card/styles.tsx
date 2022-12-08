import styled from 'styled-components'
import { Text } from '@centrifuge/fabric'

export const Anchor = styled(Text)<{ boxed: boolean }>`
  &::after {
    display: ${({ boxed }) => (boxed ? 'block' : 'none')};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.radii.input}px;
  }

  &:focus-visible::after {
    outline: ${({ theme }) => `2px solid ${theme.colors.accentPrimary}`};
  }

  span {
    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`
