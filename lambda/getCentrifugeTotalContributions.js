import axios from "axios";
import { getConfig } from "./crowdloan/config";

export const fetchTotalContributions = async (parachain) => {
  const { URL_CROWDLOAN_SERVICE } = getConfig(parachain);

  if (!URL_CROWDLOAN_SERVICE) {
    return {
      totalContributions: null,
      totalAmountContributed: null,
    };
  }

  const { data } = await axios({
    url: URL_CROWDLOAN_SERVICE,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: {
      query: `
          query MetricsQuery {
          metrics {
            totalContributions
            totalAmountContributed
          }
        }
      `,
    },
  });
  return data.data.metrics;
};

exports.handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: "Method not allowed. Use GET.",
    };
  }

  const { parachain } = event.queryStringParameters;

  const { URL_CROWDLOAN_SERVICE } = getConfig(parachain);

  const metrics = await fetchTotalContributions(parachain);

  return {
    statusCode: 200,
    body: JSON.stringify({
      numberOfContributions: metrics.totalContributions,
      totalStaked: metrics.totalAmountContributed,
    }),
  };
};
