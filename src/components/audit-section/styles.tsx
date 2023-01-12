import styled from 'styled-components'

export const Media = styled.li`
  img,
  .gatsby-image-wrapper img {
    display: block;
    width: auto;
    height: 30px;
    transition: transform 0.15s;

    @media (min-width: ${({ theme }) => theme.breakpoints['S']}) {
      height: 40px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints['M']}) {
      height: 60px;
    }
  }
`

export const Anchor = styled.a`
  display: block;

  &:focus-visible {
    outline: ${({ theme }) => `2px solid ${theme.colors.accentPrimary}`};
  }

  &:hover img {
    transform: scale(0.95);
  }
`
