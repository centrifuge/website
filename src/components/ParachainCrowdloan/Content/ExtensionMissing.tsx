import { Button } from "grommet";
import React from "react";
import styled from "styled-components";
import infoIconUrl from "../../../images/icons/info-circle.svg";

const TextHeading3 = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`;

const TextMessage = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

const TextMessageEmphasized = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
`;

const TitleRow = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const ButtonRow = styled.div`
  margin: 16px 0;
`;

export const ExtensionMissing = () => {
  return (
    <div>
      <TitleRow>
        <img src={infoIconUrl} style={{ marginRight: 8 }} />

        <TextHeading3>Polkadot extension missing</TextHeading3>
      </TitleRow>

      <TextMessage>
        The Polkadot.js browser extension needs to be installed.
        <ButtonRow>
          <Button
            primary
            label="Install extension"
            href="https://github.com/polkadot-js/extension"
          />
        </ButtonRow>
        <TextMessageEmphasized>
          Extension already installed?
        </TextMessageEmphasized>{" "}
        Authorize this page in the extension. Make sure the account is visible
        and the use is allowed on any chain. Refresh the page after changing the
        settings in the extension.
      </TextMessage>
    </div>
  );
};
