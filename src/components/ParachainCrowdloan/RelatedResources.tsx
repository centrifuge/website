import React from "react";
import styled from "styled-components";

import useCaseWhatToExpect from "../../images/parachain-crowdloan/card-what-to-expect.svg";

import { CardBlogpost } from "../CardBlogpost";
import { ExternalLink } from "../Links";
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

  margin-top: 40px;
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
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
        <CardBlogpost
          top={<img src={useCaseWhatToExpect} />}
          bottom={
            <CardBottom>
              <TextSpan
                css={`
                  font-weight: 600;
                  font-size: 20px;
                  line-height: 25px;
                `}
              >
                The Centrifuge Parachain Crowdloan Opens in Batch 2!
              </TextSpan>

              <TextSpan
                css={`
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 22px;
                `}
              >
                Real World Assets are Coming to Polkadot.
              </TextSpan>

              <ExternalLink unstyled={0} href="https://parachains.info">
                <TextSpan
                  css={`
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 22px;
                  `}
                >
                  Read more...
                </TextSpan>
              </ExternalLink>
            </CardBottom>
          }
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
