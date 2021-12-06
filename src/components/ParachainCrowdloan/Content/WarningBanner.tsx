import React from "react";
import { Box, Text } from "grommet";
import { Alert, CircleAlert } from "grommet-icons";

type WarningBannerProps = {
  title: string;
  type: "warning" | "error";
};

const icons: Record<string, React.ReactNode> = {
  warning: <CircleAlert size="small" />,
  error: <Alert size="small" />,
};

const colors: Record<string, React.ReactNode> = {
  warning: "#FFF0D6",
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
      <Text weight={600}>
        {icons[type] || null} {title}
      </Text>
      <Text textAlign="start">{children}</Text>
    </Box>
  );
};
