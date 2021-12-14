import Identicon from "@polkadot/react-identicon";
import { Box, Button } from "grommet";
import { Checkmark } from "grommet-icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import chevron_down from "../../../images/chevron-down.svg";
import { useWeb3 } from "../../Web3Provider";
import { truncateAddress } from "../shared/format";
import { onBreakpoint } from "../shared/responsive";

const WalletMenuBtn = styled.button`
  appearance: none;
  border: 0;
  margin: 0;
  background: #fff;
  padding: 12px 8px;
  border: 1px solid #000;
  border-radius: 100vh;

  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  > div {
    cursor: inherit;
  }
`;

const MenuItemSublabel = styled.span`
  color: #757577;
  font-size: 10px;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  appearance: none;
  background: transparent;
  outline: 0;
  color: black;
  font-weight: 500;

  > div {
    cursor: inherit;
  }

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.global.colors.brand};
    color: white;

    ${MenuItemSublabel} {
      color: white;
    }
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const WalletMenuText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  display: none;
  ${onBreakpoint("L")} {
    display: block;
  }
`;

const WalletIconDown = styled.div`
  width: 16px;
  height: 16px;
  content: url(${chevron_down});

  display: none;
  ${onBreakpoint("L")} {
    display: block;
  }
`;

type HeaderWalletProps = {
  connectOnMount: boolean;
};

export const HeaderWallet: React.FC<HeaderWalletProps> = ({
  connectOnMount,
}) => {
  const { selectedAccount, connect, accounts, selectAccount } = useWeb3();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (connectOnMount) {
      connect();
    }
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {selectedAccount ? (
        <>
          <WalletMenuBtn
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            <Identicon
              value={selectedAccount.address}
              size={24}
              theme="polkadot"
            />
            <WalletMenuText>
              {selectedAccount.meta.name ||
                truncateAddress(selectedAccount.address)}
            </WalletMenuText>
            <WalletIconDown />
          </WalletMenuBtn>
          {isOpen && (
            <Box
              background="white"
              overflow="hidden"
              elevation="medium"
              width="300px"
              style={{
                position: "absolute",
                maxWidth: "100vw",
                borderRadius: "8px",
                bottom: 0,
                right: 0,
                transform: "translateY(100%)",
              }}
            >
              {accounts!.map((acc) => (
                <MenuItem
                  key={acc.address}
                  onClick={() => {
                    setOpen(false);
                    selectAccount(acc.address);
                  }}
                >
                  <Identicon value={acc.address} size={24} theme="polkadot" />
                  <Box direction="column" align="start">
                    <div>{acc.meta.name || truncateAddress(acc.address)}</div>
                    {acc.meta.name && (
                      <MenuItemSublabel>
                        {truncateAddress(acc.address)}
                      </MenuItemSublabel>
                    )}
                  </Box>

                  {selectedAccount.address === acc.address && (
                    <Checkmark
                      size="small"
                      style={{ stroke: "currentcolor", marginLeft: "auto" }}
                    />
                  )}
                </MenuItem>
              ))}
            </Box>
          )}
        </>
      ) : accounts && !accounts.length ? (
        <Button disabled secondary label="No accounts available" />
      ) : (
        <Button secondary label="Connect" onClick={() => connect()} />
      )}
    </div>
  );
};
