import { getDebugSearchParam } from "./browserOnly";

export const AUCTION_START = new Date("12/15/2021");

// reward config

const DEFAULT = {
  CCL_START_DATE: "2021-12-15T16:00:00Z",
  CCL_CROWDLOAN_STARTED: true,

  CCL_HIDE_LEADERBOARDS: true,

  CCL_CLAIM_ACTIVE: true,

  CCL_CROWDLOAN_MAX_CAP: 15000000, // 15m
  CCL_REWARDS_BUDGET: 65700000,

  CCL_REWARD_HEAVYWEIGHT_FROM: 5000,
  CCL_REWARD_HEAVYWEIGHT_PERCENT: 5,
  CCL_REWARD_EARLY_BIRD_PERCENT: 10,
  CCL_REWARD_EARLY_BIRD_HOURS: 72,
  CCL_REWARD_EARLY_BIRD_HOURS_EXT: 72,
  CCL_REWARD_REFERRAL_PERCENT: 5,
  CCL_REWARD_LOYALTY_PERCENT: 5,

  CCL_PARACHAIN_ID: 2031, // centrifuge parachain ID
  CCL_VIDEO_ID: "-wXooFsoafM",

  CCL_FAQ_URL:
    "https://medium.com/centrifuge/faq-centrifuge-crowdloan-5c744778e03c",

  CCL_RESULTS_TITLE: "Boom! Centrifuge wins slot in Parachain auctions",
  CCL_RESULTS_SUBTITLE:
    "{totalRaised} DOT raised from {totalContributions} contributions",
};

export const START_DATE =
  getDebugSearchParam("CCL_START_DATE") ||
  process.env.CCL_START_DATE ||
  DEFAULT.CCL_START_DATE;

export const CROWDLOAN_STARTED =
  getDebugSearchParam("CCL_CROWDLOAN_STARTED") === "true" ||
  process.env.CCL_CROWDLOAN_STARTED === "true" ||
  DEFAULT.CCL_CROWDLOAN_STARTED;

export const CLAIM_ACTIVE =
  getDebugSearchParam("CCL_CLAIM_ACTIVE") === "true" ||
  process.env.CCL_CLAIM_ACTIVE === "true" ||
  DEFAULT.CCL_CLAIM_ACTIVE;

export const CROWDLOAN_MAX_CAP =
  parseFloat(getDebugSearchParam("CCL_CROWDLOAN_MAX_CAP") || "0") ||
  parseFloat(process.env.CCL_CROWDLOAN_MAX_CAP || "0") ||
  DEFAULT.CCL_CROWDLOAN_MAX_CAP;

export const REWARDS_BUDGET =
  parseFloat(getDebugSearchParam("CCL_REWARDS_BUDGET") || "0") ||
  parseFloat(process.env.CCL_REWARDS_BUDGET || "0") ||
  DEFAULT.CCL_REWARDS_BUDGET;

export const MIN_BASE_REWARD = REWARDS_BUDGET / CROWDLOAN_MAX_CAP;

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
