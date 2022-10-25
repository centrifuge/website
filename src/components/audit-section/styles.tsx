import styled from 'styled-components'

export const Media = styled.li`
  img,
  .gatsby-image-wrapper img {
    display: block;
    width: auto;
    height: 30px;

    @media (min-width: ${({ theme }) => theme.breakpoints['S']}) {
      height: 40px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints['M']}) {
      height: 60px;
    }
  }
`
