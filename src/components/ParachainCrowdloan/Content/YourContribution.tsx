import React from "react";
import styled from "styled-components";

import { mediaGreaterThan } from "../shared/media";

const YourContributionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #f8f8f8;

  ${mediaGreaterThan("small")} {
    gap: 24px;
  }
`;

export const YourContribution = () => {
  return <YourContributionStyled>IMPLEMENTING</YourContributionStyled>;
};
