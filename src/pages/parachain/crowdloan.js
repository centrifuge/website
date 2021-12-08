import React from "react";
import Theme from "../../components/Theme";
import SEO from "../../components/SEO";
import { Page } from "../../components/ParachainCrowdloan/Page";

const ParachainCrowdloanPage = () => {
  const metadata = {
    title: "Centrifuge Parachain Crowdloan",
    description: null,
  };

  return (
    <Theme>
      <SEO {...metadata} />
      <Page />
    </Theme>
  );
};

export default ParachainCrowdloanPage;
