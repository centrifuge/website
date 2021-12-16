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

  try {
    const { referrerAddress, parachain } = JSON.parse(event.body);

    const { REFERRAL_TABLE_NAME, POSTGRES_CONFIG } = getConfig(parachain);

    const sql = postgres(POSTGRES_CONFIG);

    const results = await sql`
      select referral_code from ${sql(
        REFERRAL_TABLE_NAME
      )} where wallet_address = ${referrerAddress}
    `;

    if (results.length) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          referralCode: results[0].referral_code,
          referrerAddress,
        }),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({
          error: `referral code not found for address '${referrerAddress}'`,
        }),
      };
    }
  } catch (error) {
    console.log("error", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error?.message,
      }),
    };
  }
};
