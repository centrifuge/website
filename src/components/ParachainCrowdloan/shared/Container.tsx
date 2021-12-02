import React from "react";
import styled from "styled-components";
import { onBreakpoint } from "./responsive";

export const Container: React.FC = styled.div`
  padding: 0 16px;

  ${onBreakpoint("L")} {
    padding: 0 clamp(16px, 6vw, 130px);
  }
`;
