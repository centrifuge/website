import React, { useEffect, useState } from "react";
import BN from "bn.js";
import { Text } from "grommet";

const TVL = ({ size }) => {
  const [tvl, setTvl] = useState("loading ...");

  useEffect(() => {
    async function updateTVL() {
      function addThousandsSeparators(x) {
        const parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      }

      const res = await fetch(
        "https://thegraph.centrifuge.io/subgraphs/name/centrifuge/tinlake",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query {
                pools {
                reserve, assetValue
                }
              }`
          })
        }
      );

      if (!res.ok) {
        throw new Error(
          `Failed to rerieve pool data for TVL: ${res.statusText}`
        );
      }

      const tvl = (await res.json()).data.pools.reduce((sum, pool) => {
        return sum.add(new BN(pool.assetValue)).add(new BN(pool.reserve));
      }, new BN(0));

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
