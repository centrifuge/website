import React, { useEffect, useState } from "react";
import { Box, Paragraph, Anchor } from "grommet";
import styled from "styled-components";
import Cookie from "js-cookie";

const Banner = styled(Box)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const GDPR = () => {
  const [bannerEnabled, setBannerEnabled] = useState(false);

  useEffect(() =>
    Cookie.get("bannerCookieDismissed") === "true"
      ? setBannerEnabled(false)
      : setBannerEnabled(true)
  );

  if (!bannerEnabled) return null;

  return (
    <Banner
      background="alert"
      pad={{ vertical: "small", horizontal: "medium" }}
    >
      <Box direction="row-responsive" justify="between" align="center">
        <Paragraph margin={{ vertical: "xsmall" }}>
          By continuing your visit on this site, you accept the use of cookies
          from Google Analytics so we can improve the site for you.{" "}
          <Anchor underline href="/data-privacy-policy">
            Read more
          </Anchor>
        </Paragraph>
        <Anchor
          underline
          margin={{ vertical: "xsmall" }}
          onClick={() => {
            setBannerEnabled(false);
            Cookie.set("bannerCookieDismissed", "true");
          }}
        >
          Accept
        </Anchor>
      </Box>
    </Banner>
  );
};

export default GDPR;
