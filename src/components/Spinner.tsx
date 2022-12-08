import styled, { keyframes } from 'styled-components'
import { IconBrandSpinner } from '@centrifuge/fabric'

const rotate = keyframes`
 0% { transform: rotate(0); }
 100% { transform: rotate(360deg); }
`

export const Spinner = styled(IconBrandSpinner)`
  --size: 40px;
  display: block;
  width: var(--size);
  height: var(--size);
  margin-inline: auto;
  animation: ${rotate} 1s infinite linear;
`
