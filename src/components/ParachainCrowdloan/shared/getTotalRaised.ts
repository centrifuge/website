import { ApiPromise } from "@polkadot/api";
import BigNumber from "bignumber.js";
import { PARACHAIN_ID } from "./config";
import { DOT_PLANCK } from "./const";

export const getTotalRaised = async (api: ApiPromise): Promise<number> => {
  const resp = (await api.query.crowdloan.funds(PARACHAIN_ID)) as any;
  return new BigNumber(resp.value.raised).div(DOT_PLANCK).toNumber();
};
