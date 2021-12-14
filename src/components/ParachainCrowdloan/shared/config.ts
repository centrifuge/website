import { getDebugSearchParam } from "./browserOnly";

export const AUCTION_START = new Date("12/15/2021");

// reward config

const DEFAULT = {
  CCL_START_DATE: "2021-12-15T00:00Z",
  CCL_CROWDLOAN_STARTED: false,

  CCL_CROWDLOAN_MAX_CAP: 1e7, // 10m

  CCL_REWARD_CFG_PER_DOT: 3.65,
  CCL_REWARD_HEAVYWEIGHT_FROM: 10000,
  CCL_REWARD_HEAVYWEIGHT_PERCENT: 5,
  CCL_REWARD_EARLY_BIRD_PERCENT: 10,
  CCL_REWARD_EARLY_BIRD_HOURS: 72,
  CCL_REWARD_EARLY_BIRD_HOURS_EXT: 0,
  CCL_REWARD_REFERRAL_PERCENT: 5,
  CCL_REWARD_LOYALTY_PERCENT: 5,

  CCL_PARACHAIN_ID: 2031, // centrifuge parachain ID

  // NOTE: the following values are placeholders.
  // As soon as they are available (e.g. after we register), replace them with the correct ones

  // these are the FAQ for Altair
  CCL_FAQ_URL:
    "https://medium.com/altair-network/faq-altair-crowdloan-85b9d9abd235",

  // insert the youtube video ID
  CCL_VIDEO_ID: "",

  CCL_RESULTS_TITLE: "",
  CCL_RESULTS_SUBTITLE: "",
};

export const START_DATE =
  getDebugSearchParam("CCL_START_DATE") ||
  process.env.CCL_START_DATE ||
  DEFAULT.CCL_START_DATE;

export const CROWDLOAN_STARTED =
  getDebugSearchParam("CCL_CROWDLOAN_STARTED") === "true" ||
  process.env.CCL_START_DATE === "true" ||
  DEFAULT.CCL_CROWDLOAN_STARTED;

export const CROWDLOAN_MAX_CAP =
  parseFloat(getDebugSearchParam("CCL_CROWDLOAN_MAX_CAP") || "0") ||
  parseFloat(process.env.CCL_CROWDLOAN_MAX_CAP || "0") ||
  DEFAULT.CCL_CROWDLOAN_MAX_CAP;

export const REWARD_CFG_PER_DOT =
  parseFloat(getDebugSearchParam("CCL_REWARD_CFG_PER_DOT") || "0") ||
  parseFloat(process.env.CCL_REWARD_CFG_PER_DOT || "0") ||
  DEFAULT.CCL_REWARD_CFG_PER_DOT;

export const REWARD_HEAVYWEIGHT_FROM =
  parseFloat(getDebugSearchParam("CCL_REWARD_HEAVYWEIGHT_FROM") || "0") ||
  parseFloat(process.env.CCL_REWARD_HEAVYWEIGHT_FROM || "0") ||
  DEFAULT.CCL_REWARD_HEAVYWEIGHT_FROM; // number of DOT

export const REWARD_HEAVYWEIGHT_PERCENT =
  parseFloat(getDebugSearchParam("CCL_REWARD_HEAVYWEIGHT_PERCENT") || "0") ||
  parseFloat(process.env.CCL_REWARD_HEAVYWEIGHT_PERCENT || "0") ||
  DEFAULT.CCL_REWARD_HEAVYWEIGHT_PERCENT;

export const REWARD_EARLY_BIRD_PERCENT =
  parseFloat(getDebugSearchParam("CCL_REWARD_EARLY_BIRD_PERCENT") || "0") ||
  parseFloat(process.env.CCL_REWARD_EARLY_BIRD_PERCENT || "0") ||
  DEFAULT.CCL_REWARD_EARLY_BIRD_PERCENT;

export const REWARD_EARLY_BIRD_HOURS =
  parseFloat(getDebugSearchParam("CCL_REWARD_EARLY_BIRD_HOURS") || "0") ||
  parseFloat(process.env.CCL_REWARD_EARLY_BIRD_HOURS || "0") ||
  DEFAULT.CCL_REWARD_EARLY_BIRD_HOURS;

export const REWARD_EARLY_BIRD_HOURS_EXT =
  parseFloat(getDebugSearchParam("CCL_REWARD_EARLY_BIRD_HOURS_EXT") || "0") ||
  parseFloat(process.env.CCL_REWARD_EARLY_BIRD_HOURS_EXT || "0") ||
  DEFAULT.CCL_REWARD_EARLY_BIRD_HOURS_EXT;

export const REWARD_REFERRAL_PERCENT =
  parseFloat(getDebugSearchParam("CCL_REWARD_REFERRAL_PERCENT") || "0") ||
  parseFloat(process.env.CCL_REWARD_REFERRAL_PERCENT || "0") ||
  DEFAULT.CCL_REWARD_REFERRAL_PERCENT; // 5 each, total 10%

export const REWARD_LOYALTY_PERCENT =
  parseFloat(getDebugSearchParam("CCL_REWARD_LOYALTY_PERCENT") || "0") ||
  parseFloat(process.env.CCL_REWARD_LOYALTY_PERCENT || "0") ||
  DEFAULT.CCL_REWARD_LOYALTY_PERCENT;

export const PARACHAIN_ID =
  parseInt(getDebugSearchParam("CCL_PARACHAIN_ID") || "0") ||
  parseInt(process.env.CCL_PARACHAIN_ID || "0") ||
  DEFAULT.CCL_PARACHAIN_ID;

export const VIDEO_ID =
  getDebugSearchParam("CCL_VIDEO_ID") ||
  process.env.CCL_VIDEO_ID ||
  DEFAULT.CCL_VIDEO_ID;

export const FAQ_URL =
  getDebugSearchParam("CCL_FAQ_URL") ||
  process.env.CCL_FAQ_URL ||
  DEFAULT.CCL_FAQ_URL;

export const RESULTS_TITLE =
  getDebugSearchParam("CCL_RESULTS_TITLE") ||
  process.env.CCL_RESULTS_TITLE ||
  DEFAULT.CCL_RESULTS_TITLE;

export const RESULTS_SUBTITLE =
  getDebugSearchParam("CCL_RESULTS_SUBTITLE") ||
  process.env.CCL_RESULTS_SUBTITLE ||
  DEFAULT.CCL_RESULTS_SUBTITLE;
