import { useEffect, useState } from "react";
import { useWeb3 } from "../../Web3Provider";
import { usePolkadotApi } from "./context/PolkadotApiProvider";
import jsonBigint from "json-bigint";
import {
  cryptoWaitReady,
  decodeAddress,
  signatureVerify,
} from "@polkadot/util-crypto";

const JSONbig = jsonBigint({
  useNativeBigInt: true,
  alwaysParseAsBig: true,
});

export type ClaimProps = {
  claimRewards: () => Promise<void>;
  isClaimingRewards: boolean;
  claimError?: string;
  hasClaimedRewards: boolean;
  claimHash: string;
  isLoadingClaimStatus: boolean;
};

export const useClaimRewards = () => {
  const [isClaimingRewards, setIsClaimingRewards] = useState<boolean>(false);
  const [isLoadingClaimStatus, setIsLoadingClaimStatus] = useState<boolean>(
    true
  );
  const [claimError, setClaimError] = useState<string>();
  const [hasClaimedRewards, setHasClaimedRewards] = useState<boolean>(false);
  const [claimHash, setClaimHash] = useState<string>("");

  const { api } = usePolkadotApi();
  const { selectedAccount } = useWeb3();

  // check if user has already claimed
  useEffect(() => {
    if (selectedAccount?.address) {
      (async () => {
        if (!api) return;
        const didClaim = await api.query.crowdloanClaim.processedClaims([
          selectedAccount.address,
          1,
        ]);

        setHasClaimedRewards(didClaim.toHuman() ? true : false);
        setIsLoadingClaimStatus(false);
      })();
    }
  }, [selectedAccount?.address, api]);

  const claimRewards = async () => {
    const polkadotMod = await import("@polkadot/extension-dapp");
    const { web3FromSource } = polkadotMod;

    if (!selectedAccount) {
      return;
    }

    setIsClaimingRewards(true);
    setClaimError("");
    try {
      const injector = await web3FromSource(selectedAccount.meta.source);

      const signRaw = injector?.signer?.signRaw;

      if (!signRaw) throw new Error("signRaw was not defined");

      const response = await fetch(
        "/.netlify/functions/createCentrifugeProof",
        {
          method: "POST",
          body: JSON.stringify({ address: selectedAccount.address }),
        }
      );

      const text = await response.text();

      if (!response.ok) {
        console.error("createProof failed", text);
        throw new Error("Could not create proof");
      }

      const proof = JSONbig.parse(text);

      await cryptoWaitReady();

      if (!api) {
        throw new Error("Polkadot API not ready");
      }

      const { signature } = await signRaw({
        address: selectedAccount.address,
        data: proof.signMessage,
        type: "bytes",
      });

      const verification = signatureVerify(
        proof.signMessage,
        signature,
        decodeAddress(selectedAccount.address)
      );

      if (!["sr25519", "ed25519", "ecdsa"].includes(verification.crypto)) {
        throw new Error("Verification of signature failed with given account.");
      }

      const signatureTypeMulti = api.createType("MultiSignature", {
        [verification.crypto]: signature,
      });

      const proofType = api.createType("Proof", {
        leafHash: api.createType("Hash", proof.proof.leafHash),
        sortedHashes: api.createType("Vec<Hash>", proof.proof.sortedHashes),
      });

      const amountType = api.createType("Balance", proof.contribution);

      const accountId = api.createType(
        "AccountId",
        decodeAddress(selectedAccount.address)
      );

      const claim = api.tx.crowdloanClaim.claimReward(
        accountId,
        accountId,
        signatureTypeMulti,
        proofType,
        amountType
      );

      await claim.send(({ status, events }) => {
        if (status.isInBlock || status.isFinalized) {
          events.forEach(({ event }) => {
            if (api.events.system.ExtrinsicSuccess.is(event)) {
              setHasClaimedRewards(true);
              setIsClaimingRewards(false);
              setClaimHash((status.asFinalized as unknown) as string);
            } else if (api.events.system.ExtrinsicFailed.is(event)) {
              const [dispatchError] = event.data;

              if (dispatchError.isModule) {
                const decoded = api.registry.findMetaError(
                  dispatchError.asModule
                );

                const errorInfo = `${decoded.section}.${decoded.name}`;
                setClaimError(errorInfo);
                setIsClaimingRewards(false);
              } else {
                const errorInfo = dispatchError.toString();
                setClaimError(errorInfo);
                setIsClaimingRewards(false);
              }
            }
          });
        }
      });
    } catch (error) {
      console.log("Claim error", error);
      setClaimError((error as Error).toString());
      setIsClaimingRewards(false);
    }
  };

  return {
    claimRewards,
    isClaimingRewards,
    claimError,
    hasClaimedRewards,
    claimHash,
    isLoadingClaimStatus,
  };
};
