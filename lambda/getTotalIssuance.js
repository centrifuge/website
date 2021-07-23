import { ApiPromise, WsProvider } from '@polkadot/api';

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

  const totalIssurance = await api.query.balances.totalIssuance();

  return {
    statusCode: 200,
    body: JSON.stringify(totalIssurance.toString()),
  };
};
