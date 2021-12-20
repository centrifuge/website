import React from "react";
import styled from "styled-components";
import { InternalLink } from "../Links";

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
`;

const InternalLinkCustom = styled(InternalLink)`
  font-weight: 600;
  text-decoration: underline;
  :hover {
    color: white;
  }
`;
const staticContent = (
  <ContentStyled>
    <div>The Centrifuge Crowdloan is live.</div>
    <InternalLinkCustom to="/parachain/crowdloan" unstyled={1}>
      Contribute Now
    </InternalLinkCustom>
  </ContentStyled>
);

const CrossPageBanner: React.FC = () => {
  if (!staticContent) return null;
  return <CrossPageBannerStyled>{staticContent}</CrossPageBannerStyled>;
};

export default CrossPageBanner;
