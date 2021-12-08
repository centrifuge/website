import {
  InjectedAccountWithMeta,
  InjectedExtension,
  Unsubcall,
  Web3AccountsOptions,
} from "@polkadot/extension-inject/types";
import * as React from "react";

type Account = InjectedAccountWithMeta;

type Web3ContextType = {
  accounts: Account[] | null;
  selectedAccount: Account | null;
  isConnecting: boolean;
  isWeb3Injected: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  selectAccount: (address: string) => void;
  web3FromAddress: (address: string) => Promise<InjectedExtension>;
};

const Web3Context = React.createContext<Web3ContextType>(null as any);

const GENESIS_HASHES = {
  kusama: "0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe",
  polkadot:
    "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
};

export function useWeb3() {
  const ctx = React.useContext(Web3Context);
  if (!ctx) throw new Error("useWeb3 must be used within Web3Provider");
  return ctx;
}

let triedEager = false;

type Props = {
  isWeb3Injected: boolean;
  web3AccountsSubscribe: (
    cb: (accounts: InjectedAccountWithMeta[]) => void | Promise<void>,
    { ss58Format }?: Web3AccountsOptions
  ) => Promise<Unsubcall>;
  web3Enable: (
    originName: string,
    compatInits?: (() => Promise<boolean>)[]
  ) => Promise<InjectedExtension[]>;
  web3EnablePromise: Promise<InjectedExtension[]> | null;
  web3FromAddress: (address: string) => Promise<InjectedExtension>;
  network: keyof typeof GENESIS_HASHES;
};

const Web3ProviderInner: React.FC<Props> = ({
  children,
  isWeb3Injected,
  web3AccountsSubscribe,
  web3Enable,
  web3EnablePromise,
  web3FromAddress,
  network,
}) => {
  const [accounts, setAccounts] = React.useState<Account[] | null>(null);
  const [selectedAccountAddress, setSelectedAccountAddress] = React.useState<
    string | null
  >(null);
  const [isConnecting, setIsConnecting] = React.useState(false);
  const unsubscribeRef = React.useRef<(() => void) | null>();

  function setFilteredAccounts(accounts: Account[]) {
    const hash = GENESIS_HASHES[network];
    const filteredAccounts = !hash
      ? accounts
      : accounts.filter(
          (account) =>
            !account.meta.genesisHash || account.meta.genesisHash === hash
        );

    setAccounts(filteredAccounts);
    const persistedAddress = localStorage.getItem("web3PersistedAddress");
    const address =
      (persistedAddress &&
        filteredAccounts.find((acc) => acc.address === persistedAddress)
          ?.address) ||
      filteredAccounts[0]?.address;
    setSelectedAccountAddress(address);
    localStorage.setItem("web3PersistedAddress", address ?? "");
  }

  const disconnect = React.useCallback(async () => {
    setAccounts(null);
    setSelectedAccountAddress(null);
    setIsConnecting(false);
    localStorage.setItem("web3Persist", "");
    localStorage.setItem("web3PersistedAddress", "");
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
      unsubscribeRef.current = null;
    }
  }, []);

  const connect = React.useCallback(async () => {
    unsubscribeRef.current?.();
    setIsConnecting(true);

    try {
      const injected = await (web3EnablePromise || web3Enable("Centrifuge"));
      if (injected.length === 0) {
        // no extension installed, or the user did not accept the authorization
        // in this case we should inform the use and give a link to the extension
        throw new Error("No extension or not authorized");
      }

      const unsub = await web3AccountsSubscribe((allAccounts) => {
        setFilteredAccounts(allAccounts);
      });
      unsubscribeRef.current = unsub;

      localStorage.setItem("web3Persist", "1");
    } catch (e) {
      console.error(e);
      localStorage.setItem("web3Persist", "");
      localStorage.setItem("web3PersistedAddress", "");
      throw e;
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const selectAccount = React.useCallback(async (address: string) => {
    setSelectedAccountAddress(address);
    localStorage.setItem("web3PersistedAddress", address);
  }, []);

  React.useEffect(() => {
    if (!triedEager && localStorage.getItem("web3Persist")) {
      connect();
    }
    triedEager = true;

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ctx: Web3ContextType = React.useMemo(
    () => ({
      accounts,
      selectedAccount:
        accounts?.find((acc) => acc.address === selectedAccountAddress) ?? null,
      isConnecting,
      isWeb3Injected,
      connect,
      disconnect,
      selectAccount,
      web3FromAddress,
    }),
    [
      accounts,
      isConnecting,
      connect,
      disconnect,
      selectAccount,
      selectedAccountAddress,
      web3FromAddress,
    ]
  );

  return <Web3Context.Provider value={ctx}>{children}</Web3Context.Provider>;
};

type PolkadotExtension = typeof import("@polkadot/extension-dapp");

let mod: PolkadotExtension | null = null;

type ProviderProps = {
  network: keyof typeof GENESIS_HASHES;
};

export const Web3Provider: React.FC<ProviderProps> = ({
  children,
  network,
}) => {
  const [module, setModule] = React.useState<PolkadotExtension | null>(mod);

  React.useEffect(() => {
    if (!module) {
      import("@polkadot/extension-dapp").then((m) => {
        mod = m;
        setModule(m);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!module) {
    return (
      <Web3Context.Provider
        value={{
          accounts: null,
          selectedAccount: null,
          isConnecting: false,
          isWeb3Injected: false,
          connect: async () => {},
          disconnect: () => {},
          selectAccount: () => {},
          web3FromAddress: async () => ({} as any),
        }}
      >
        {children}
      </Web3Context.Provider>
    );
  }

  return (
    <Web3ProviderInner
      isWeb3Injected={module.isWeb3Injected}
      web3AccountsSubscribe={module.web3AccountsSubscribe}
      web3Enable={module.web3Enable}
      web3EnablePromise={module.web3EnablePromise}
      web3FromAddress={module.web3FromAddress}
      network={network}
    >
      {children}
    </Web3ProviderInner>
  );
};
