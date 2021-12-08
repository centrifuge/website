import React from "react";
import styled from "styled-components";

import { ExternalLink } from "../Links";
import { Blogpost } from "./shared/Blogpost";
import { TextSpan } from "./shared/TextSpan";

const StyledRelatedResources = styled.div`
  padding: 48px;
  background: black;
  border-bottom: 1px solid white;
`;

const ParachainsText = styled.span`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding-top: 32px;
`;

const CardsArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  margin-top: 40px;
`;

export const RelatedResources = () => {
  return (
    <StyledRelatedResources>
      <TitleRow>
        <TextSpan
          css={`
            color: white;
            text-align: center;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
          `}
        >
          Related resources
        </TextSpan>
      </TitleRow>

      <CardsArea>
        <Blogpost
          title="Centrifuge: Connecting Polkadot to a Limitless Market"
          subtitle="What will a Centrifuge parachain mean for the Polkadot ecosystem?"
          imageUrl="https://miro.medium.com/max/1400/0*8BZw6hGm7a-YS1qm"
          postUrl="https://medium.com/centrifuge/centrifuge-connecting-polkadot-to-a-limitless-market-73c7a01d07c0"
        />
        <Blogpost
          title="The Centrifuge Parachain Crowdloan Opens in Batch 2!"
          subtitle="Real World Assets are Coming to Polkadot."
          imageUrl="https://miro.medium.com/max/2000/0*DVAr79_8QMpJTajE"
          postUrl="https://medium.com/centrifuge/the-centrifuge-parachain-crowdloan-opens-in-batch-2-36dc8a8aec15"
        />
        <Blogpost
          title="Going, going…. Gone!"
          subtitle="Why parachains auction slots are crucial for the future of blockchain development."
          imageUrl="https://miro.medium.com/max/1400/1*UDs0kRm373weVEEQy6nj5Q.png"
          postUrl="https://medium.com/centrifuge/going-going-e1896d9e28a2"
        />
      </CardsArea>
      <BottomRow>
        <ParachainsText>
          <ExternalLink
            unstyled={1}
            href="https://parachains.info"
            style={{ textDecoration: "underline" }}
          >
            parachains.info
          </ExternalLink>{" "}
          — Polkadot &amp; Kusama ecosystem projects directory
        </ParachainsText>
      </BottomRow>
    </StyledRelatedResources>
  );
};
