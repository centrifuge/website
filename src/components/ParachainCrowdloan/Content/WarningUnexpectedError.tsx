import React from "react";
import { Text } from "grommet";
import { WarningBanner } from "./WarningBanner";

type WarningUnexpectedErrorProps = {
  errorMessage: string;
};
export const WarningUnexpectedError: React.FC<WarningUnexpectedErrorProps> = ({
  errorMessage,
}) => {
  return (
    <WarningBanner type="error" title={`Unexpected error: ${errorMessage}`}>
      <Text>Try again.</Text>
    </WarningBanner>
  );
};
