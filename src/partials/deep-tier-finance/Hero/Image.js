import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  margin: 0 0 90px auto;

  @media only screen and (min-width: 768px) {
    width: 90%;
    margin: 0 0 0 auto;
  }

  @media only screen and (min-width: 424px) and (max-width: 768px) {
    width: 80%;
    margin: 0 auto 90px auto;
  }
`

export default Image
