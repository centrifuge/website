import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getDebugSearchParam } from "../browserOnly";

import {
  AUCTION_RESULTS,
  AUCTION_START,
  REWARD_EARLY_BIRD_HOURS,
} from "../const";

const INTERVAL_UPDATE_COUNTERS_MS = 1000; // update counters every second

const EARLY_BIRD_PERIOD_HOURS = REWARD_EARLY_BIRD_HOURS;
const AUCTION_DURATION_DAYS = 7;

const DEBUG_PHASE = getDebugSearchParam("debugPhase") || "";

const AUCTION_START_DATE =
  {
    in5Seconds: new Date(Date.now() + 5000),
    earlyBird: new Date(
      Date.now() - (EARLY_BIRD_PERIOD_HOURS * 60 * 60 * 1000) / 2
    ),
    afterEarlyBird: new Date(
      Date.now() - EARLY_BIRD_PERIOD_HOURS * 60 * 60 * 1000
    ),
    end: new Date(Date.now() - AUCTION_DURATION_DAYS * 29 * 60 * 60 * 10000),
  }[DEBUG_PHASE] || AUCTION_START;

const EARLY_BIRD_END_DATE = new Date(
  AUCTION_START_DATE.getTime() + EARLY_BIRD_PERIOD_HOURS * 60 * 60 * 1000
);

const AUCTION_END_DATE = new Date(
  AUCTION_START_DATE.getTime() + AUCTION_DURATION_DAYS * 24 * 60 * 60 * 1000
);

const getDaysUntilAuction = () =>
  Math.ceil((AUCTION_START_DATE.getTime() - Date.now()) / 1000 / 60 / 60 / 24);

const getIsAuctionStarted = () => getDaysUntilAuction() <= 0;
const getIsAuctionEnded = () =>
  getIsAuctionStarted() && Date.now() > AUCTION_END_DATE.getTime();

const getEarlyBirdHoursLeft = () =>
  Math.ceil((EARLY_BIRD_END_DATE.getTime() - Date.now()) / 1000 / 60 / 60);

const getIsEarlyBird = () =>
  getIsAuctionStarted() && Date.now() < EARLY_BIRD_END_DATE.getTime();

type AuctionContextType = {
  auctionStartDate: Date;
  daysUntilAuction: number;
  isAuctionStarted: boolean;
  isAuctionEnded: boolean;
  isEarlyBird: boolean;
  earlyBirdHoursLeft: number;
  auctionResults: typeof AUCTION_RESULTS;
};

const AuctionContext = createContext<AuctionContextType>({
  auctionStartDate: AUCTION_START_DATE,
  daysUntilAuction: 1,
  isAuctionStarted: false,
  isAuctionEnded: false,
  isEarlyBird: false,
  earlyBirdHoursLeft: 0,
  auctionResults: AUCTION_RESULTS,
});

export const AuctionContextProvider: React.FC = ({ children }) => {
  const [daysUntilAuction, setDaysUntilAuction] = useState<number>(
    getDaysUntilAuction()
  );
  const [earlyBirdHoursLeft, setEarlyBirdHoursLeft] = useState<number>(
    getEarlyBirdHoursLeft()
  );
  const [isAuctionStarted, setIsAuctionStarted] = useState<boolean>(
    getIsAuctionStarted()
  );
  const [isAuctionEnded, setIsAuctionEnded] = useState<boolean>(
    getIsAuctionEnded()
  );
  const [isEarlyBird, setIsEarlyBird] = useState<boolean>(getIsEarlyBird());
  const [auctionResults, setAuctionResults] = useState(AUCTION_RESULTS);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDaysUntilAuction(getDaysUntilAuction());
      setEarlyBirdHoursLeft(getEarlyBirdHoursLeft());
      setIsAuctionStarted(getIsAuctionStarted());
      setIsAuctionEnded(getIsAuctionEnded());
      setIsEarlyBird(getIsEarlyBird());
    }, INTERVAL_UPDATE_COUNTERS_MS);

    setAuctionResults(
      DEBUG_PHASE === "end"
        ? { place: "6th", contributions: "18,342", dotRaised: "187.84k" }
        : AUCTION_RESULTS
    );

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const ctx: AuctionContextType = useMemo<AuctionContextType>(
    () => ({
      auctionStartDate: AUCTION_START_DATE,
      daysUntilAuction,
      isAuctionStarted,
      isAuctionEnded,
      isEarlyBird,
      earlyBirdHoursLeft,
      auctionResults,
    }),
    [
      AUCTION_START_DATE,
      daysUntilAuction,
      isAuctionStarted,
      isAuctionEnded,
      isEarlyBird,
      earlyBirdHoursLeft,
      auctionResults,
    ]
  );

  return (
    <AuctionContext.Provider value={ctx}>{children}</AuctionContext.Provider>
  );
};

export const useAuctionContext = () => useContext(AuctionContext);
