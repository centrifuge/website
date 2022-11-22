import { Box } from '@centrifuge/fabric'
import styled from 'styled-components'

export const Viewport = styled(Box)`
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`
