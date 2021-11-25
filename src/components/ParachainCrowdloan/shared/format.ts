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


const createFormatNum = (planck: number) => (value: number | BigNumber | string, decimals?: number, unit?: boolean) => {
  let bn = typeof value === 'number' ? new BigNumber(value * planck) : new BigNumber(value);

  let unitLetter = '';
  if (unit) {
    const unitsArray = Object.entries({
      b: 1e9,
      m: 1e6,
      k: 1e3,
    });
  
    for (let i = 0; i < unitsArray.length; i += 1) {
      const [letter, base] = unitsArray[i];
      if (bn.gt(planck * base)) {
        bn = bn.div(base);
        unitLetter = letter;
        break;
      }
    }
  }


  const str = `${bn.div(planck).toFixed(decimals || 0)}`.replace(/\.0+$/, '');
  return `${str}${unitLetter || ''}`;
}

export const formatDOT = createFormatNum(DOT_PLANCK);

export const formatCFG = createFormatNum(CFG_PLANCK);
