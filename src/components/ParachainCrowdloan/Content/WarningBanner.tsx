import React from "react";
import { Box, Text } from "grommet";
import { Alert, CircleAlert, Checkmark } from "grommet-icons";

type WarningBannerProps = {
  title: string;
  type: "warning" | "error" | "success";
};

const icons: Record<string, React.ReactNode> = {
  warning: <CircleAlert size="16" />,
  error: <Alert size="16" />,
  success: <Checkmark size="16" />,
};

const colors: Record<string, React.ReactNode> = {
  warning: "#F5F5F5",
  error: "#FFE8ED",
  success: "#F5F5F5",
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
      <Text
        textAlign="start"
        weight={400}
        size="14px"
        style={{ lineHeight: "19.25px" }}
      >
        {children}
      </Text>
    </Box>
  );
};
