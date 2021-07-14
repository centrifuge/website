import BN from "bn.js";

let cachedData = null;

async function getData() {
  const res = await fetch(process.env.GATSBY_CENTRIFUGE_SUBGRAPH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
              query {
                pools {
                  reserve,
                  assetValue,
                  totalRepaysAggregatedAmount,
                  totalDebt
                }
              }`,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to rerieve pool data for TVL: ${res.statusText}`);
  }

  return (await res.json()).data;
}

async function getTvl() {
  if (!cachedData) cachedData = await getData();

  const tvl = cachedData.pools.reduce((sum, pool) => {
    return sum.add(new BN(pool.assetValue)).add(new BN(pool.reserve));
  }, new BN(0));

  return tvl;
}

async function getTaf() {
  if (!cachedData) cachedData = await getData();

  const taf = cachedData.pools.reduce((sum, pool) => {
    return sum
      .add(new BN(pool.totalRepaysAggregatedAmount))
      .add(new BN(pool.totalDebt));
  }, new BN(0));

  return taf;
}

export { getTvl, getTaf };
