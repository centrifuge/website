require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
import axios from "axios";
import postgres from "postgres";

const sql = postgres({
  database: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_DATABASE,
  host: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_HOST,
  password: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_PASSWORD,
  port: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_PORT,
  username: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_USER,
});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method not allowed. Use POST.",
    };
  }

  const { amount } = JSON.parse(event.body);

  const { data: contributions } = await axios(
    "https://crowdloan-ws.centrifuge.io/contributions"
  );

  const referrerCount = contributions.reduce((acc, cur) => {
    if (acc[cur.referralCode]) {
      acc[cur.referralCode] = {
        numberOfTimesUsed: acc[cur.referralCode].numberOfTimesUsed + 1,
      };
    } else {
      if (cur.referralCode) {
        acc[cur.referralCode] = {
          numberOfTimesUsed: 1,
        };
      }
    }

    return acc;
  }, {});

  const getValidReferralCodes = async () => {
    const results = await sql`
    select referral_code, wallet_address from altair where referral_code = any('{${sql(
      Object.keys(referrerCount)
    )}}'::varchar[])
  `;

    return results.map((result) => result);
  };

  const validReferralCodes = await getValidReferralCodes();

  validReferralCodes.forEach((validReferralCode) => {
    referrerCount[validReferralCode.referral_code].account =
      validReferralCode.wallet_address;
  });

  const orderedReferrers = Object.values(referrerCount)
    .map((referrer) => referrer)
    .filter((referrer) => referrer.account);

  orderedReferrers.sort((a, b) => {
    if (a.numberOfTimesUsed > b.numberOfTimesUsed) {
      return -1;
    }
    if (a.numberOfTimesUsed < b.numberOfTimesUsed) {
      return 1;
    }
    return 0;
  });

  return {
    statusCode: 200,
    body: JSON.stringify(orderedReferrers.slice(0, amount)),
  };
};
