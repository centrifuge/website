import { decodeAddress, signatureVerify } from '@polkadot/util-crypto';
import { Datastore } from '@google-cloud/datastore';
import claimedEligibleAddresses from '../config/claimed-eligible-addresses.json';

// properly prepare to be PEM type
const GOOGLE_CLOUD_PRIVATE_KEY = process.env.GOOGLE_CLOUD_PRIVATE_KEY.replace(
  /\\n/gm,
  '\n',
);

const datastore = new Datastore({
  projectId: 'centrifuge-production-x',
  credentials: {
    client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
    private_key: GOOGLE_CLOUD_PRIVATE_KEY,
  },
});

exports.handler = async event => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method not allowed. Use POST.',
    };
  }

  const { currentAddress, newAddress, signature } = JSON.parse(event.body);

  const isEligible = claimedEligibleAddresses.includes(currentAddress);

  if (!isEligible) {
    return {
      body: '403 Forbidden',
      statusCode: 403,
    };
  }

  try {
    const verification = signatureVerify(
      newAddress,
      signature,
      decodeAddress(currentAddress),
    );

    if (!verification.isValid) {
      return {
        body: '401 Unauthorized',
        statusCode: 401,
      };
    }

    const query = datastore
      .createQuery('address-swaps')
      .filter('currentAddress', '=', currentAddress);

    const [result] = await datastore.runQuery(query);

    if (result.length) {
      const addressEntry = {
        key: result[0][datastore.KEY],
        data: {
          currentAddress,
          newAddress,
        },
      };

      await datastore.save(addressEntry);

      return {
        body: 'Success',
        statusCode: 200,
      };
    } else {
      const kind = 'address-swaps';

      const key = datastore.key([kind]);

      const addressEntry = {
        key,
        data: {
          currentAddress,
          newAddress,
        },
      };

      await datastore.save(addressEntry);

      return {
        body: 'Success',
        statusCode: 200,
      };
    }
  } catch (error) {
    return {
      body: `Error ${error?.message}`,
      statusCode: 500,
    };
  }
};
