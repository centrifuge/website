import React, { createContext, useContext, useState } from "react";
import queryString from "query-string";

import { MIN_CONTRIBUTION_DOT } from "./shared/const";

type StakeFormContextType = {
  dotAmount: string;
  setDotAmount: (val: string) => void;
  emailAddress: string;
  setEmailAddress: (val: string) => void;
  referralCode: string;
  setReferralCode: (val: string) => void;
};

export const StakeFormContext = createContext<StakeFormContextType>({
  dotAmount: `${MIN_CONTRIBUTION_DOT}`,
  setDotAmount: () => {},
  emailAddress: "",
  setEmailAddress: () => {},
  referralCode: "",
  setReferralCode: () => {},
});

export const StakeFormContextProvider: React.FC = ({ children }) => {
  const [dotAmount, setDotAmount] = useState<string>(`${MIN_CONTRIBUTION_DOT}`);
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [referralCode, setReferralCode] = useState<string>(
    queryString.parse(location.search).refer?.toString() || ""
  );

  const ctx: StakeFormContextType = {
    dotAmount,
    setDotAmount,
    emailAddress,
    setEmailAddress,
    referralCode,
    setReferralCode,
  };

  return (
    <StakeFormContext.Provider value={ctx}>
      {children}
    </StakeFormContext.Provider>
  );
};

export const useStakeFormContext = () => useContext(StakeFormContext);
