import React from "react";

import { useAuctionContext } from "../shared/context/AuctionContext";
import { AuctionStatus } from "./AuctionStatus";
import { AuctionEnded } from "./AuctionEnded";

export const Hero: React.FC = () => {
  const { auctionResults } = useAuctionContext();

  return auctionResults.place &&
    auctionResults.contributions &&
    auctionResults.dotRaised ? (
    <AuctionEnded
      slotPosition={auctionResults.place}
      totContributions={auctionResults.contributions}
      totAmount={auctionResults.dotRaised}
    />
  ) : (
    <AuctionStatus />
  );
};
