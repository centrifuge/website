import { ApiPromise, WsProvider } from '@polkadot/api';

const lockSchedule = {
  "2021-01": 387195792,
  "2021-02": 385865020,
  "2021-03": 384667582,
  "2021-04": 383476810,
  "2021-05": 381508720,
  "2021-06": 379701047,
  "2021-07": 358768374,
  "2021-08": 348141483,
  "2021-09": 337487815,
  "2021-10": 326817474,
  "2021-11": 316026206,
  "2021-12": 304715269,
  "2022-01": 285267686,
  "2022-02": 265760890,
  "2022-03": 245991703,
  "2022-04": 225163475,
  "2022-05": 204154506,
  "2022-06": 182954171,
  "2022-07": 162079553,
  "2022-08": 144740760,
  "2022-09": 129382349,
  "2022-10": 114042089,
  "2022-11": 100392998,
  "2022-12": 86743908,
  "2023-01": 82810934,
  "2023-02": 75544626,
  "2023-03": 68285295,
  "2023-04": 61044115,
  "2023-05": 57154419,
  "2023-06": 53281389,
  "2023-07": 49408360,
  "2023-08": 46516550,
  "2023-09": 43624740,
  "2023-10": 40749266,
  "2023-11": 39540459,
  "2023-12": 38331652,
  "2024-01": 37124789,
  "2024-02": 35917926,
  "2024-03": 34711063,
  "2024-04": 33504200,
  "2024-05": 32297337,
  "2024-06": 31105058,
  "2024-07": 29912778,
  "2024-08": 28720498,
  "2024-09": 27528218,
  "2024-10": 26335938,
  "2024-11": 25143658,
  "2024-12": 23951378,
  "2025-01": 22868890,
  "2025-02": 21786402,
  "2025-03": 20715372,
  "2025-04": 19680592,
  "2025-05": 18651021,
  "2025-06": 17639783,
  "2025-07": 16659795,
  "2025-08": 15679807,
  "2025-09": 14699819,
  "2025-10": 13719831,
  "2025-11": 12739843,
  "2025-12": 11759855,
  "2026-01": 10779867,
  "2026-02": 9799880,
  "2026-03": 8819892,
  "2026-04": 7839904,
  "2026-05": 6859916,
  "2026-06": 5879928,
  "2026-07": 4899940,
  "2026-08": 3919952,
  "2026-09": 2939964,
  "2026-10": 1959976,
  "2026-11": 979988,
  "2026-12": 0
}

const getLockedSupply = () => {
  const today = new Date()
  const year = today.getYear()+1900
  const month = today.getMonth() < 9 ? "0"+(today.getMonth()+1).toString() : (today.getMonth()+1).toString()
  return lockSchedule[`${year}-${month}`]
}

exports.handler = async event => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method not allowed. Use GET.',
    };
  }

  const CENTRIFUGE_MAINNET_WSS_RPC = 'wss://fullnode.centrifuge.io';

  const wsProvider = new WsProvider(CENTRIFUGE_MAINNET_WSS_RPC);
  const api = await ApiPromise.create({ provider: wsProvider });
  const totalIssuanceRaw = await api.query.balances.totalIssuance().toString();
  const totalIssuance = totalIssuanceRaw.substring(0, totalIssuanceRaw.length - 18);
  const liquid = parseInt(totalIssuance) - getLockedSupply()

  return {
    statusCode: 200,
    body: JSON.stringify({"totalIssuance": totalIssuance, "circulatingSupply": liquid}),
  };
};
