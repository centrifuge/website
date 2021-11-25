export const MAILCHIMP_URL =
  "https://centrifuge.us17.list-manage.com/subscribe/post?u=27084e1d9e6f92398b5c7ce91&id=ee9cca24fc";

export const PARACHAIN_NAME = "centrifuge";


export const WS_PROVIDER = "wss://rpc.polkadot.io";
export const TRANSACTION_DETAILS_URL = `https://polkadot.js.org/apps/?rpc=${encodeURIComponent(
  WS_PROVIDER
)}#/explorer/query`;

// @see https://wiki.polkadot.network/docs/learn-DOT
export const DOT_PLANCK = 1e10;

export const CFG_PLANCK = 1e18;

// the minimum contribution is 0.1 DOT
export const MIN_CONTRIBUTION_PLANCK = DOT_PLANCK * 0.1;
export const MIN_CONTRIBUTION_DOT = MIN_CONTRIBUTION_PLANCK / DOT_PLANCK;

// NOTE: the following values are placeholders.
// As soon as they are available (e.g. after we register), replace them with the correct ones

// TODO: replace with the correct values for this crowdloan
export const PARACHAIN_ID = 2006; // TODO: THIS IS ALSTAR PARACHAIN ID, USED FOR TESTING PURPOSES. REPLACE IT WITH OUR PARACHAIN_ID AFTER REGISTERING

