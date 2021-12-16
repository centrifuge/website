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

  const { URL_CROWDLOAN_SERVICE } = getConfig(parachain);

  if (!URL_CROWDLOAN_SERVICE) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        numberOfContributions: null,
        totalStaked: null,
      }),
    };
  }

  const {data} = await axios({
    url: URL_CROWDLOAN_SERVICE,
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {
      query: `
          query MetricsQuery {
          metrics {
            totalContributions
            totalAmountContributed
          }
        }
      `
    }
  })
  const metrics = data.data.metrics

  return {
    statusCode: 200,
    body: JSON.stringify({
      numberOfContributions: metrics.totalContributions,
      totalStaked: metrics.totalAmountContributed,
    }),
  };
};
