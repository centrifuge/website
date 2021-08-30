require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

import crypto from 'crypto';
import { Storage } from '@google-cloud/storage';

const { GOOGLE_CLOUD_CLIENT_EMAIL } = process.env;

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
        client_email: GOOGLE_CLOUD_CLIENT_EMAIL,
        private_key: GOOGLE_CLOUD_PRIVATE_KEY,
      },
    });

    const { refererAddress } = JSON.parse(event.body);

    const referralCodeBucket = storage.bucket('altair_referral_codes');

    const referralCode = crypto
      .randomBytes(15)
      .toString('base64')
      .replace(/\//g, 'S')
      .replace(/\+/g, 'P');

    const file = referralCodeBucket.file(`${referralCode}.txt`);

    await file.save(refererAddress);

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
