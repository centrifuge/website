import { encodeAddress } from "@polkadot/util-crypto";
import BigNumber from "bignumber.js";
import { CFG_PLANCK, DOT_PLANCK } from "./const";

export function truncateAddress(address: string) {
  const encodedAddress = encodeAddress(address);
  const first8 = encodedAddress.slice(0, 8);
  const last3 = encodedAddress.slice(-3);

  return `${first8}...${last3}`;
}

export function formatNumber(n: number) {
  return n.toLocaleString();
}

export const formatDOT = (value: string) =>
  new BigNumber(value).div(DOT_PLANCK).toFormat(0);

export const formatCFG = (value: string) =>
  new BigNumber(value).div(CFG_PLANCK).toFormat(0);
