import styled from 'styled-components'

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
