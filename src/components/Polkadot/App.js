import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle.js";
import PolkadotHero from "./PolkadotHero.js";
import GrowPolkadot from "./GrowPolkadot.js";
import WeAreLive from "./WeAreLive.js";
import AboutCrowdloan from "./AboutCrowdloan.js";
import Benefits from "./Benefits.js";
import UseCases from "./UseCases.js";
import LearnMore from "./LearnMore.js";
import Bridge from "./Bridge.js";

export const App = () => {
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  return (
    <>
      <GlobalStyle />
      <PolkadotHero
        isEmailSubmitted={isEmailSubmitted}
        setIsEmailSubmitted={setIsEmailSubmitted}
      />
      <GrowPolkadot />
      <WeAreLive />
      <AboutCrowdloan />
      <Benefits />
      <UseCases isEmailSubmitted={isEmailSubmitted} />
      <LearnMore />
      <Bridge />
    </>
  );
};
