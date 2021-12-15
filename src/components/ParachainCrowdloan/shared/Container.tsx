import React from "react";
import styled from "styled-components";
import { onBreakpoint } from "./responsive";

export const Container: React.FC = styled.div`
  padding: 0 16px;

  ${onBreakpoint("L")} {
    max-width: 1152px;
    margin: 0 auto;
  }
`;
