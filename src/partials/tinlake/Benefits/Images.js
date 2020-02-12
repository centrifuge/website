import styled from 'styled-components'

const Images = styled.div`
  display: flex;

  img {
    height: 64px;
    width: auto;
    margin-bottom: 20px;
  }

  img + img {
    margin-left: 16px;
  }
`

export default Images
