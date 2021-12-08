import { Button } from "grommet";
import React from "react";
import styled from "styled-components";
import { WarningBanner } from "./WarningBanner";

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

const ButtonRow = styled.div`
  margin: 16px 0;
`;

export const WarningExtensionMissing: React.FC = () => {
  return (
    <WarningBanner type="warning" title="Polkadot extension missing">
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
    </WarningBanner>
  );
};
