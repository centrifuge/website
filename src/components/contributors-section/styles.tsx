import { Box } from '@centrifuge/fabric'
import styled from 'styled-components'

export const Viewport = styled(Box)`
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`
export const Control = styled.button`
  --size: 40px;

  display: block;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.colors.borderButtonSecondary}`};

  svg {
    display: block;
    width: 100%;
    height: 100%;
    transform: scale(0.6);
  }
`
