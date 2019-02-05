import fetch from "node-fetch";

exports.handler = async (event, context) =>
  fetch(
    `https://gitcoin.co/api/v0.1/bounties/?network=mainnet&order_by=-_val_usd_db&org=centrifuge`
  )
    .then(res => res.json())
    .then(res =>
      res
        .filter(bounty => bounty.status != "cancelled")
        .filter(bounty => bounty.status != "done")
    )
    .then(json => ({
      statusCode: 200,
      body: JSON.stringify(json)
    }))
    .catch(error => ({
      statusCode: 422,
      body: JSON.stringify(error)
    }));
