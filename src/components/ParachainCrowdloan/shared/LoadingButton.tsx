import { Box, Button, ButtonExtendedProps, Spinner } from "grommet";
import React from "react";

interface LoadingButtonProps extends ButtonExtendedProps {
  loadingLabel: string;
  isLoading: boolean;
}
export const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  loadingLabel,
  label,
  ...otherProps
}) => (
  <Button
    {...otherProps}
    color={isLoading ? "black" : "brand"}
    label={
      <Box direction="row" justify="center" gap="8px">
        {isLoading && <Spinner color="white" />}{" "}
        {isLoading ? loadingLabel : label}
      </Box>
    }
  />
);
