import React from "react";

import { useCountdownContext } from "../shared/context/CountdownContext";
import { AuctionStatus } from "./AuctionStatus";
import { AuctionEnded } from "./AuctionEnded";

export const Hero: React.FC = () => {
  const { isAuctionEnded } = useCountdownContext();

  return isAuctionEnded ? (
    <AuctionEnded
      slotPosition="6th"
      totContributions={18342}
      totAmount="187840000000000000"
    />
  ) : (
    <AuctionStatus />
  );
};
