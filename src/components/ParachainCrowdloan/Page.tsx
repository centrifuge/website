import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import { Web3Provider } from "../Web3Provider";
import { Contribute } from "./Content/Content";
import { CountdownContextProvider } from "./CountdownContext";
import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";
import { RelatedResources } from "./RelatedResources";
import { mediaGreaterThan } from "./shared/media";

export const Page = () => {
  return (
    <Web3Provider>
      <CountdownContextProvider>
        <FixedHeader>
          <Header />
        </FixedHeader>
        <PageWithFixedHeader>
          <Hero />
          <Contribute />
          <RelatedResources />
          <Footer />
        </PageWithFixedHeader>
      </CountdownContextProvider>
    </Web3Provider>
  );
};

const FixedHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 48px;
  z-index: 50;

  ${mediaGreaterThan("small")} {
    height: 56px;
  }
`;

const PageWithFixedHeader = styled.div`
  width: 100%;
  padding-top: 48px;

  ${mediaGreaterThan("small")} {
    padding-top: 56px;
  }
`;
