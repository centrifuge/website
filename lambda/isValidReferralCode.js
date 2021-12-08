require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
import postgres from "postgres";
import { getConfig } from "./crowdloan/config";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method not allowed. Use POST.",
    };
  }

  const { referralCode, parachain } = JSON.parse(event.body);

  // Allow only alphanumeric characters
  if (!referralCode.match(/[a-zA-Z0-9]+/)) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        referralCode,
        valid: false,
      }),
    };
  }

  const { POSTGRES_CONFIG, REFERRAL_TABLE_NAME } = getConfig(parachain);
  const sql = postgres(POSTGRES_CONFIG);

  const referrals = await sql`
    select referral_code from ${sql(
      REFERRAL_TABLE_NAME
    )} where referral_code = ${referralCode}
  `;

  return {
    statusCode: 200,
    body: JSON.stringify({
      referralCode,
      valid: !!referrals.length,
    }),
  };
};
