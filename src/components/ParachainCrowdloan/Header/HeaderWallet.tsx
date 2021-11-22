import Identicon from "@polkadot/react-identicon";
import { Button } from "grommet";
import React from "react";
import styled from "styled-components";
import chevron_down from "../../../images/chevron-down.svg";
import { useWeb3 } from "../../Web3Provider";
import { truncateAddress } from "../shared/format";
import { mediaGreaterThan } from "../shared/media";

const WalletMenuBtn = styled.button`
  appearance: none;
  border: 0;
  margin: 0;
  background: #fff;
  padding: 12px 8px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const WalletMenuText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  display: none;
  ${mediaGreaterThan("small")} {
    display: block;
  }
`;

const WalletIconDown = styled.div`
  width: 16px;
  height: 16px;
  content: url(${chevron_down});

  display: none;
  ${mediaGreaterThan("small")} {
    display: block;
  }
`;

export const HeaderWallet = () => {
  const { selectedAccount, connect } = useWeb3();

  return (
    <div>
      {selectedAccount ? (
        <WalletMenuBtn
          onClick={() => {
            alert("Implement menu");
          }}
        >
          <Identicon
            value={selectedAccount.address}
            size={24}
            theme="polkadot"
          />
          <WalletMenuText>
            {truncateAddress(selectedAccount.address)}
          </WalletMenuText>
          <WalletIconDown />
        </WalletMenuBtn>
      ) : (
        <Button secondary label="Connect" onClick={() => connect()} />
      )}
    </div>
  );
};
