import styled, { css } from 'styled-components'

const Collapse = styled.div`
  width: 100%;
  overflow: hidden;

  ${({ isOpen }) =>
    isOpen
      ? css`
          height: auto;
          padding: 144px 40px;
        `
      : css`
          height: 0;
          margin: 144px 40px 0 40px;
        `};
`

export default Collapse
