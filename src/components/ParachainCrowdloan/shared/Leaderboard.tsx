import React from "react";
import styled from "styled-components";

import { TextSpan } from "./TextSpan";

const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;

const ReferrerList = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ReferrerListItem = styled.li`
  display: flex;
  align-items: baseline;
  margin-bottom: 6px;
`;

const CounterCol = styled.div`
  padding-right: 8px;
  border-bottom: 1px solid #e0e0e0;
`;

const AddressCol = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid #e0e0e0;
`;

const ContributionsCol = styled.div``;

type TopListProps = {
  title: string;
  items: {
    label: string;
    value: string;
  }[];
};

export const TopList: React.FC<TopListProps> = ({ title, items }) => {
  return (
    <div>
      <TitleWrapper>
        <TextSpan
          css={`
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
          `}
        >
          {title}
        </TextSpan>
      </TitleWrapper>
      <ReferrerList>
        {items.map(({ label, value }, i) => (
          <ReferrerListItem key={`${label}-${i}`}>
            <CounterCol>
              <TextSpan
                css={`
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 19.25px;
                `}
              >
                {i + 1}
              </TextSpan>
            </CounterCol>
            <AddressCol>
              <TextSpan
                css={`
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 19.25px;
                `}
              >
                {label}
              </TextSpan>
            </AddressCol>
            <ContributionsCol>
              <TextSpan
                css={`
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 19.25px;
                `}
              >
                {value}
              </TextSpan>
            </ContributionsCol>
          </ReferrerListItem>
        ))}
      </ReferrerList>
    </div>
  );
};
