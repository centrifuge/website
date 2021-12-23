import React from "react";
import styled from "styled-components";

import logoKraken from "../../../images/parachain-crowdloan/logo-kraken.svg";
import logoParallel from "../../../images/parachain-crowdloan/logo-parallel.svg";
import logoKucoin from "../../../images/parachain-crowdloan/logo-kucoin.svg";
import logoOkex from "../../../images/parachain-crowdloan/logo-okex.svg";
import logoFearless from "../../../images/parachain-crowdloan/logo-fearless.svg";
import { ExternalLink } from "../../Links";
import { FAQ_URL } from "../shared/config";

const LINK_ITEMS = [
  {
    name: "Parallel",
    logo: logoParallel,
    link: "https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2031",
  },
  {
    name: "Kraken",
    logo: logoKraken,
    link: "https://www.kraken.com/en-gb/learn/parachain-auctions",
  },
  {
    name: "Kucoin",
    logo: logoKucoin,
    link: "https://www.kucoin.com/earn/polkadot",
  },
  {
    name: "Okex",
    logo: logoOkex,
    link: "https://www.okex.com/earn/slotauction",
  },
  {
    name: "Fearless",
    logo: logoFearless,
    link:
      "https://medium.com/fearlesswallet/polkadot-parachain-auction-and-crowdloans-explained-1cd18675b401",
  },
];

const ExchangeLinksStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  padding: 24px 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
`;

const LinksArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
`;

const LinksLabel = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

const FootNote = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 19.25px;
  color: #757575;
`;

export const ExchangeLinks = () => {
  return (
    <ExchangeLinksStyled>
      <Content>
        <LinksLabel>You can also contribute using</LinksLabel>
        <LinksArea>
          {LINK_ITEMS.map(({ name, logo, link }) => (
            <ExternalLink key={link} unstyled={1} href={link}>
              <img src={logo} alt={`${name} exchange link`} />
            </ExternalLink>
          ))}
        </LinksArea>
      </Content>
      <FootNote>
        Not all contributions through these partners are eligible for all
        bonuses. Check the{" "}
        <ExternalLink
          unstyled={1}
          style={{ textDecoration: "underline" }}
          href={FAQ_URL}
        >
          FAQs
        </ExternalLink>{" "}
        to confirm.
      </FootNote>
    </ExchangeLinksStyled>
  );
};
