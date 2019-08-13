import styled from 'styled-components'
import Column from "../../../components/Column";

const Image = styled(Column)`
   @media only screen and (min-width: 769px) {
      margin-top: 50px;               
   }

   img {
      width: 100%;
      margin: 40px auto 120px;

      @media only screen and (min-width: 769px) {
         margin: 0 auto;                  
      }
   }
`

export default Image