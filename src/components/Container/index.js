import styled from "styled-components";

const Container = styled.div`
  @media only screen and (max-width: 1080px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : `1080px`)};
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export default Container;
