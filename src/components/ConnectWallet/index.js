import React from 'react';
import { Button } from 'grommet';
const { web3Enable } = require('@polkadot/extension-dapp');

const connectWallet = async () => {
  await web3Enable('Altair Auction');
};

export const ConnectWalletButton = () => (
  <Button label="Connect" alignSelf="start" onClick={() => connectWallet()} />
);
