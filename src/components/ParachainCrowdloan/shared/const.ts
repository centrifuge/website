export const MAILCHIMP_URL =
  "https://centrifuge.us17.list-manage.com/subscribe/post?u=27084e1d9e6f92398b5c7ce91&id=ee9cca24fc";

export const PARACHAIN_NAME = "centrifuge";

export const WS_PROVIDER = "wss://rpc.polkadot.io";
export const TRANSACTION_DETAILS_URL = `https://polkadot.js.org/apps/?rpc=${encodeURIComponent(
  WS_PROVIDER
)}#/explorer/query`;

// @see https://wiki.polkadot.network/docs/learn-DOT
export const DOT_PLANCK = 1e10;

export const CFG_PLANCK = 1e18;

export const CROWDLOAN_MAX_CAP = 200000;

export const AUCTION_START = new Date("2021-12-15");

// the minimum contribution is 0.1 DOT
export const MIN_CONTRIBUTION_DOT = 0.1;
export const MIN_CONTRIBUTION_PLANCK = DOT_PLANCK * MIN_CONTRIBUTION_DOT;

// reward config
export const REWARD_HEAVIWEIGHT_FROM = 10; // number of DOT
export const REWARD_CFG_PER_DOT = 400;
export const REWARD_EARLY_BIRD_PERCENT = 10;
export const REWARD_REFERRAL_PERCENT = 5;
export const REWARD_LOYALTY_PERCENT = 10;

export const REWARD_EARLY_BIRD_HOURS = 72;

// NOTE: the following values are placeholders.
// As soon as they are available (e.g. after we register), replace them with the correct ones

// TODO: replace with the correct values for this crowdloan
export const PARACHAIN_ID = 2006; // TODO: THIS IS ALSTAR PARACHAIN ID, USED FOR TESTING PURPOSES. REPLACE IT WITH OUR PARACHAIN_ID AFTER REGISTERING

// TODO after auction: populate with results
export const AUCTION_RESULTS = {
  place: "", // e.g. '6th'
  dotRaised: "", // e.g. '100m'
  contributions: "", // e.g. '18,976'
};
