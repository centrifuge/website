import React, { useEffect, useMemo, useState } from "react";
import { TopList } from "../shared/Leaderboard";
import { truncateAddress } from "../shared/format";

type TopReferrersResponse = {
  numberOfTimesUsed: number;
  account: string;
}[];

export const TopReferrers: React.FC = () => {
  const [topReferrers, setTopReferrers] = useState<TopReferrersResponse>();
  useEffect(() => {
    (async () => {
      const response = await fetch("/.netlify/functions/getTopReferrersCfg", {
        method: "POST",
        body: JSON.stringify({ amount: 5 }),
      });

      const json = await response.json();

      setTopReferrers(json);
    })();
  }, []);

  const listItems = useMemo(
    () =>
      topReferrers
        ? topReferrers.map((referrer) => ({
            label: truncateAddress(referrer.account),
            value: `${referrer.numberOfTimesUsed}`,
          }))
        : [],
    [topReferrers]
  );

  return <TopList title="Top referrers" items={listItems} />;
};
