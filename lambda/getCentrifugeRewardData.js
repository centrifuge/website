require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
import axios from "axios";
import postgres from "postgres";
import { Keyring } from "@polkadot/api";
import { u8aToHex } from "@polkadot/util";
import { BigNumber } from "bignumber.js";
import { getConfig } from "./crowdloan/config";
import { fetchTotalContributions } from "./getCentrifugeTotalContributions";
import { merkleTree } from '../config/centrifuge-reward-merkle-tree'

const getReferralCodes = async (config, address) => {
  const { sql, REFERRAL_TABLE_NAME } = config;
  const results = await sql`
    select referral_code from ${sql(
      REFERRAL_TABLE_NAME
    )} where wallet_address = ${address}
  `;

  return results.map((result) => result.referral_code);
};

const getValidReferralCodes = async (config, referralCodes) => {
  const { sql, REFERRAL_TABLE_NAME } = config;
  const results = await sql`
      select referral_code, wallet_address from ${sql(
        REFERRAL_TABLE_NAME
      )} where referral_code = any('{${sql(referralCodes)}}'::varchar[])
    `;

  return results.map((result) => result.referral_code);
};

const getPublicKey = address => {
  const keyring = new Keyring({ type: 'sr25519' });
  return u8aToHex(keyring.addFromAddress(address).publicKey);
};

const getContributions = async (config, publicKey) => {
  try {
    const { data } = await axios({
      url: config.URL_CROWDLOAN_SERVICE,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: {
        query: `
          query QueryContributor {
            contributors(where: {id_eq: "${publicKey}"}) {
              totalContributed
              contributions {
                balance
                earlyBird
                prevContributed
                referralCode
                blockNumber
              }
            }
          }
      `,
      },
    });

    if (data.data.contributors.length === 0) {
      console.log('error contributor not found:', publicKey);
      return [];
    }

    return data.data.contributors[0];
  } catch (error) {
    if (error.response.status === 404) {
      return [];
    }

    console.log('error', error.message);
  }
};

const getAllContributions = async (config) => {
  const { data } = await axios({
    url: config.URL_CROWDLOAN_SERVICE,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: {
      query: `
          query AllContributions {
             contributions(limit: 1000000) {
              earlyBird
              balance
              prevContributed
              referralCode
              blockNumber
            }
          }
      `,
    },
  });

  return data.data.contributions;
};

// returns the amount of DOT (BigNumber)
const getEarlyBirdTotalContrib = (contributions) =>
  contributions
    .filter((contrib) => contrib.earlyBird)
    .reduce((sum, contrib) => {
      return sum.plus(new BigNumber(contrib.balance));
    }, new BigNumber(0))
    .div(1e10);

const getOutgoingReferredContributionsDOT = async (config, contributions) => {
  const usedReferralCodes = contributions
    .filter((contrib) => !!contrib.referralCode)
    .map((contrib) => contrib.referralCode);

  const validReferralCodes = await getValidReferralCodes(
    config,
    usedReferralCodes
  );

  const referredContributions = contributions.filter((contrib) =>
    validReferralCodes.includes(contrib.referralCode)
  );

  return referredContributions
    .reduce(
      (sum, contribution) => sum.plus(contribution.balance),
      new BigNumber(0)
    )
    .div(1e10);
};

const getIncomingReferredContributionsDOT = (allContributions, referralCodes) =>
  allContributions
    .filter((contrib) => referralCodes.includes(contrib.referralCode))
    .reduce((sum, contrib) => {
      return sum.plus(contrib.balance);
    }, new BigNumber(0))
    .div(1e10);

