import React, { useEffect, useMemo, useState } from "react";
import { TopList } from "../shared/Leaderboard";
import { truncateAddress } from "../shared/format";
import { PARACHAIN_NAME } from "../shared/const";
import { getDebugSearchParam } from "../shared/browserOnly";
import { HIDE_LEADERBOARDS } from "../shared/config";

type TopReferrersResponse = {
  numberOfTimesUsed: number;
  account: string;
}[];

export const TopReferrers: React.FC = () => {
  if (HIDE_LEADERBOARDS) return null;
  const [topReferrers, setTopReferrers] = useState<TopReferrersResponse>();
  useEffect(() => {
    let mounted = true;
    (async () => {
      const response = await fetch("/.netlify/functions/getCentrifugeTopReferrers", {
        method: "POST",
        body: JSON.stringify({ amount: 5, parachain: PARACHAIN_NAME }),
      });

      const json = await response.json();

      if (mounted) {
        // debug mock values
        const debugPhase = getDebugSearchParam("debugPhase");
        if (debugPhase && !json?.length) {
          setTopReferrers(
            new Array(5).fill({
              account: "GqP5S2X8wDc7HuXRN41sXfjuVXM8DzZDceaDfv5dkvyRbwc",
              numberOfTimesUsed: 66,
            })
          );
        } else {
          setTopReferrers(json);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const listItems = useMemo(
    () =>
      topReferrers && Array.isArray(topReferrers)
        ? topReferrers.map((referrer) => ({
            label: truncateAddress(referrer.account),
            value: `${referrer.numberOfTimesUsed}`,
          }))
        : [],
    [topReferrers]
  );

  return <TopList title="Top referrers" items={listItems} />;
};
