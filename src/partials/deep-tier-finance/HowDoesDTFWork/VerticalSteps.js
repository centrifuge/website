import styled from 'styled-components'

const VerticalSteps = styled.div`
  width: 100%;
  display: flex;

  > div {
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
  }
`

export default VerticalSteps
