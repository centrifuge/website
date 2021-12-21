import React from "react";
import styled from "styled-components";
import { ExternalLink } from "../Links";

const CrossPageBannerStyled = styled.div``;

const ContentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.global.colors.brand};
  height: 56px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  margin-top: 32px;

  @media (min-width: 769px) {
    margin-top: 0;
  }
`;

const LinkCustom = styled(ExternalLink)`
  font-weight: 600;
  text-decoration: underline;
  :hover {
    color: white;
  }
`;
const staticContent = (
  <ContentStyled>
    <div>The Centrifuge Crowdloan is live.</div>
    <LinkCustom href="/parachain/crowdloan" unstyled={1}>
      Contribute now
    </LinkCustom>
  </ContentStyled>
);

const CrossPageBanner: React.FC = () => {
  if (!staticContent) return null;
  return <CrossPageBannerStyled>{staticContent}</CrossPageBannerStyled>;
};

export default CrossPageBanner;
