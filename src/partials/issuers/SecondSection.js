import React, { useContext, useEffect, useState } from "react";
import { Anchor, Box, Image, ResponsiveContext, Text } from "grommet";

import { Section } from "../../components/MDXLayout/shortcodes";
import illustration from "../../images/issuers/tvl-taf-stats.svg";
import { getTaf, getTvl } from "../../helpers/subgraph";
import BN from "bn.js";

const SecondSection = () => {
  const [tvl, setTvl] = useState("...");
  const [taf, setTaf] = useState("...");

  const size = useContext(ResponsiveContext);

  const fontSize = {
    small: {
      number: "25px",
      text: "10px"
    },
    medium: {
      number: "70px",
      text: "20px"
    },
    large: {
      number: "100px",
      text: "20px"
    }
  };

  useEffect(() => {
    async function updateData() {
      const tvl = await getTvl();
      const taf = await getTaf();

      let formattedTvl = tvl.div(new BN(10).pow(new BN(24))).toString();
      let formattedTaf = taf.div(new BN(10).pow(new BN(24))).toString();

      setTvl(`$${formattedTvl}m`);
      setTaf(`$${formattedTaf}m`);
    }

    updateData();
  }, []);

  return (
    <Section gap="large">
      <Box>
        <Text textAlign="center" size="xlarge" weight={500}>
          The liquidity provider for real-world assets
        </Text>
      </Box>
      <Box gap="medium">
        <Box style={{ position: "relative" }}>
          <Box pad={{ horizontal: "xlarge" }}>
            <Image src={illustration} />
          </Box>

          <Box
            align="center"
            style={{
              position: "absolute",
              top: "60%",
              transform: "translate(0, -50%)"
            }}
          >
            <Text size={fontSize[size].number} color="#FCBA59" weight="bold">
              {tvl}
            </Text>
            <Text size={fontSize[size].text} weight={500}>
              Total Value Locked
            </Text>
          </Box>

          <Box
            align="center"
            style={{
              position: "absolute",
              top: "60%",
              right: "0",
              transform: "translate(0, -50%)"
            }}
          >
            <Text size={fontSize[size].number} color="#2762FF" weight="bold">
              {taf}
            </Text>
            <Text size={fontSize[size].text} weight={500}>
              Total Assets Financed
            </Text>
          </Box>
        </Box>

        <Box align="end">
          <Text weight={500}>See more stats at:</Text>
          <Anchor href="https://tinlake.info" target="_blank">
            Tinlake.info
          </Anchor>
        </Box>
      </Box>
    </Section>
  );
};

export default SecondSection;
