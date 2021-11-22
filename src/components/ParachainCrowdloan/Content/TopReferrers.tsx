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
      // const response = await fetch("/.netlify/functions/getTopReferrers", {
      //   method: "POST",
      //   body: JSON.stringify({ amount: 5 }),
      // });

      // const json = await response.json();

      // setTopReferrers(json); // mocked
      setTopReferrers([
        {
          numberOfTimesUsed: 641,
          account: "Fc2rXRokFoJbpQ9VAwGDgoQKDrYPvZBFi16rPyKoqDUvyGu",
        },
        {
          numberOfTimesUsed: 570,
          account: "CxZXGR8qgWA56mKKsyeEcFsFDh9zYztzNiGF2RvQSY9e32v",
        },
        {
          numberOfTimesUsed: 367,
          account: "EoqDfBE7CwrSCFbvQvjUi6MQZ95ZQSjYRxYt5grmfYC8UtF",
        },
        {
          numberOfTimesUsed: 354,
          account: "DVSTJwhkUzPLFxLoBbw2FJkXkTYQMW92sue9z6BLqc8XAgu",
        },
        {
          numberOfTimesUsed: 153,
          account: "G4SrBW47D8Shk5BLCQhS8itzaHQdZqQmc6QHYaToyQrekac",
        },
      ]);
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
