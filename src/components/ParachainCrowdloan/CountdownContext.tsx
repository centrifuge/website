import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { REWARD_EARLY_BIRD_HOURS } from "./shared/const";

const INTERVAL_UPDATE_COUNTERS_MS = 1000; // update counters every second

const EARLY_BIRD_PERIOD_HOURS = REWARD_EARLY_BIRD_HOURS;
const AUCTION_DURATION_DAYS = 7;

const AUCTION_START_DATE = new Date("2021-12-15"); // real auction start

// // DEBUG: Auction starts in 5 seconds
// const AUCTION_START_DATE = new Date(Date.now() + 5000);

// // DEBUG: Auction started | MID Early Bird phase
// const AUCTION_START_DATE = new Date(
//   Date.now() - (EARLY_BIRD_PERIOD_HOURS * 60 * 60 * 1000) / 2
// );

// // DEBUG: Auction started | Early Bird phase EXPIRED
// const AUCTION_START_DATE = new Date(
//   Date.now() - EARLY_BIRD_PERIOD_HOURS * 60 * 60 * 1000
// );

// // DEBUG: Auction ended
// const AUCTION_START_DATE = new Date(
//   Date.now() - AUCTION_DURATION_DAYS * 29 * 60 * 60 * 10000
// );

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

console.log("AUCTION_START_DATE", AUCTION_START_DATE);
console.log("AUCTION_END_DATE", AUCTION_END_DATE, getIsAuctionEnded());

type CountdownContextType = {
  auctionStartDate: Date;
  daysUntilAuction: number;
  isAuctionStarted: boolean;
  isAuctionEnded: boolean;
  isEarlyBird: boolean;
  earlyBirdHoursLeft: number;
};

export const CountdownContext = createContext<CountdownContextType>({
  auctionStartDate: AUCTION_START_DATE,
  daysUntilAuction: 1,
  isAuctionStarted: false,
  isAuctionEnded: false,
  isEarlyBird: false,
  earlyBirdHoursLeft: 0,
});

export const CountdownContextProvider: React.FC = ({ children }) => {
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDaysUntilAuction(getDaysUntilAuction());
      setEarlyBirdHoursLeft(getEarlyBirdHoursLeft());
      setIsAuctionStarted(getIsAuctionStarted());
      setIsAuctionEnded(getIsAuctionEnded());
      setIsEarlyBird(getIsEarlyBird());
    }, INTERVAL_UPDATE_COUNTERS_MS);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const ctx: CountdownContextType = useMemo<CountdownContextType>(
    () => ({
      auctionStartDate: AUCTION_START_DATE,
      daysUntilAuction,
      isAuctionStarted,
      isAuctionEnded,
      isEarlyBird,
      earlyBirdHoursLeft,
    }),
    [
      AUCTION_START_DATE,
      daysUntilAuction,
      isAuctionStarted,
      isAuctionEnded,
      isEarlyBird,
      earlyBirdHoursLeft,
    ]
  );

  return (
    <CountdownContext.Provider value={ctx}>
      {children}
    </CountdownContext.Provider>
  );
};

export const useCountdownContext = () => useContext(CountdownContext);
