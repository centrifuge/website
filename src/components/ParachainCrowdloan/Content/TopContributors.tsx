import React, { useEffect, useMemo, useState } from "react";
import { TopList } from "../shared/Leaderboard";
import { formatDOT, truncateAddress } from "../shared/format";

type TopContributorsResponse = {
  numberOfContributions: number;
  account: string;
  amount: string;
}[];

export const TopContributors: React.FC = () => {
  const [topContributors, setTopContributors] = useState<
    TopContributorsResponse
  >();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "/.netlify/functions/getTopContributorsCfg",
        {
          method: "POST",
          body: JSON.stringify({ amount: 5 }),
        }
      );

      const json = await response.json();

      setTopContributors(json);
    })();
  }, []);

  const listItems = useMemo(
    () =>
      topContributors
        ? topContributors.map((item) => ({
            label: truncateAddress(item.account),
            value: `${formatDOT(item.amount)} DOT`,
          }))
        : [],
    [topContributors]
  );

  return <TopList title="Top contributors" items={listItems} />;
};
