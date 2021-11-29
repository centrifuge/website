import { ApiPromise, WsProvider } from "@polkadot/api";
import { encodeAddress } from "@polkadot/keyring";
import {
  cryptoWaitReady,
  decodeAddress,
  signatureVerify,
} from "@polkadot/util-crypto";
import { Anchor, Box, Button, FormField, Select, Spinner, Text } from "grommet";
import { Alert, StatusGood } from "grommet-icons";
import React from "react";
import styled from "styled-components";
import altairLogo from "../../images/altair-marquee.svg";
import faq from "../../images/altair/faq.svg";
import hello_world from "../../images/altair/hello_world.png";
import { Section } from "../MDXLayout/shortcodes";
import { useWeb3, Web3Provider } from "../Web3Provider";
import { ClaimModal } from "./ClaimModal";
import { MediaCard } from "./MediaCard";

const JSONbig = require("json-bigint")({
  useNativeBigInt: true,
  alwaysParseAsBig: true,
});

export const Coinlist: React.FC = () => {
  return (
    <Web3Provider network="kusama">
      <Hero />
      <MediaCards />
    </Web3Provider>
  );
};

const HideMobile = styled.div`
  @media (max-width: 899px) {
    display: none;
  }
`;

const StyledFormField = styled(FormField)`
  svg {
    stroke: white;
  }
`;

const Hero: React.FC = () => {
  return (
    <Box background="black">
      <Section>
        <Box direction="row" gap="32px">
          <Box direction="column" gap="32px">
            <Text size="3xl" weight={600} textAlign="start">
              CoinList User AIR Snapshot Claim
            </Text>
            <Text size="xlarge" weight={600} style={{ lineHeight: 2.4 }}>
              CoinList users that held CFG in their CoinList account during the
              snapshot can use this page to claim their AIR tokens to the
              address you provided to CoinList
            </Text>
          </Box>
          <HideMobile>
            <img src={altairLogo} style={{ width: "180px" }} />
          </HideMobile>
        </Box>
        <Claim />
      </Section>
    </Box>
  );
};

const Claim: React.FC = () => {
  const {
    connect,
    selectedAccount,
    selectAccount,
    accounts,
    isConnecting,
  } = useWeb3();
  return (
    <Box
      style={{
        marginTop: "56px",
      }}
      direction="column"
      align="center"
    >
      {selectedAccount ? (
        <Box
          alignSelf="center"
          direction="column"
          width="420px"
          style={{ maxWidth: "100%", gap: "24px" }}
        >
          <Text size="large" weight={600}>
            Select your account
          </Text>
          <StyledFormField label="Kusama account">
            <Select
              children={(account) => (
                <Box pad="small" style={{ textAlign: "left" }}>
                  {account.meta.name
                    ? `${account.meta.name} - ${truncateAddress(
                        account.address
                      )}`
                    : account.address}
                </Box>
              )}
              options={accounts}
              onChange={({ option }) => selectAccount(option.address)}
              valueKey="address"
              valueLabel={
                <Box pad="small" style={{ textAlign: "left" }}>
                  <div>
                    {selectedAccount.meta.name
                      ? `${selectedAccount.meta.name} - ${truncateAddress(
                          selectedAccount.address
                        )}`
                      : selectedAccount.address}
                  </div>
                </Box>
              }
              value={`${selectedAccount?.meta?.name} - ${selectedAccount?.address}`}
            />
          </StyledFormField>

          <ClaimAction
            address={selectedAccount.address}
            key={selectedAccount.address}
          />
        </Box>
      ) : isConnecting ? (
        <Spinner color="white" size="medium" />
      ) : accounts ? (
        <Box alignSelf="center" width="420px" style={{ maxWidth: "100%" }}>
          <Text size="16px" style={{ lineHeight: "28px" }} weight={600}>
            Can’t see your account?
          </Text>
          <Text size="16px" style={{ lineHeight: "28px" }}>
            Make sure the Polkadot.js extension already installed.
          </Text>
          <Text size="16px" style={{ lineHeight: "28px" }}>
            Authorize this page in the extension.
          </Text>
          <Text size="16px" style={{ lineHeight: "28px" }}>
            Make sure the account is visible and the use is allowed on Kusama or
            on any chain.
          </Text>
          <Text size="16px" style={{ lineHeight: "28px" }}>
            Refresh the page after changing settings in the extension.
          </Text>
        </Box>
      ) : (
        <div style={{ alignSelf: "flex-start" }}>
          <Button
            primary
            color="altair"
            label="Claim AIR"
            onClick={() => connect()}
          />
        </div>
      )}
    </Box>
  );
};

