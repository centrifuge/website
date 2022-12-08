import styled from 'styled-components'

export const SVG = styled.svg<{ size: string | number }>`
  display: block;
  width: ${({ size }) => (typeof size === 'string' ? size : `${size}px`)};
  height: ${({ size }) => (typeof size === 'string' ? size : `${size}px`)};
  fill: currentColor;
`
