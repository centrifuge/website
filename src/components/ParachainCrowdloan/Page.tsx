import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import { Web3Provider } from "../Web3Provider";
import { Content } from "./Content/Content";
import { PolkadotApiProvider } from "./shared/context/PolkadotApiProvider";
import { AuctionContextProvider } from "./shared/context/AuctionContext";
import { StakeFormContextProvider } from "./shared/context/StakeFormContext";
import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";
import { RelatedResources } from "./RelatedResources";
import { WS_PROVIDER } from "./shared/const";
import { onBreakpoint } from "./shared/responsive";

export const Page = () => {
  return (
    <Web3Provider network="polkadot">
      <PolkadotApiProvider wsProviderUrl={WS_PROVIDER}>
        <AuctionContextProvider>
          <StakeFormContextProvider>
            <FixedHeader>
              <Header />
            </FixedHeader>
            <PageWithFixedHeader>
              <Hero />
              <Content />
              <RelatedResources />
              <Footer />
            </PageWithFixedHeader>
          </StakeFormContextProvider>
        </AuctionContextProvider>
      </PolkadotApiProvider>
    </Web3Provider>
  );
};

const FixedHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 48px;
  z-index: 15;

  ${onBreakpoint("L")} {
    height: 56px;
  }
`;

const PageWithFixedHeader = styled.div`
  width: 100%;
  padding-top: 48px;

  ${onBreakpoint("L")} {
    padding-top: 56px;
  }
`;
