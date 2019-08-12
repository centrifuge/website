import styled from 'styled-components'

const Image = styled.img`
   width: 100%;
   margin: 100px auto 0;

   @media only screen and (min-width: 550px) {
      width: 70%;
   }

   @media only screen and (min-width: 769px) {
      margin: 130px auto 0;
      width: 100%;
   }
`

export default Image