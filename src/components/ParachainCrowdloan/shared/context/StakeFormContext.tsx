import React, { createContext, useContext, useState } from "react";

import { MIN_CONTRIBUTION_DOT } from "../const";
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
};

export const StakeFormContext = createContext<StakeFormContextType>({
  dotAmount: `${MIN_CONTRIBUTION_DOT}`,
  setDotAmount: () => {},
  emailAddress: "",
  setEmailAddress: () => {},
  referralCode: "",
  setReferralCode: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
  contribHash: "",
  setContribHash: () => {},
});

export const StakeFormContextProvider: React.FC = ({ children }) => {
  const [dotAmount, setDotAmount] = useState<string>(`${MIN_CONTRIBUTION_DOT}`);
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [referralCode, setReferralCode] = useState<string>(
    getSearchParam("refer") || ""
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [contribHash, setContribHash] = useState<string>("");

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
  };

  return (
    <StakeFormContext.Provider value={ctx}>
      {children}
    </StakeFormContext.Provider>
  );
};

export const useStakeFormContext = () => useContext(StakeFormContext);
