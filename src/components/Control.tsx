import React from 'react'
import styled from 'styled-components'

export const Control = styled.button`
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
    transform: scale(0.6);
  }
`
