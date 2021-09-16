require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
import crypto from 'crypto';
import { Storage } from '@google-cloud/storage';
import postgres from 'postgres';

const sql = postgres({
  database: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_DATABASE,
  host: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_HOST,
  password: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_PASSWORD,
  port: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_PORT,
  username: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_USER,
});

// properly prepare to be PEM type
const GOOGLE_CLOUD_PRIVATE_KEY = process.env.GOOGLE_CLOUD_PRIVATE_KEY.replace(
  /\\n/gm,
  '\n',
);

exports.handler = async event => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method not allowed. Use POST.',
    };
  }

  try {
    const storage = new Storage({
      projectId: 'centrifuge-production-x',
      credentials: {
        client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
        private_key: GOOGLE_CLOUD_PRIVATE_KEY,
      },
    });

    const { referrerAddress } = JSON.parse(event.body);

    const referralCodeBucket = storage.bucket('altair_referral_codes');

    const referralCode = crypto
      .randomBytes(15)
      .toString('base64')
      .replace(/\//g, 'S')
      .replace(/\+/g, 'P');

    await sql`
      insert into altair(referral_code, wallet_address) values (${referralCode}, ${referrerAddress})
    `;

    const file = referralCodeBucket.file(`${referralCode}.txt`);

    await file.save(referrerAddress);

    return {
      statusCode: 200,
      body: JSON.stringify({ referralCode }),
    };
  } catch (error) {
    console.log('error', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error?.message,
      }),
    };
  }
};
