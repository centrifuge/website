import styled from 'styled-components'

import Column from 'components/Column'

const ColumnImage = styled(Column)`
  @media only screen and (min-width: 768px) {
    height: 100px;
  }

  img {
    width: 100%;
  }
`

export default ColumnImage
