import { Link } from 'gatsby'
import { Box } from '@centrifuge/fabric'
import styled from 'styled-components'

export const Root = styled(Box)<{ isHidden: boolean }>`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  background-color: ${({ theme }) => theme.colors.backgroundPage};
  transition: transform 0.25s;
  transform: ${({ isHidden }) => `translateY(${isHidden ? -100 : 0}%)`};
`

export const LogoLink = styled(Link)`
  display: block;
  width: 80px;
  height: 25px;

  @media (min-width: ${({ theme }) => theme.breakpoints['S']}) {
    width: 100px;
    height: 30px;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`
