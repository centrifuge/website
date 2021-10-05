import axios from 'axios';

exports.handler = async event => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method not allowed. Use GET.',
    };
  }

  const { data } = await axios(
    'https://crowdloan-ws.centrifuge.io/contributions',
  );

  return {
    statusCode: 200,
    body: JSON.stringify({
      numberOfContributions: data.length,
    }),
  };
};
