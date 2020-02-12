import styled from 'styled-components'

import Column from '../../../components/Column'

const Card = styled(Column)`
  & + & {
    padding-top: 50px;
  }

  @media only screen and (min-width: 768px) {
    & + & {
      padding-top: 0px;
    }
  }
`

export default Card
