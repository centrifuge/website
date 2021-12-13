export const MAILCHIMP_URL =
  "https://centrifuge.us17.list-manage.com/subscribe/post?u=27084e1d9e6f92398b5c7ce91&id=ee9cca24fc";

export const PARACHAIN_NAME = "centrifuge";

export const WS_PROVIDER = "wss://rpc.polkadot.io";
export const TRANSACTION_DETAILS_URL = `https://polkadot.subscan.io/extrinsic`;

// @see https://wiki.polkadot.network/docs/learn-DOT
export const DOT_PLANCK = 1e10;

export const CFG_PLANCK = 1e18;

export type CrowdloanPhase =
  | "notStarted"
  | "earlyBird"
  | "earlyBirdExtended"
  | "earlyBirdExpired"
  | "ended";

// the minimum contribution is 5 DOT (see https://twitter.com/Polkadot/status/1457747901430566924)
export const MIN_CONTRIBUTION_DOT = 5;
export const MIN_CONTRIBUTION_PLANCK = DOT_PLANCK * MIN_CONTRIBUTION_DOT;

// the user won't be able to contribute if the balance - contrib - gas fee is lower than MIN_EXISTENTIAL_DEPOSIT_DOT
export const MIN_EXISTENTIAL_DEPOSIT_DOT = 1.1;
export const MIN_EXISTENTIAL_DEPOSIT_PLANCK =
  DOT_PLANCK * MIN_EXISTENTIAL_DEPOSIT_DOT;

export const MIN_BALANCE_DOT =
  MIN_EXISTENTIAL_DEPOSIT_DOT + MIN_CONTRIBUTION_DOT;
