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
      // const response = await fetch("/.netlify/functions/getTopContributors", {
      //   method: "POST",
      //   body: JSON.stringify({ amount: 5 }),
      // });

      // const json = await response.json();

      // setTopReferrers(json); // mocked
      setTopContributors([
        {
          account: "HNf7Bz3Q2EbbFaLnTCF68tsk4fsgpQpgmM1ibhUdetLPNic",
          amount: "25000000000000000",
          numberOfContributions: 1,
        },
        {
          account: "DDTVgKoSs63ynW61wo8A2KtLuv4LX7YKCHdrKUts4RNMec1",
          amount: "11000000000000000",
          numberOfContributions: 1,
        },
        {
          account: "FFis2qYewsBeFHZK4xnTbGQRkFtWadECQ8YkpT3n2heuzyr",
          amount: "7000000000000000",
          numberOfContributions: 2,
        },
        {
          account: "J6bvL3mhx7uXjaYK5ZTrBtJtZ2gibMQYkE6NkCYEr92M2ZW",
          amount: "5000100000000000",
          numberOfContributions: 2,
        },
        {
          account: "EkTrycMCVrc63gVxH2aRUYGJN9ybqzjfJaHbHBRtKyUmPCk",
          amount: "3000000000000000",
          numberOfContributions: 1,
        },
      ]);
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
