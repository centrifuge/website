import React from "react";
import styled from "styled-components";

import { mediaGreaterThan } from "../shared/media";

const BlackInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  border: 2px solid #000000;
  border-radius: 2px;
  padding: 10px 16px;

  .text-top {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin-bottom: 6px;
  }

  .text-bottom {
    font-size: 14px;
    font-weight: 500;
    line-height: 19.225px;
  }

  ${mediaGreaterThan("small")} {
    width: 240px;
    height: 88px;
  }
`;

const BlackInfoBoxListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  ${mediaGreaterThan("small")} {
    gap: 24px;
  }
`;

const BLACK_INFO_TEXT = [
  {
    title: "Staking reward",
    desc: "400 CFG for each DOT staked",
  },
  {
    title: "10% Early bird bonus",
    desc: "Contribute within first 72 hrs of opening",
  },
  {
    title: "5% Referral reward",
    desc: "Reward for both referrer and contributor",
  },
  {
    title: "Heavyweight reward",
    desc: "Suprise for contributions larger than 10 DOT",
  },
];

export const BlackInfoBoxList = () => {
  return (
    <BlackInfoBoxListStyled>
      {BLACK_INFO_TEXT.map(({ title, desc }) => (
        <BlackInfoBox key={title}>
          <div className="text-top">{title}</div>
          <div className="text-bottom">{desc}</div>
        </BlackInfoBox>
      ))}
    </BlackInfoBoxListStyled>
  );
};
