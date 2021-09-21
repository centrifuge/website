require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
import axios from 'axios';
import postgres from 'postgres';
import { Keyring } from '@polkadot/api';
import { u8aToHex } from '@polkadot/util';
import { BigNumber } from 'bignumber.js';

const sql = postgres({
  database: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_DATABASE,
  host: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_HOST,
  password: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_PASSWORD,
  port: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_PORT,
  username: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_USER,
});

const getReferralCodes = async address => {
  const results = await sql`
    select referral_code from altair where wallet_address = ${address}
  `;

  return results.map(result => result.referral_code);
};

const getValidReferralCodes = async referralCodes => {
  const results = await sql`
      select referral_code, wallet_address from altair where referral_code = any('{${sql(
        referralCodes,
      )}}'::varchar[])
    `;

  return results.map(result => result.referral_code);
};

const getContributions = async address => {
  const keyring = new Keyring({ type: 'sr25519' });
  const hexPublicKey = u8aToHex(keyring.addFromAddress(address).publicKey);

  try {
    const { data } = await axios(
      `https://crowdloan-ws.centrifuge.io/contributor?id=${hexPublicKey}`,
    );

    return data;
  } catch (error) {
    if (error.response.status === 404) {
      return [];
    }

    console.log('error', error.message);
  }
};

const getAllContributions = async () => {
  const { data } = await axios(
    'https://crowdloan-ws.centrifuge.io/contributions',
  );

  return data;
};

const getEarlyBirdBonus = contributions => {
  return contributions
    .reduce((sum, contribution) => {
      if (contribution.earlyBird) {
        return sum.plus(
          new BigNumber(contribution.contribution)
            .multipliedBy(0.1)
            .multipliedBy(400),
        );
      }

      return sum;
    }, new BigNumber(0))
    .toString();
};

const getFirstCrowdloanBonus = contributions => {
  return contributions
    .reduce((sum, contribution) => {
      if (contribution.wasEarlyInPrevCrwdLoan) {
        return sum.plus(
          new BigNumber(contribution.contribution)
            .multipliedBy(0.1)
            .multipliedBy(400),
        );
      }

      return sum;
    }, new BigNumber(0))
    .toString();
};

const getContributionAmount = contributions => {
  return contributions
    .reduce(
      (sum, contribution) => sum.plus(new BigNumber(contribution.contribution)),
      new BigNumber(0),
    )
    .toString();
};

const getOutgoingReferralBonus = async contributions => {
  const usedReferralCodes = contributions
    .filter(contribution => contribution.referralCode)
    .map(contribution => contribution.referralCode);

  const validReferralCodes = await getValidReferralCodes(usedReferralCodes);

  return contributions.reduce((sum, contribution) => {
    if (validReferralCodes.includes(contribution.referralCode)) {
      return sum.plus(
        new BigNumber(contribution.contribution)
          .multipliedBy(0.05)
          .multipliedBy(400),
      );
    }

    return sum;
  }, new BigNumber(0));
};

const getIncomingReferralBonus = (allContributions, referralCodes) =>
  allContributions.reduce((sum, contribution) => {
    if (referralCodes.includes(contribution.referralCode)) {
      return sum.plus(
        new BigNumber(contribution.contribution)
          .multipliedBy(0.05)
          .multipliedBy(400),
      );
    }

    return sum;
  }, new BigNumber(0));

exports.handler = async event => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method not allowed. Use POST.',
    };
  }

  const { address } = JSON.parse(event.body);

  const referralCodes = await getReferralCodes(address);

  const contributions = await getContributions(address);

  const allContributions = await getAllContributions();

  const numberOfReferrals = allContributions.filter(({ referralCode }) =>
    referralCodes.includes(referralCode),
  ).length;

  const earlyBirdBonus = getEarlyBirdBonus(contributions);

  const firstCrowdloanBonus = getFirstCrowdloanBonus(contributions);

  const contributionAmount = getContributionAmount(contributions);

  // this user used someone else's referral code
  const outgoingReferralBonus = await getOutgoingReferralBonus(contributions);

  // someone used a referral code owned by this user
  const incomingReferralBonus = getIncomingReferralBonus(
    allContributions,
    referralCodes,
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
