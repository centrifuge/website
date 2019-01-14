import styled from "styled-components";
import { Box } from "grommet";

const Container = styled(Box)`
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : `1280px`)};
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export default Container;
