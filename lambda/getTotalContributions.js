import axios from "axios";
import { BigNumber } from "bignumber.js";
import { getConfig } from "./crowdloan/config";

exports.handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: "Method not allowed. Use GET.",
    };
  }

  const { parachain } = event.queryStringParameters;

  const { URL_CONTRIBUTIONS } = getConfig(parachain);

  if (!URL_CONTRIBUTIONS) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        numberOfContributions: null,
        totalStaked: null,
      }),
    };
  }

  const { data } = await axios(URL_CONTRIBUTIONS);

  const totalStaked = data
    .reduce((acc, item) => acc.plus(item.contribution), new BigNumber(0))
    .toFixed();

  return {
    statusCode: 200,
    body: JSON.stringify({
      numberOfContributions: data.length,
      totalStaked,
    }),
  };
};
