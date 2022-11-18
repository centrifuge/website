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

export const Vacancy = styled.a`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: background-color 0.15s linear;

  > span {
    transition: transform 0.15s;
  }

  > svg {
    --size: 30px;
    display: block;
    width: var(--size);
    height: var(--size);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blueScale[30]};

    > span {
      transform: translateX(5px);
    }
  }
`
