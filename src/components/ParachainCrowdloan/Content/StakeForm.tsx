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
import queryString from "query-string";
import addToMailchimp from "gatsby-plugin-mailchimp";

import polkadotLogo from "../../../images/parachain-crowdloan/polkadot-logo.svg";
import { validEmailReg, validDOTReg, validReferralCode } from "../shared/regex";
import { useWeb3 } from "../../Web3Provider";

import { usePolkadotApi } from "../PolkadotApiProvider";
import { Signer } from "@polkadot/types/types";
import { Alert } from "grommet-icons";
import { InsufficientFundsWarning } from "./InsufficientFundsWarning";
import {
  DOT_PLANCK,
  MAILCHIMP_URL,
  MIN_CONTRIBUTION_PLANCK,
  MIN_CONTRIBUTION_DOT,
  PARACHAIN_ID,
} from "../shared/const";
import styled from "styled-components";
import BigNumber from "bignumber.js";
import { TermsAndConditionsModal } from "./TermsAndConditionsModal";
import { ContributionOutcome } from "./Content";

const formatBigNumber = (bn?: BigNumber): string =>
  bn ? bn.div(DOT_PLANCK).toString() : "";

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

const UnexpectedError: React.FC<{ errorMessage: string }> = ({
  errorMessage,
}) => {
  return (
    <Box background={{ color: "#FFE8ED" }} style={{ padding: "16px" }}>
      <Text weight={600}>
        <Alert size="small" /> Unexpected error: {errorMessage}
      </Text>
      <Text>Try again.</Text>
    </Box>
  );
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

type StakeFormProps = {
  setContributionOutcome: (outcome: ContributionOutcome) => void;
};

export const StakeForm: React.FC<StakeFormProps> = ({
  setContributionOutcome,
}) => {
  const { selectedAccount, isWeb3Injected, web3FromAddress } = useWeb3();
  const { api } = usePolkadotApi();

  const [checked, setChecked] = useState(false);
  const [error, setError] = useState<string>();

  const [emailAddress, setEmailAddress] = useState("");
  const [freeBalance, setFreeBalance] = useState<BigNumber>();
  const [injector, setInjector] = useState<{ signer: Signer }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dotAmount, setDotAmount] = useState<string>(`${MIN_CONTRIBUTION_DOT}`);
  const [gasFee, setGasFee] = useState<BigNumber>();
  const [minimumBalance, setMinimumBalance] = useState<BigNumber>();
  const [showConditionsModal, setShowConditionsModal] = useState<boolean>(
    false
  );

  const referralCodeParam = queryString.parse(location.search).refer;

  const [referralCode, setReferralCode] = useState(referralCodeParam || "");

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

      await transactionToSend.signAndSend(
        selectedAccount.address,
        { signer: injector.signer },
        async (status) => {
          const error = status.events.filter(({ event }) =>
            api.events.system.ExtrinsicFailed.is(event)
          );

          if (status.status.isFinalized) {
            if (emailAddress) {
              await addToMailchimp(emailAddress, {}, MAILCHIMP_URL);
            }
          }

          if (error.length) {
            setError("error occurred");
            setIsSubmitting(false);
          }
        }
      );

      setContributionOutcome({
        hash: transactionToSend.hash.toHex(),
        error: "",
        amount: dotAmount,
      });

      // setHash(transactionToSend.hash.toHex());
    } catch (err) {
      const errorMsg = (err as Error)?.message || `${err}`;
      setIsSubmitting(false);
      setError(errorMsg);
      setContributionOutcome({
        hash: "",
        error: errorMsg,
        amount: "",
      });
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
        setMinimumBalance(gasFeeBN.plus(MIN_CONTRIBUTION_PLANCK));
      }
    })();
  }, [api, referralCode, selectedAccount?.address]);

  const validateDotAmount = (value: string) => {
    if (
      !value ||
      !validDOTReg.test(value) ||
      parseFloat(value) < MIN_CONTRIBUTION_DOT
    ) {
      return { status: "error", message: "Enter a valid amount of DOT" };
    }

    if (parseFloat(value) > (freeBalance?.div(DOT_PLANCK).toNumber() || 0)) {
      return { status: "error", message: "Insufficient balance" };
    }
  };

  const isFormEnabled = useMemo(
    () =>
      !!(
        api &&
        selectedAccount?.address &&
        freeBalance &&
        minimumBalance &&
        freeBalance.gte(minimumBalance)
      ),
    [api, selectedAccount?.address, freeBalance, minimumBalance]
  );

  if (!isWeb3Injected || !api) {
    return (
      <Box>
        <Box alignSelf="center">
          <Spinner size="medium" />
        </Box>
      </Box>
    );
  }

  return (
    <Box gap="medium" style={{ margin: 0 }}>
      <Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text size="xxlarge" weight={900}>
            Contribute
          </Text>
        </Box>
      </Box>
      {error && <UnexpectedError errorMessage={error} />}
      {isWeb3Injected && (
        <Box gap="medium">
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
                  placeholder={MIN_CONTRIBUTION_DOT}
                  reverse
                  id="polkadot"
                  name="polkadot"
                  onChange={(event) => {
                    setError("");
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
                  {freeBalance ? (
                    formatBigNumber(freeBalance)
                  ) : (
                    <CustomSpinner />
                  )}
                </Grid>
                <UnderlineTextButton
                  disabled={
                    !isFormEnabled || !freeBalance || freeBalance.isZero()
                  }
                  onClick={() => {
                    setDotAmount(formatBigNumber(freeBalance));
                  }}
                >
                  Set Max
                </UnderlineTextButton>
              </Box>

              <Box>
                {freeBalance &&
                minimumBalance &&
                freeBalance.lt(minimumBalance) ? (
                  <InsufficientFundsWarning gasFee={formatBigNumber(gasFee)} />
                ) : null}
              </Box>

              <FormField
                label="Referral code (optional)"
                name="referralCode"
                htmlFor="referralCode"
                validate={(value) => validateReferralCode(value)}
                margin={{ bottom: "32px" }}
              >
                <TextInput
                  disabled={!isFormEnabled}
                  id="referralCode"
                  name="referralCode"
                  onChange={(event) => {
                    setReferralCode(event.target.value);
                  }}
                  placeholder="ExAmpl41Ref3rrAl"
                  value={referralCode ? referralCode.toString() : ""}
                />
              </FormField>
              <FormField
                label="Stay up to date with the auction (optional)"
                name="emailAddress"
                htmlFor="emailAddress"
                validate={(value) => validateEmailAddress(value)}
                margin={{ bottom: "32px" }}
              >
                <TextInput
                  disabled={!isFormEnabled}
                  id="emailAddress"
                  name="emailAddress"
                  onChange={(event) => {
                    setEmailAddress(event.target.value);
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
                  disabled={!isFormEnabled || !checked}
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
        </Box>
      )}
      <TermsAndConditionsModal
        open={showConditionsModal}
        setOpen={setShowConditionsModal}
      />
    </Box>
  );
};
