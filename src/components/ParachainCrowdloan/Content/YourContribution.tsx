import { encodeAddress } from "@polkadot/util-crypto";
import BigNumber from "bignumber.js";
import { Spinner } from "grommet";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useWeb3 } from "../../Web3Provider";
import { PARACHAIN_NAME } from "../shared/const";
import { formatCFG, formatDOT } from "../shared/format";
import { mediaGreaterThan } from "../shared/media";

import { TextSpan } from "../shared/TextSpan";

const YourContributionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #f8f8f8;
  padding: 24px;
  min-height: 473px;

  text-align: center;

  ${mediaGreaterThan("small")} {
    text-align: left;
  }
`;

const TextHeading2 = styled.span`
  font-size: 20px;
  line-height: 25px;
  font-weight: 600;
`;

const TextLabel = styled.span`
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;

  color: #757575;
`;

const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 1px;
  background: #e0e0e0;
`;

const CustomSpinner = styled(Spinner)`
  height: 10px;
  width: 10px;
  display: inline-block;
  padding: 6px;
  margin-right: 8px;
`;

type StatType = {
  value?: string;
  label: string;
};
const Stat: React.FC<StatType> = ({ value, label }) => (
  <StatsItem>
    <TextHeading2>
      {value ? formatCFG(value, 2) : <CustomSpinner color="brand" />} CFG
    </TextHeading2>
    <TextLabel>{label}</TextLabel>
  </StatsItem>
);

type RewardDataResponse = {
  contributionAmount?: string;
  earlyBirdBonus?: string;
  firstCrowdloanBonus?: string;
  numberOfReferrals?: string;
  referralBonus?: string;
};

export const YourContribution = () => {
  const { selectedAccount } = useWeb3();
  const [rewardsData, setRewardsData] = useState<RewardDataResponse>({});
  const [totalRewards, setTotalRewards] = useState<string>();

  useEffect(() => {
    (async () => {
      if (!selectedAccount?.address) {
        return;
      }
      const response = await fetch('/.netlify/functions/getRewardData', {
        method: 'POST',
        body: JSON.stringify({
          address: encodeAddress(selectedAccount.address, 2),
          parachain: PARACHAIN_NAME,
        }),
      });
  
      const json = await response.json();

      setRewardsData(json);

      setTotalRewards(
        new BigNumber(json.earlyBirdBonus)
          .plus(json.firstCrowdloanBonus)
          .plus(json.referralBonus)
          .toFixed(0)
      );
    })()
  }, [selectedAccount?.address]);

  return (
    <YourContributionStyled>
      <div>
        <TextHeading2>Your contribution</TextHeading2>
      </div>
      {selectedAccount?.address ? (
        <>
          <StatsItem>
            <TextSpan
              css={`
                font-size: 20px;
                line-height: 32px;
                font-weight: 600;
                color: ${(props: any) => props.theme.global.colors.brand};
              `}
            >
              {rewardsData.contributionAmount ? (
                formatDOT(rewardsData.contributionAmount)
              ) : (
                <CustomSpinner color="brand" />
              )}{" "}
              DOT
            </TextSpan>
            <TextLabel>Staked amount</TextLabel>
          </StatsItem>

          <Divider />

          <Stat
            value={rewardsData.firstCrowdloanBonus}
            label="Staking reward"
          />
          <Stat value={rewardsData.earlyBirdBonus} label="Early bird reward" />
          <Stat value={rewardsData.referralBonus} label="Referral reward" />
          <Stat value={totalRewards} label="Total rewards" />
        </>
      ) : (
        <div>No wallet connected</div>
      )}
    </YourContributionStyled>
  );
};