const ClaimAction: React.FC<{ address: string }> = ({ address }) => {
  const { web3FromAddress } = useWeb3();
  const [hasClaimed, setHasClaimed] = React.useState(false);
  const [isClaiming, setIsClaiming] = React.useState(false);
  const [showClaimModal, setShowClaimModal] = React.useState(false);
  const [claimHash, setClaimHash] = React.useState("");
  const [claimError, setClaimError] = React.useState("");

  async function getClaimed(address: string) {
    const api = await getApi();

    const didClaim = await api.query.crowdloanClaim.processedClaims([
      address,
      1,
    ]);
    setHasClaimed(!!didClaim.toHuman());
  }

  React.useEffect(() => {
    getClaimed(address);
  }, [address]);

  async function claim() {
    setIsClaiming(true);
    setClaimError("");
    try {
      const api = await getApi();
      const injector = await web3FromAddress(address);

      const response = await fetch("/.netlify/functions/createCoinlistProof", {
        method: "POST",
        body: JSON.stringify({ address: address }),
      });

      if (!response.ok) throw new Error("Claim not found");

      const text = await response.text();

      const proof = JSONbig.parse(text);

      await cryptoWaitReady();

      const { signature } = await injector.signer.signRaw({
        address: address,
        data: proof.signMessage,
        type: "bytes",
      });

      const verification = signatureVerify(
        proof.signMessage,
        signature,
        decodeAddress(address)
      );

      let signatureTypeMulti;
      if (verification.crypto === "sr25519") {
        signatureTypeMulti = api.createType("MultiSignature", {
          sr25519: signature,
        });
      } else if (verification.crypto === "ed25519") {
        signatureTypeMulti = api.createType("MultiSignature", {
          ed25519: signature,
        });
      } else if (verification.crypto === "ecdsa") {
        signatureTypeMulti = api.createType("MultiSignature", {
          ecdsa: signature,
        });
      } else {
        throw new Error("Verification of signature failed with given account.");
      }

      const proofType = api.createType("Proof", {
        leafHash: api.createType("Hash", proof.proof.leafHash),
        sortedHashes: api.createType("Vec<Hash>", proof.proof.sortedHashes),
      });

      const amountType = api.createType("Balance", proof.contribution);

      const accountId = api.createType("AccountId", decodeAddress(address));

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
              getClaimed(address);
              setIsClaiming(false);
              setClaimHash(status.asFinalized as any);
            } else if (api.events.system.ExtrinsicFailed.is(event)) {
              const [dispatchError] = event.data;

              if (dispatchError.isModule) {
                const decoded = api.registry.findMetaError(
                  dispatchError.asModule
                );

                const errorInfo = `${decoded.section}.${decoded.name}`;
                console.error(errorInfo);
                setClaimError(errorInfo);
                setIsClaiming(false);
              } else {
                const errorInfo = dispatchError.toString();
                console.error(errorInfo);
                setClaimError(errorInfo);
                setIsClaiming(false);
              }
            }
          });
        }
      });
    } catch (e) {
      console.error(e);
      setIsClaiming(false);
      setClaimError(e.message);
    }
  }

  return (
    <>
      {isClaiming ? (
        <Box alignSelf="center">
          <Spinner />
        </Box>
      ) : (
        <div>
          <Button
            disabled={hasClaimed}
            primary
            label="Claim AIR"
            onClick={() => setShowClaimModal(true)}
          />
        </div>
      )}
      {hasClaimed && <ClaimSuccess claimHash={claimHash} />}
      {claimError && <ClaimError />}
      {showClaimModal && (
        <ClaimModal
          claimRewards={claim}
          setShowClaimModal={setShowClaimModal}
        />
      )}
    </>
  );
};

const MediaCards: React.FC = () => {
  return (
    <Box
      background="white"
      style={{ padding: "64px 0" }}
      direction="row"
      gap="16px"
      justify="center"
    >
      <MediaCard>
        <Box
          background={`url('${faq}')`}
          width="364px"
          height="204px"
          style={{ borderRadius: "10px 10px 0px 0px" }}
        />
        <Box height="230px" style={{ padding: "24px" }} gap="20px">
          <Text size="20px" textAlign="start" weight={600}>
            FAQ: Altair Crowdloan
          </Text>
          <Text size="16px" textAlign="start">
            Here are some answers to the most common questions about Altair’s
            Kusama parachain bid and crowdloan
          </Text>
          <Anchor
            target="_blank"
            href="https://medium.com/altair-network/faq-altair-crowdloan-85b9d9abd235"
            label="Read more..."
            size="16px"
            weight={600}
          />
        </Box>
      </MediaCard>
      <MediaCard>
        <Box
          background={`url('${hello_world}')`}
          width="364px"
          height="204px"
          style={{ borderRadius: "10px 10px 0px 0px" }}
        />
        <Box height="230px" style={{ padding: "24px" }} gap="20px">
          <Text size="20px" textAlign="start" weight={600}>
            Altair: Hello, World!
          </Text>
          <Text size="16px" textAlign="start">
            We won Kusama parachain auction #9, what’s next?!
          </Text>
          <Anchor
            target="_blank"
            href="https://medium.com/altair-network/altair-hello-world-14ebfae58639"
            label="Read more..."
            size="16px"
            weight={600}
          />
        </Box>
      </MediaCard>
    </Box>
  );
};

const ClaimSuccess: React.FC<{ claimHash?: string }> = ({ claimHash }) => (
  <Box background="#616161" pad="16px 24px">
    <Box align="center" direction="row" gap="6px">
      <StatusGood color="white" size="16px" />
      <Text weight={500}>AIR Tokens claimed</Text>
    </Box>
    {claimHash && (
      <Text>
        <Text margin="0 4px 0 0">View</Text>
        <Anchor
          target="_blank"
          href={`https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffullnode.altair.centrifuge.io#/explorer/query/${claimHash}`}
          label="transaction details"
        />
      </Text>
    )}
  </Box>
);

const ClaimError = () => (
  <Box background="#616161" pad="16px 24px">
    <Box align="center" direction="row" gap="6px">
      <Alert color="white" size="16px" />
      <Text weight={500}>Something went wrong!</Text>
    </Box>
    <Text>
      <Text margin="0 4px 0 0">Please try to claim again.</Text>
    </Text>
  </Box>
);

function truncateAddress(address) {
  const encodedAddress = encodeAddress(address, 2);
  const firstFifteen = encodedAddress.slice(0, 8);
  const lastFifteen = encodedAddress.slice(-2);

  return `${firstFifteen}...${lastFifteen}`;
}

let cached: Promise<ApiPromise>;
function getApi() {
  if (cached) return cached;
  const wsProvider = new WsProvider("wss://fullnode.altair.centrifuge.io");

  return (cached = ApiPromise.create({
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
  }));
}
