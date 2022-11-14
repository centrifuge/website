import React from 'react'
import styled from 'styled-components'

export const Control = styled.button<{ flipped?: boolean }>`
  --size: 40px;
  --outline: ${({ theme }) => `inset 0 0 0 1px ${theme.colors.borderPrimary}`};
  --default: ${({ theme }) => `0 0 0 ${theme.colors.textPrimary}`};
  --hover: ${({ theme }) => `4px 4px 1px -1px ${theme.colors.textPrimary}`};

  display: block;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  box-shadow: var(--outline), var(--default);
  transition: box-shadow 0.15s;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover {
    box-shadow: var(--outline), var(--hover);
  }

  svg {
    display: block;
    width: var(--size);
    height: var(--size);
    transform: ${({ flipped }) => (flipped ? 'scale(0.6) rotate(180deg)' : 'scale(0.6)')};
  }
`

export const Arrow = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="black"
      d="M51.3039 31.9047L31.844 51.3647L34.6724 54.1931L57.7627 31.1028L59.1769 29.6886L57.7627 28.2744L34.7633 5.27497L31.9349 8.1034L51.7353 27.9039L0.996051 28.0039L1.00394 32.0039L51.3039 31.9047Z"
    />
  </svg>
)
