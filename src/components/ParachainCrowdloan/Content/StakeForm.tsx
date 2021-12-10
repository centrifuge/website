import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Grid,
  Image,
  Spinner,
  Text,
  TextInput,
} from "grommet";
import React, { useEffect, useMemo, useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

import polkadotLogo from "../../../images/parachain-crowdloan/polkadot-logo.svg";
import { validEmailReg, validDOTReg, validReferralCode } from "../shared/regex";
import { useWeb3 } from "../../Web3Provider";

import { usePolkadotApi } from "../shared/context/PolkadotApiProvider";
import { useStakeFormContext } from "../shared/context/StakeFormContext";

import { Signer } from "@polkadot/types/types";
import {
  DOT_PLANCK,
  MAILCHIMP_URL,
  MIN_CONTRIBUTION_DOT,
  PARACHAIN_ID,
  PARACHAIN_NAME,
  MIN_EXISTENTIAL_DEPOSIT_PLANCK,
} from "../shared/const";
import styled from "styled-components";
import BigNumber from "bignumber.js";
import { TermsAndConditionsModal } from "./TermsAndConditionsModal";
import { WarningUnexpectedError } from "./WarningUnexpectedError";
import { formatDOT } from "../shared/format";

const formatBalance = (bn?: BigNumber): string =>
  bn ? (bn.isZero() ? "0.00" : formatDOT(bn, 12)) : "";

const validateReferralCode = (value: string) => {
  if (value && (value.length !== 20 || !validReferralCode.test(value))) {
    return { status: "error", message: "Enter a valid referral code" };
  }
};

const validateEmailAddress = (value: string) => {
  if (value && !validEmailReg.test(value)) {
    return { status: "error", message: "Enter a valid email address" };
  }
};

const isExistingReferralCode = async (value: string) => {
  const response = await fetch("/.netlify/functions/isValidReferralCode", {
    method: "POST",
    body: JSON.stringify({
      referralCode: value,
      parachain: PARACHAIN_NAME,
    }),
  });

  const json = await response.json();

  return json.valid;
};

const CustomSpinner = styled(Spinner)`
  height: 5px;
  width: 5px;
  padding: 7px;
  margin-top: 3px;
  margin-left: 2px;
`;

const UnderlineTextButton = styled.button`
  appearance: none;
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  text-decoration: underline;

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;

  :disabled {
    cursor: not-allowed;
  }
`;

const FormWrapperBox = styled(Box)`
  & input::placeholder {
    color: lightgrey !important;
  }
`;

export const StakeForm: React.FC = () => {
  const { selectedAccount, isWeb3Injected, web3FromAddress } = useWeb3();
  const { api } = usePolkadotApi();

  const {
    dotAmount,
    setDotAmount,
    emailAddress,
    setEmailAddress,
    referralCode,
    setReferralCode,
    errorMessage,
    setErrorMessage,
    setContribHash,
    warning,
    setWarning,
    gasFee,
    setGasFee,
  } = useStakeFormContext();

  const [checked, setChecked] = useState(false);

  const [freeBalance, setFreeBalance] = useState<BigNumber>();
  const [injector, setInjector] = useState<{ signer: Signer }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConditionsModal, setShowConditionsModal] = useState<boolean>(
    false
  );

  useEffect(() => {
    (async () => {
      if (selectedAccount?.address && api) {
        setFreeBalance(undefined); // set balance as loading

        const web3Injector = await web3FromAddress(selectedAccount?.address);

        const balances = await api.query.system.account(
          selectedAccount.address
        );

        setInjector(web3Injector);

        setFreeBalance(new BigNumber(balances.data.free.toString()));
      }
    })();
  }, [api, selectedAccount]);

  // set the correct warning to show
  useEffect(() => {
    const amtBn = new BigNumber(dotAmount || 0).times(DOT_PLANCK);
    if (!freeBalance || !gasFee || amtBn.isNaN()) {
      setWarning("");
      return;
    }
    const totalContrib = amtBn.plus(gasFee);
    const remainingBalance = freeBalance.minus(totalContrib);

    if (remainingBalance.lt(0)) {
      setWarning("insufficientFunds");
      return;
    } else if (remainingBalance.lt(MIN_EXISTENTIAL_DEPOSIT_PLANCK)) {
      setWarning("existentialDeposit");
      return;
    }
    setWarning("");
  }, [dotAmount, gasFee, freeBalance]);

  const contribute = async () => {
    if (!api) {
      throw new Error("Polkadot API was not loaded");
    }
    if (!selectedAccount) {
      throw new Error("No selected account");
    }

    if (!injector) {
      throw new Error("No injector");
    }

    setIsSubmitting(true);
    setErrorMessage("");

    // check if referral code exists in the database
    if (referralCode && !(await isExistingReferralCode(referralCode))) {
      setErrorMessage(`Referral code '${referralCode}' not found.`);
      setIsSubmitting(false);
      return;
    }

    const contributeTransaction = api.tx.crowdloan.contribute(
      PARACHAIN_ID,
      parseFloat(dotAmount) * DOT_PLANCK,
      null
    );

    try {
      const transactionToSend = referralCode
        ? api.tx.utility.batchAll([
            contributeTransaction,
            api.tx.crowdloan.addMemo(
              PARACHAIN_ID,
              api.createType("Bytes", referralCode)
            ),
          ])
        : contributeTransaction;

      await new Promise((resolve, reject) => {
        transactionToSend
          .signAndSend(
            selectedAccount.address,
            { signer: injector.signer },
            async ({ status, events }) => {
              // make sure status is finalized
              if (!status.isFinalized) return;

              // get failures if any
              const errors = events.filter(({ event }) =>
                api.events.system.ExtrinsicFailed.is(event)
              );

              // if there are failures, reject the promise
              if (errors.length) {
                const errorMsgs = errors.map(
                  ({
                    event: {
                      data: [error],
                    },
                  }) => {
                    if ((error as any).isModule) {
                      const decoded = api.registry.findMetaError(
                        (error as any).asModule
                      );
                      const { docs, method, section } = decoded;

                      return `${section}.${method}: ${docs.join(" ")}`;
                    } else {
                      return error.toString();
                    }
                  }
                );

                reject(new Error(errorMsgs.join("\n")));
                return;
              }

              // check if there was success, resolve the promise
              const success = events.filter(({ event }) =>
                api.events.system.ExtrinsicSuccess.is(event)
              );

              if (success.length) {
                resolve("ok");
              }
            }
          )
          .catch(reject);
      });

      // transaction was successful
      setContribHash(transactionToSend.hash.toHex());
      setErrorMessage("");

      if (emailAddress) {
        await addToMailchimp(emailAddress, {}, MAILCHIMP_URL);
      }

      setIsSubmitting(false);
    } catch (err) {
      // transaction failed

      const errorMsg = (err as Error)?.message || `${err}`;
      setIsSubmitting(false);
      setErrorMessage(errorMsg);
      setContribHash("");
    }
  };

  // GAS FEE
  useEffect(() => {
    (async () => {
      if (api && selectedAccount) {
        const contributeTransaction = api.tx.crowdloan.contribute(
          PARACHAIN_ID,
          parseFloat(dotAmount) * DOT_PLANCK,
          null
        );

        const memo = api.createType("Bytes", "123456578901234567890");

        const memoTransaction = api.tx.crowdloan.addMemo(PARACHAIN_ID, memo);

        const gasFeeResponse = await api.tx.utility
          .batchAll([contributeTransaction, memoTransaction])
          .paymentInfo(selectedAccount?.address);

        const gasFeeBN = new BigNumber(gasFeeResponse.partialFee.toString());
        setGasFee(gasFeeBN);
      }
    })();
  }, [api, referralCode, selectedAccount?.address]);

  const validateDotAmount = (value: string) => {
    if (
      !value ||
      !validDOTReg.test(value) ||
      parseFloat(value) < MIN_CONTRIBUTION_DOT
    ) {
      return {
        status: "error",
        message: `Enter a valid amount of DOT (minimum ${MIN_CONTRIBUTION_DOT})`,
      };
    }

    if (parseFloat(value) > (freeBalance?.div(DOT_PLANCK).toNumber() || 0)) {
      return { status: "error", message: "Insufficient balance" };
    }
  };

  const isFormEnabled = useMemo(
    () => !!(api && selectedAccount?.address && freeBalance),
    [api, selectedAccount?.address, freeBalance]
  );

  const isSubmitEnabled = isFormEnabled && checked && !warning;

  if (!isWeb3Injected || !api) {
    return (
      <Box>
        <Box alignSelf="center" margin={{ top: "48px", bottom: "16px" }}>
          <Spinner size="medium" />
        </Box>
        <Box alignSelf="center">Connecting wallet...</Box>
      </Box>
    );
  }

  return (
    <Box gap="medium" style={{ margin: 0 }}>
      {errorMessage && <WarningUnexpectedError errorMessage={errorMessage} />}

      {isWeb3Injected && (
        <FormWrapperBox gap="medium">
          <Form onSubmit={() => contribute()} validate="submit">
            <Box>
              <FormField
                name="polkadot"
                htmlFor="polkadot"
                label={`Amount (minimum of ${MIN_CONTRIBUTION_DOT} DOT)`}
                validate={(value) => validateDotAmount(value)}
              >
                <TextInput
                  disabled={!isFormEnabled}
                  icon={
                    <>
                      <Image src={polkadotLogo} />
                      <span style={{ paddingLeft: "8px" }}>DOT</span>
                    </>
                  }
                  placeholder={MIN_CONTRIBUTION_DOT.toPrecision(3)}
                  reverse
                  id="polkadot"
                  name="polkadot"
                  onChange={(event) => {
                    setErrorMessage("");
                    setDotAmount(event.target.value);
                  }}
                  value={dotAmount}
                />
              </FormField>
              <Box
                direction="row"
                justify="between"
                pad="0 12px"
                margin={{ bottom: "32px" }}
              >
                <Grid columns={["102px", "auto"]}>
                  <Text>Your balance:</Text>
                  {freeBalance ? formatBalance(freeBalance) : <CustomSpinner />}
                </Grid>
                <UnderlineTextButton
                  type="button"
                  disabled={
                    !isFormEnabled || !freeBalance || freeBalance.isZero()
                  }
                  onClick={() => {
                    if (!gasFee || !freeBalance) {
                      return;
                    }
                    const maxContrib = freeBalance
                      .minus(gasFee)
                      .minus(MIN_EXISTENTIAL_DEPOSIT_PLANCK);

                    setDotAmount(formatBalance(maxContrib));
                  }}
                >
                  Set Max
                </UnderlineTextButton>
              </Box>

              <FormField
                label="Referral code (optional)"
                name="referralCode"
                htmlFor="referralCode"
                validate={(value) => validateReferralCode(value.trim())}
                margin={{ bottom: "32px" }}
              >
                <TextInput
                  disabled={!isFormEnabled}
                  id="referralCode"
                  name="referralCode"
                  onChange={(event) => {
                    setReferralCode(event.target.value.trim());
                  }}
                  placeholder="ExAmpl41Ref3rrAl"
                  value={referralCode ? referralCode.toString() : ""}
                />
              </FormField>
              <FormField
                label="Stay up to date with the crowdloan (optional)"
                name="emailAddress"
                htmlFor="emailAddress"
                validate={(value) => validateEmailAddress(value.trim())}
                margin={{ bottom: "32px" }}
              >
                <TextInput
                  disabled={!isFormEnabled}
                  id="emailAddress"
                  name="emailAddress"
                  onChange={(event) => {
                    setEmailAddress(event.target.value.trim());
                  }}
                  placeholder="me@example.com"
                  value={emailAddress}
                />
              </FormField>
            </Box>
            <Box style={{ paddingTop: "24px", paddingLeft: "12px" }}>
              <CheckBox
                disabled={!isFormEnabled}
                checked={checked}
                label={
                  <span>
                    I agree to the{" "}
                    <UnderlineTextButton
                      type="button"
                      onClick={() => {
                        setShowConditionsModal(true);
                      }}
                    >
                      terms and conditions
                    </UnderlineTextButton>
                  </span>
                }
                onChange={(event) => {
                  setChecked(event.target.checked);
                }}
              />
            </Box>
            <Box
              style={{
                flexDirection: "row",
                paddingTop: "24px",
                paddingBottom: "32px",
              }}
            >
              {isSubmitting ? (
                <>
                  <Spinner />
                  <Text style={{ paddingLeft: "12px" }}>
                    Staking in progress...
                  </Text>
                </>
              ) : (
                <Button
                  disabled={!isSubmitEnabled}
                  primary
                  color="brand"
                  alignSelf="start"
                  label="Stake contribution"
                  type="submit"
                  style={{ width: "100%" }}
                />
              )}
            </Box>
          </Form>
        </FormWrapperBox>
      )}
      <TermsAndConditionsModal
        open={showConditionsModal}
        setOpen={setShowConditionsModal}
      />
    </Box>
  );
};
