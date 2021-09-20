require('dotenv').config({ path: '.env' });
import axios from 'axios';
import { Keyring } from '@polkadot/api';
const { BigNumber } = require('bignumber.js');

const exchangeAddresses = [
  'EkmdfH2Fc6XgPgDwMjye3Nsdj27CCSi9np8Kc7zYoCL2S3G',
  'F7fq1jMmNj5j2jAHcBxgM26JzUn2N4duXu1U4UZNdkfZEPV',
  'DAgtn9udZHC7GVU5gV7ybN8nTyucK9PEqY6QvXiG6fEW6TA',
];

const getAddress = publicKey => {
  const keyring = new Keyring({ type: 'sr25519' });
  return keyring.encodeAddress(publicKey, 2);
};

exports.handler = async event => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method not allowed. Use POST.',
    };
  }

  const { amount } = JSON.parse(event.body);

  const { data: contributions } = await axios(
    'https://crowdloan-ws.centrifuge.io/contributions',
  );

  const contributors = contributions.reduce((acc, cur) => {
    if (acc[cur.account]) {
      acc[cur.account] = {
        ...acc[cur.account],
        amount: new BigNumber(acc[cur.account].amount)
          .plus(cur.contribution)
          .toString(),
        numberOfContributions: acc[cur.account].numberOfContributions + 1,
      };
    } else {
      acc[cur.account] = {
        account: getAddress(cur.account),
        amount: cur.contribution,
        numberOfContributions: 1,
      };
    }

    return acc;
  }, {});

  const orderedContributors = Object.values(contributors)
    .map(contributor => contributor)
    .filter(contributor => !exchangeAddresses.includes(contributor.account));

  orderedContributors.sort((a, b) => {
    if (new BigNumber(a.amount).isGreaterThan(new BigNumber(b.amount))) {
      return -1;
    }
    if (new BigNumber(a.amount).isLessThan(new BigNumber(b.amount))) {
      return 1;
    }
    return 0;
  });

  return {
    statusCode: 200,
    body: JSON.stringify(orderedContributors.slice(0, amount)),
  };
};
