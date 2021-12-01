import React, { useEffect, useMemo, useState } from "react";
import { TopList } from "../shared/Leaderboard";
import { truncateAddress } from "../shared/format";
import { PARACHAIN_NAME } from "../shared/const";

type TopReferrersResponse = {
  numberOfTimesUsed: number;
  account: string;
}[];

export const TopReferrers: React.FC = () => {
  const [topReferrers, setTopReferrers] = useState<TopReferrersResponse>();
  useEffect(() => {
    let mounted = true;
    (async () => {
      const response = await fetch("/.netlify/functions/getTopReferrers", {
        method: "POST",
        body: JSON.stringify({ amount: 5, parachain: PARACHAIN_NAME }),
      });

      const json = await response.json();

      if (mounted) {
        setTopReferrers(json);
      }
    })();
    return () => {
      mounted = false;
    };
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
