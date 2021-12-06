import BigNumber from "bignumber.js";
import React, { createContext, useContext, useState } from "react";

import { getSearchParam } from "../browserOnly";

type StakeFormContextType = {
  dotAmount: string;
  setDotAmount: (val: string) => void;
  emailAddress: string;
  setEmailAddress: (val: string) => void;
  referralCode: string;
  setReferralCode: (val: string) => void;
  errorMessage: string;
  setErrorMessage: (val: string) => void;
  contribHash: string;
  setContribHash: (val: string) => void;
  warning: string;
  setWarning: (val: string) => void;
  gasFee?: BigNumber;
  setGasFee: (val: BigNumber) => void;
};

export const StakeFormContext = createContext<StakeFormContextType>({
  dotAmount: "",
  setDotAmount: () => {},
  emailAddress: "",
  setEmailAddress: () => {},
  referralCode: "",
  setReferralCode: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
  contribHash: "",
  setContribHash: () => {},
  warning: "",
  setWarning: () => {},
  setGasFee: () => {},
});

export const StakeFormContextProvider: React.FC = ({ children }) => {
  const [dotAmount, setDotAmount] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [referralCode, setReferralCode] = useState<string>(
    getSearchParam("refer") || ""
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [contribHash, setContribHash] = useState<string>("");

  const [warning, setWarning] = useState<string>("");
  const [gasFee, setGasFee] = useState<BigNumber>();

  const ctx: StakeFormContextType = {
    dotAmount,
    setDotAmount,
    emailAddress,
    setEmailAddress,
    referralCode,
    setReferralCode,
    errorMessage,
    setErrorMessage,
    contribHash,
    setContribHash,
    warning,
    setWarning,
    gasFee,
    setGasFee,
  };

  return (
    <StakeFormContext.Provider value={ctx}>
      {children}
    </StakeFormContext.Provider>
  );
};

export const useStakeFormContext = () => useContext(StakeFormContext);
