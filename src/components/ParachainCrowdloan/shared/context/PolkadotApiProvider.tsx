import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";

type PolkadotApiContextType = {
  api?: ApiPromise;
};

export const PolkadotApiContext = createContext<PolkadotApiContextType>({
  api: undefined,
});

type PolkadotApiProviderProps = {
  wsProviderUrl: string;
};

export const PolkadotApiProvider: React.FC<PolkadotApiProviderProps> = ({
  children,
  wsProviderUrl,
}) => {
  const [api, setApi] = useState<ApiPromise>();

  useEffect(() => {
    (async () => {
      const wsProvider = new WsProvider(wsProviderUrl);

      const newApi = await ApiPromise.create({
        provider: wsProvider,
        types: {
          RootHashOf: "Hash",
          TrieIndex: "u32",
          RelayChainAccountId: "AccountId",
          ParachainAccountIdOf: "AccountId",
          Proof: {
            leafHash: "Hash",
            sortedHashes: "Vec<Hash>",
          },
        },
      });

      setApi(newApi);
    })();
  }, []);

  const ctx: PolkadotApiContextType = useMemo<PolkadotApiContextType>(
    () => ({
      api,
    }),
    [api]
  );

  return (
    <PolkadotApiContext.Provider value={ctx}>
      {children}
    </PolkadotApiContext.Provider>
  );
};

export const usePolkadotApi = () => useContext(PolkadotApiContext);
