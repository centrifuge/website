import { encodeAddress } from "@polkadot/util-crypto";
import BigNumber from "bignumber.js";
import { CFG_PLANCK, DOT_PLANCK } from "./const";

function addCommas(x: number | string) {
  const [integer, decimals] = x.toString().split(".");
  return `${integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${
    decimals ? `.${decimals}` : ""
  }`;
}

export function truncateAddress(address: string) {
  const encodedAddress = encodeAddress(address, 0);
  return `${encodedAddress.slice(0, 6)}...${encodedAddress.slice(-6)}`;
}

const createFormatNum = (planck: number) => (
  value: number | BigNumber | string,
  decimals?: number,
  unit?: boolean,
  commas?: boolean,
  fixed?: boolean
) => {
  let bn =
    typeof value === "number"
      ? new BigNumber(value * planck)
      : new BigNumber(value);

  let unitLetter = "";
  if (unit) {
    const unitsArray = Object.entries({
      b: 1e9,
      m: 1e6,
      k: 1e3,
    });

    for (let i = 0; i < unitsArray.length; i += 1) {
      const [letter, base] = unitsArray[i];
      if (bn.gte(planck * base)) {
        bn = bn.div(base);
        unitLetter = letter;
        break;
      }
    }
  }

  let str = `${bn.div(planck).toFormat(decimals || 0)}`;
  if (!fixed && str.indexOf(".") !== -1) {
    str = str.replace(/0+$/, "");
  }
  if (commas == null || commas === true) {
    str = addCommas(str);
  }
  return `${str}${unitLetter || ""}`;
};

export const formatDOT = createFormatNum(DOT_PLANCK);

export const formatCFG = createFormatNum(CFG_PLANCK);

export const formatNumber = createFormatNum(1);

// Dates

const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const formatShortDate = (date: Date) =>
  `${dayName[date.getDay()]}, ${date.getDate()} ${monthName[date.getMonth()]}`;
