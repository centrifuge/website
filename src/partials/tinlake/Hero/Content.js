import styled from 'styled-components'


const Content = styled.div`
   h1 {
      margin-top: 0;
      margin-bottom: 23px;

      @media only screen and (max-width: 768px) {
         margin-bottom: 31px;
      }
   }

   
   h1,p {
      @media only screen and (max-width: 768px) {
         text-align: center;
      }
   }
`

export default Content