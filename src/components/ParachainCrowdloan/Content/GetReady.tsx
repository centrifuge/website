import React from "react";
import styled from "styled-components";
import { ExternalLink } from "../../Links";
import { MIN_BALANCE_DOT } from "../shared/const";
import { onBreakpoint } from "../shared/responsive";

const TextHeading2 = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22.5px;

  ${onBreakpoint("M")} {
    font-size: 24px;
    line-height: 40px;
  }
`;

const TextBody1 = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

  ${onBreakpoint("M")} {
    font-size: 20px;
    line-height: 32px;
  }
`;

const HeadingWrapper = styled.div`
  margin-bottom: 8px;

  ${onBreakpoint("M")} {
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
        Contributions will open at the launch of the crowdloan. You need the{" "}
        <ExternalLink unstyled={0} href="https://polkadot.js.org/extension/">
          Polkadot.js
        </ExternalLink>{" "}
        browser extension installed and an account with a minimum balance of{" "}
        {MIN_BALANCE_DOT} DOT to participate.
      </TextBody1>
    </div>
  );
};
