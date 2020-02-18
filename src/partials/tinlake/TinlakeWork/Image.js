import styled from 'styled-components'

const Image = styled.img`
  margin-top: 70px;

  @media only screen and (min-width: 769px) {
    margin-top: 0;
  }
  @media only screen and (min-width: 1140px) {
    margin-right: calc((100vw - 1140px) / -2 + 10vw);
  }
`

export default Image
