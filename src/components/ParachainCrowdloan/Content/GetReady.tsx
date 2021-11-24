import React from "react";
import styled from "styled-components";
import { ExternalLink } from "../../Links";

import { mediaGreaterThan } from "../shared/media";

const TextHeading2 = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22.5px;

  ${mediaGreaterThan("small")} {
    font-size: 24px;
    line-height: 40px;
  }
`;

const TextBody1 = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

  ${mediaGreaterThan("small")} {
    font-size: 20px;
    line-height: 32px;
  }
`;

const HeadingWrapper = styled.div`
  margin-bottom: 8px;

  ${mediaGreaterThan("small")} {
    margin-bottom: 24px;
  }
`;

export const GetReady = () => {
  return (
    <div>
      <HeadingWrapper>
        <TextHeading2>Get ready to contribute</TextHeading2>
      </HeadingWrapper>
      <TextBody1>
        Contributions will open at the launch of the auction. You need the{" "}
        <ExternalLink unstyled={0} href="https://polkadot.js.org/extension/">
          Polkadot.js
        </ExternalLink>{" "}
        browser extension installed, and an account with a minimum balance of
        0.1 DOT.
      </TextBody1>
    </div>
  );
};
