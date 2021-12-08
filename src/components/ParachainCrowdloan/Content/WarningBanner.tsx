import React from "react";
import { Box, Text } from "grommet";
import { Alert, CircleAlert } from "grommet-icons";

type WarningBannerProps = {
  title: string;
  type: "warning" | "error";
};

const icons: Record<string, React.ReactNode> = {
  warning: <CircleAlert size="16" />,
  error: <Alert size="16" />,
};

const colors: Record<string, React.ReactNode> = {
  warning: "#F5F5F5",
  error: "#FFE8ED",
};

export const WarningBanner: React.FC<WarningBannerProps> = ({
  title,
  type,
  children,
}) => {
  return (
    <Box
      background={{ color: colors[type] || "white" }}
      style={{
        padding: "24px",
        borderRadius: "6px",
      }}
      gap="small"
    >
      <Box gap="8px" direction="row" align="center">
        {icons[type] || null}
        <Text weight={600}>{title}</Text>
      </Box>
      <Text textAlign="start">{children}</Text>
    </Box>
  );
};
