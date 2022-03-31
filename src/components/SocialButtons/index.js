import React, { useState } from "react";
import { Box, Text, Image, Anchor, ResponsiveContext } from "grommet";
import { Book } from "grommet-icons";

import github_logo from "../../images/github-mark.png";
import discord_logo from "../../images/discord-mark.svg";
import discourse_logo from "../../images/discourse-mark.png";

const ResponsiveImage = ({ ...rest }) => <Image {...rest} width="100%" />;

const SocialButton = ({ icon, label, description, href, ...rest }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Anchor
      style={{ textDecoration: "none" }}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Box
        {...rest}
        border={hovered ? { color: "brand" } : true}
        round
        direction="row"
        pad={{ vertical: "small", horizontal: "medium" }}
        gap="medium"
        align="center"
        width={rest.width ? rest.width : "280px"}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        {icon && <Box width="25px">{icon}</Box>}
        <Box align="start">
          <Text size="large" weight="bold">
            {label}
          </Text>
          {description && (
            <Text size="small" truncate>
              {description}
            </Text>
          )}
        </Box>
      </Box>
    </Anchor>
  );
};

const GithubButton = ({ width }) => (
  <SocialButton
    label="GitHub"
    description="Latest version and history."
    icon={<ResponsiveImage src={github_logo} />}
    href="https://github.com/centrifuge/"
    width={width}
  />
);

const DiscordButton = ({ width }) => (
  <SocialButton
    label="Discord"
    description="Reach out to us."
    icon={<ResponsiveImage src={discord_logo} />}
    href="/discord"
    width={width}
  />
);

const DiscourseButton = ({ width }) => (
  <SocialButton
    label="Discourse"
    description="Join a conversation."
    icon={<ResponsiveImage src={discourse_logo} />}
    href="https://gov.centrifuge.io/"
    width={width}
  />
);

const DevDocsButton = ({ width }) => (
  <SocialButton
    label="Developer Docs"
    description="Read documentation."
    icon={<Book width="100%" />}
    href="https://docs.centrifuge.io/"
    width={width}
  />
);

const SocialButtonsSection = ({}) => {
  return (
    <ResponsiveContext.Consumer>
      {size => {
        if (size === "large")
          return (
            <Box direction="row" justify="center" gap="medium">
              <GithubButton />
              <DiscordButton />
              <DiscourseButton />
              <DevDocsButton />
            </Box>
          );
        else if (size === "medium")
          return (
            <Box gap="small">
              <Box direction="row" justify="center" gap="medium">
                <GithubButton />
                <DiscordButton />
              </Box>
              <Box direction="row" justify="center" gap="medium">
                <DiscourseButton />
                <DevDocsButton />
              </Box>
            </Box>
          );
        else if (size === "small")
          return (
            <Box gap="small" align="center">
              <GithubButton />
              <DiscordButton />
              <DiscourseButton />
              <DevDocsButton />
            </Box>
          );
      }}
    </ResponsiveContext.Consumer>
  );
};

export default SocialButtonsSection;
