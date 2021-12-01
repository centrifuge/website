import React from "react";
import styled from "styled-components";
import { mediaGreaterThan } from "./media";

export const Container: React.FC = styled.div`
  padding: 0 16px;

  ${mediaGreaterThan("small")} {
    padding: 0 clamp(16px, 6vw, 130px);
  }
`;
