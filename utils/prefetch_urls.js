const fetch = require("node-fetch");

function prefetchURLs() {
  console.log("prefetching urls to decrease lamdba functions execution time");
  return fetch(
    `https://gitcoin.co/api/v0.1/bounties/?network=mainnet&order_by=-_val_usd_db&org=centrifuge&limit=100`
  ).then(() =>
    fetch(
      `https://gitcoin.co/api/v0.1/bounties/?network=mainnet&idx_status=done&order_by=-_val_usd_db&org=centrifuge&limit=100`
    )
      .then(() => Promise.resolve())
      .catch(err => console.log(err))
  );
}

prefetchURLs();
