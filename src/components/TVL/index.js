import React, { useEffect, useState } from "react";
import BN from "bn.js";
import { Text } from "grommet";
import { getTvl } from "../../helpers/subgraph";

const TVL = ({ size }) => {
  const [tvl, setTvl] = useState("loading ...");

  useEffect(() => {
    async function updateTVL() {
      function addThousandsSeparators(x) {
        const parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      }

      const tvl = await getTvl();
      const formattedTvl = addThousandsSeparators(
        tvl.div(new BN(10).pow(new BN(18)))
      );

      setTvl(`$${formattedTvl}`);
    }

    updateTVL();
  }, []);

  return <Text size={size}>{tvl}</Text>;
};

export default TVL;