const DEFAULT_RESPONSE = {
  statusCode: 200,
  body: JSON.stringify({
    contributionAmount: "0",
    hasLoyaltyReward: false,
    baseRewardRate: { min: "0", cur: "0" },
    baseReward: { min: "0", cur: "0" },
    referralReward: { min: "0", cur: "0" },
    earlyBirdReward: { min: "0", cur: "0" },
  }),
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method not allowed. Use POST.",
    };
  }

  const { address, parachain } = JSON.parse(event.body);

  const curConfig = getConfig(parachain);

  if (!curConfig.URL_CROWDLOAN_SERVICE) {
    return DEFAULT_RESPONSE;
  }

  const publicKey = getPublicKey(address);

  curConfig.sql = postgres(curConfig.POSTGRES_CONFIG);

  const contributor = await getContributions(curConfig, publicKey);

  // not found in subsquid
  if (!contributor || !contributor.totalContributed) {
    const additionalContributor = merkleTree.data.find(
      ({ account }) => account === publicKey,
    );

    // found in merkle tree
    if (additionalContributor) {
      const { contribution } = additionalContributor;

      return {
        statusCode: 200,
        body: JSON.stringify({
          rewardAmount: new BigNumber(contribution).div(10 ** 18).toString(),
        }),
      };
    }

    return DEFAULT_RESPONSE;
  }

  const referralCodes = await getReferralCodes(curConfig, address);

  const contributions = contributor.contributions || [];

  const allContributions = await getAllContributions(curConfig);

  const totals = await fetchTotalContributions(parachain);

  // total amount contributed in DOT
  const totalAmountContributedBn = new BigNumber(
    totals.totalAmountContributed
  ).div(1e10);

  // Base rewards rate = rewards budget in CFG / total amount contributed in DOT
  const baseRewardRate = {
    min: new BigNumber(curConfig.REWARDS_BUDGET).div(
      curConfig.CROWDLOAN_MAX_CAP
    ),
    cur: new BigNumber(curConfig.REWARDS_BUDGET).div(totalAmountContributedBn),
  };

  // Base reward = contributed amount * base reward rate
  const contributedDOT = new BigNumber(contributor.totalContributed).div(1e10);
  const baseReward = {
    min: contributedDOT.times(baseRewardRate.min),
    cur: contributedDOT.times(baseRewardRate.cur),
  };

  // Does the contributor have Loyalty reward?
  const hasLoyaltyReward = contributions.length
    ? !!contributor.contributions[0].prevContributed
    : false;

  // Early bird rewards
  const contributedDOTWithEarlyBird = getEarlyBirdTotalContrib(contributions);

  const earlyBirdReward = {
    min: contributedDOTWithEarlyBird
      .times(baseRewardRate.min)
      .times(curConfig.REWARD_EARLY_BIRD_PERCENT / 100),
    cur: contributedDOTWithEarlyBird
      .times(baseRewardRate.cur)
      .times(curConfig.REWARD_EARLY_BIRD_PERCENT / 100),
  };

  // Referral rewards
  const outgoingReferredDOT = await getOutgoingReferredContributionsDOT(
    curConfig,
    contributions
  );
  const incomingReferredDOT = await getIncomingReferredContributionsDOT(
    allContributions,
    await getValidReferralCodes(curConfig, referralCodes)
  );
  const totalReferredDOT = outgoingReferredDOT.plus(incomingReferredDOT);

  const referralReward = {
    min: totalReferredDOT
      .times(baseRewardRate.min)
      .times(curConfig.REWARD_REFERRAL_PERCENT / 100),
    cur: totalReferredDOT
      .times(baseRewardRate.cur)
      .times(curConfig.REWARD_REFERRAL_PERCENT / 100),
  };

  const rewardToString = (reward) => ({
    min: reward.min.toString(),
    cur: reward.cur.toString(),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      address,

      contributionAmount: contributedDOT.toString(),
      contributionDetail: {
        earlyBird: contributedDOTWithEarlyBird.toString(),
        referralOutgoing: outgoingReferredDOT.toString(),
        referralIncoming: incomingReferredDOT.toString(),
        referralTotal: totalReferredDOT.toString(),
      },

      hasLoyaltyReward, // will be applied to the total base reward
      baseRewardRate: rewardToString(baseRewardRate),
      baseReward: rewardToString(baseReward),
      referralReward: rewardToString(referralReward),
      earlyBirdReward: rewardToString(earlyBirdReward),
    }),
  };
};
