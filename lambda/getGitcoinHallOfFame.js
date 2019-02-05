import fetch from "node-fetch";
import countBy from "lodash.countby";
import uniqBy from "lodash.uniqby";

exports.handler = async (event, context) =>
  fetch(
    `https://gitcoin.co/api/v0.1/bounties/?network=mainnet&idx_status=done&order_by=-_val_usd_db&org=centrifuge`
  )
    .then(res => res.json())
    .then(res => res.map(bounty => bounty.paid[0]))
    .then(res =>
      res.map(bounty => ({ name: bounty, count: countBy(res)[bounty] }))
    )
    .then(res => uniqBy(res, "name"))
    .then(json => ({
      statusCode: 200,
      body: JSON.stringify(json)
    }))
    .catch(error => ({
      statusCode: 422,
      body: JSON.stringify(error)
    }));
