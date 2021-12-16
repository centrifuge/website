require("dotenv").config({ path: ".env" });
import axios from "axios";
import { Keyring } from "@polkadot/api";
import { getConfig } from "./crowdloan/config";

// TODO how to handle this scenario of filtering out ids if all computation is done in the graphql server
// need to add a custom filter
const exchangeAddresses = [
  "EkmdfH2Fc6XgPgDwMjye3Nsdj27CCSi9np8Kc7zYoCL2S3G",
  "F7fq1jMmNj5j2jAHcBxgM26JzUn2N4duXu1U4UZNdkfZEPV",
  "DAgtn9udZHC7GVU5gV7ybN8nTyucK9PEqY6QvXiG6fEW6TA",
];

const getAddress = (publicKey, parachain) => {
  const keyring = new Keyring({ type: "sr25519" });
  return keyring.encodeAddress(publicKey, parachain === 'centrifuge' ? 0 : 2);
};

exports.handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: "Method not allowed. Use GET.",
    };
  }

  const { amount, parachain } = event.queryStringParameters;

  const { URL_CROWDLOAN_SERVICE } = getConfig(parachain);

  if (!URL_CROWDLOAN_SERVICE) {
    return {
      statusCode: 200,
      body: JSON.stringify([]),
    };
  }

  const { data } = await axios({
    url: URL_CROWDLOAN_SERVICE,
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {
      query: `
          query TopContributors {
            contributors(orderBy: totalContributed_DESC, limit: ${amount}) {
              id
              totalContributed
              countContributions
            }
          }
      `
    }
  })

  let orderedContributors = []
  data.data.contributors.forEach((item) => {
    let aux = {
      account: getAddress(item.id, "centrifuge"),
      amount: item.totalContributed,
      numberOfContributions: item.countContributions
    }
    orderedContributors.push(aux)
  })

  return {
    statusCode: 200,
    body: JSON.stringify(orderedContributors),

  };
};
