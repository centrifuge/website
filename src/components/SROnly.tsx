import { Box } from '@centrifuge/fabric'
import styled from 'styled-components'

export const SROnly = styled(Box)`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
