import fetch from "node-fetch";

exports.handler = async (event, context) =>
  fetch(
    `https://gitcoin.co/api/v0.1/bounties/?network=mainnet&idx_status=done&order_by=-_val_usd_db&org=centrifuge&limit=100`
  )
    .then(res => res.json())
    .then(res => {
      return {
        compensationPaid: res
          .map(bounty => Number(bounty.value_in_usdt_now))
          .reduce((acc, item) => acc + item, 0),
        bountiesCompleted: res.length
      };
    })
    .then(json => ({
      statusCode: 200,
      body: JSON.stringify(json)
    }))
    .catch(error => ({
      statusCode: 422,
      body: JSON.stringify(error)
    }));
