require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
import axios from 'axios';

exports.handler = async event => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method not allowed. Use GET.',
    };
  }

  const { data } = await axios.get(
    'https://altair.api.subscan.io/api/scan/token',
    {
      headers: {
        'X-API-Key': process.env.SUBSCAN_API_KEY,
      },
    },
  );

  const availableBalance = data.data.detail.AIR.available_balance;

  const circulatingSupply = availableBalance.substring(
    0,
    availableBalance.length - 18,
  );

  return {
    statusCode: 200,
    body: circulatingSupply,
  };
};
