import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  min-width: 376px;
  max-width: 376px;
  min-height: 480px;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  transition: transform 100ms;
  :hover {
    transform: scale(1.05);
  }
  color: black;
  overflow: hidden;
`;

const CardTop = styled.div`
  height: 212px;
  background: #000;
`;

const CardBottom = styled.div`
  background: #fff;
  color: #000;
`;

type CardBlogpostProps = {
  top: React.ReactElement;
  bottom: React.ReactElement;
};

export const CardBlogpost: React.FC<CardBlogpostProps> = ({ top, bottom }) => (
  <CardBox>
    <CardTop>{top}</CardTop>
    <CardBottom>{bottom}</CardBottom>
  </CardBox>
);
