require("dotenv").config({ path: ".env" });
import axios from "axios";
import { Keyring } from "@polkadot/api";
import { getConfig } from "./crowdloan/config";

const exchangeAddresses = [];

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

  console.log("HERE")

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
            contributors(orderBy: totalContributed_DESC, limit: ${Number(amount) + exchangeAddresses.length}) {
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
    if (!exchangeAddresses.includes(getAddress(item.id, "centrifuge"))) {
      let aux = {
        account: getAddress(item.id, "centrifuge"),
        amount: item.totalContributed,
        numberOfContributions: item.countContributions
      }
      orderedContributors.push(aux)
    }
  })

  return {
    statusCode: 200,
    body: JSON.stringify(orderedContributors),

  };
};
