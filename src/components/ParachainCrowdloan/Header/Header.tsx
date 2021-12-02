import React from "react";
import styled from "styled-components";

import centrifugeMarquee from "../../../images/centrifuge-marquee.svg";
import centrifugeWordmark from "../../../images/centrifuge-wordmark.svg";
import { HeaderWallet } from "./HeaderWallet";
import { onBreakpoint } from "../shared/responsive";

const HeaderBar = styled.div`
  height: 48px;
  background: #ffffff;
  color: #000000;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;

  ${onBreakpoint("L")} {
    height: 56px;
  }
`;

const ImgLogo = styled.img`
  height: 32px;
  content: url(${centrifugeMarquee});

  ${onBreakpoint("L")} {
    content: url(${centrifugeWordmark});
  }
`;

const HeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;

  ${onBreakpoint("L")} {
    font-size: 20px;
    line-height: 25px;
  }
`;

export const Header = () => {
  return (
    <HeaderBar>
      <ImgLogo />
      <HeaderTitle>Centrifuge Parachain Crowdloan</HeaderTitle>
      <HeaderWallet />
    </HeaderBar>
  );
};
