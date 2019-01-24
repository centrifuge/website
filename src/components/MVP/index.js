import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";

const Name = styled.p`
  font-weight: var(--fw-medium);
  font-size: 16px;
  margin-bottom: 4px;
`;

const Title = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

const MVPWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MVP = ({ headshot, name, title }) => (
  <MVPWrapper>
    <Image
      imgStyle={{ borderRadius: 128 / 2 }}
      placeholderStyle={{ borderRadius: 128 / 2 }}
      fixed={headshot.fixed}
      alt={name}
    />
    <Name>{name}</Name>
    <Title>{title}</Title>
  </MVPWrapper>
);

export default MVP;
