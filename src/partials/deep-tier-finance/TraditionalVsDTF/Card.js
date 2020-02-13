import styled from 'styled-components'

import { Box } from 'grommet'

const Card = styled(Box)`
  width: 100%;
  border-radius: 16px;
  padding: 32px;

  @media only screen and (max-width: 768px) {
    margin-top: 70px;
  }
`

export default Card
