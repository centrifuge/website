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

  const totalIssuanceRaw = await api.query.balances.totalIssuance();
  const totalIssuance = totalIssuanceRaw.toString();
  const integer = totalIssuance.substring(0, totalIssuance.length - 18);

  return {
    statusCode: 200,
    body: integer.toString(),
  };
};
