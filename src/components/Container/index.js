import styled from "styled-components";

const Container = styled.div`
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : `1200px`)};
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export default Container;
