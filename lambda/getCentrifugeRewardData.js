require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
import axios from "axios";
import postgres from "postgres";
import { Keyring } from "@polkadot/api";
import { u8aToHex } from "@polkadot/util";
import { BigNumber } from "bignumber.js";
import { getConfig } from "./crowdloan/config";

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

const getContributions = async (config, address) => {
  const keyring = new Keyring({ type: "sr25519" });
  const hexPublicKey = u8aToHex(keyring.addFromAddress(address).publicKey);

  try {

    const { data } = await axios({
      url: config.URL_CROWDLOAN_SERVICE,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: {
        query: `
          query QueryContributor {
            contributors(where: {id_eq: "${hexPublicKey}"}) {
              totalContributed
              contributions {
                accountId
                balance
                earlyBird
                prevContributed
                referralCode
                blockNumber
              }
            }
          }
      `
      }
    })

    if (data.data.contributors.length === 0) {
      console.log("error contributor not found:", hexPublicKey)
      return [];
    }

    return data.data.contributors[0];
  } catch (error) {
    if (error.response.status === 404) {
      return [];
    }

    console.log("error", error.message);
  }
};

const getAllContributions = async (config) => {
  const { data } = await axios({
    url: config.URL_CROWDLOAN_SERVICE,
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {
      query: `
          query AllContributions {
             contributions(limit: 1000000) {
              earlyBird
              balance
              accountId
              prevContributed
              referralCode
              blockNumber
            }
          }
      `
    }
  })

  return data.data.contributions;
};

const getEarlyBirdBonus = (contributions) =>
  contributions
    .reduce((sum, contribution) => {
      if (contribution.earlyBird) {
        return sum.plus(
          new BigNumber(contribution.balance)
            .multipliedBy(10 ** 6)
            .multipliedBy(0.1)
            .multipliedBy(430)
        );
      }

      return sum;
    }, new BigNumber(0))
    .toString();

const getFirstCrowdloanBonus = (contributions) =>
  contributions
    .reduce((sum, contribution) => {
      if (contribution.prevContributed) {
        return sum.plus(
          new BigNumber(contribution.balance)
            .multipliedBy(10 ** 6)
            .multipliedBy(0.1)
            .multipliedBy(430)
        );
      }

      return sum;
    }, new BigNumber(0))
    .toString();

const getOutgoingReferralBonus = async (config, contributions) => {
  const usedReferralCodes = contributions
    .filter((contribution) => contribution.referralCode)
    .map((contribution) => contribution.referralCode);

  const validReferralCodes = await getValidReferralCodes(
    config,
    usedReferralCodes
  );

  return contributions.reduce((sum, contribution) => {
    if (validReferralCodes.includes(contribution.referralCode)) {
      return sum.plus(
        new BigNumber(contribution.balance)
          .multipliedBy(10 ** 6)
          .multipliedBy(0.05)
          .multipliedBy(430)
      );
    }

    return sum;
  }, new BigNumber(0));
};

const getIncomingReferralBonus = (allContributions, referralCodes) =>
  allContributions.reduce((sum, contribution) => {
    if (referralCodes.includes(contribution.referralCode)) {
      return sum.plus(
        new BigNumber(contribution.balance)
          .multipliedBy(10 ** 6)
          .multipliedBy(0.05)
          .multipliedBy(430)
      );
    }

    return sum;
  }, new BigNumber(0));

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
    return {
      statusCode: 200,
      body: JSON.stringify({
        address,
        contributionAmount: "0",
        earlyBirdBonus: "0",
        firstCrowdloanBonus: "0",
        numberOfReferrals: 0,
        referralBonus: "0",
      }),
    };
  }

  curConfig.sql = postgres(curConfig.POSTGRES_CONFIG);

  const referralCodes = await getReferralCodes(curConfig, address);

  const contributor = await getContributions(curConfig, address);

  const allContributions = await getAllContributions(curConfig);

  const numberOfReferrals = allContributions.filter(({ referralCode }) =>
    referralCodes.includes(referralCode)
  ).length;

  const earlyBirdBonus = getEarlyBirdBonus(contributor.contributions);

  // TODO Review this first Crowdloan bonus logic
  const firstCrowdloanBonus = getFirstCrowdloanBonus(contributor.contributions);

  const contributionAmount = contributor.totalContributed;

  // this user used someone else's referral code
  const outgoingReferralBonus = await getOutgoingReferralBonus(
    curConfig,
    contributor.contributions
  );

  // someone used a referral code owned by this user
  const incomingReferralBonus = getIncomingReferralBonus(
    allContributions,
    referralCodes
  );

  const referralBonus = incomingReferralBonus
    .plus(outgoingReferralBonus)
    .toString();

  return {
    statusCode: 200,
    body: JSON.stringify({
      address,
      contributionAmount,
      earlyBirdBonus,
      firstCrowdloanBonus,
      numberOfReferrals,
      referralBonus,
    }),
  };
};
