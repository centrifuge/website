require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
import crypto from "crypto";
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

    // check if the address has a referral code associated with it already
    const results = await sql`
      select referral_code from ${sql(
        REFERRAL_TABLE_NAME
      )} where wallet_address = ${referrerAddress}
    `;

    // if a code was found, use it instead of creating a new one
    if (results.length) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          referralCode: results[0].referral_code,
          referrerAddress,
        }),
      };
    }

    const referralCode = crypto
      .randomBytes(15)
      .toString("base64")
      .replace(/\//g, "S")
      .replace(/\+/g, "P");

    await sql`
      insert into ${sql(
        REFERRAL_TABLE_NAME
      )}(referral_code, wallet_address) values (${referralCode}, ${referrerAddress})
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ referralCode, referrerAddress }),
    };
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
