require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
import axios from "axios";
import postgres from "postgres";
import { getConfig } from "./crowdloan/config";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method not allowed. Use POST.",
    };
  }

  const { amount, parachain } = JSON.parse(event.body);

  const { POSTGRES_CONFIG, REFERRAL_TABLE_NAME, URL_CROWDLOAN_SERVICE } = getConfig(
    parachain
  );

  if (!URL_CROWDLOAN_SERVICE) {
    return {
      statusCode: 200,
      body: JSON.stringify([]),
    };
  }

  const sql = postgres(POSTGRES_CONFIG);

  const { data } = await axios({
    url: URL_CROWDLOAN_SERVICE,
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {
      query: `
          query RefMetrics {
            metrics {
              referralCodeCount {
                referral_code
                referral_count
              }
            }
          }
      `
    }
  })

  let referrerCount = {}
  data.data.metrics.referralCodeCount.forEach((item) => {
    referrerCount[item.referral_code] = {
      numberOfTimesUsed: item.referral_count
    }
  })

  const getValidReferralCodes = async () => {
    const results = await sql`
    select referral_code, wallet_address from ${sql(
      REFERRAL_TABLE_NAME
    )} where referral_code = any('{${sql(
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

  return {
    statusCode: 200,
    body: JSON.stringify(orderedReferrers.slice(0, amount)),
  };
};
