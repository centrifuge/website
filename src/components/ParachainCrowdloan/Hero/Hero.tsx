import React from "react";

import { AuctionStatus } from "./AuctionStatus";
import { AuctionEnded } from "./AuctionEnded";
import { RESULTS_TITLE } from "../shared/config";

export const Hero: React.FC = () => {
  return RESULTS_TITLE ? <AuctionEnded /> : <AuctionStatus />;
};
