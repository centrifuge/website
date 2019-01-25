import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";
import { Twitter, Linkedin, Medium, Github } from "grommet-icons";

import { ExternalLink } from "../Links";
import { Box } from "grommet";

const Name = styled.p`
  font-weight: var(--fw-medium);
  font-size: 16px;
  margin-bottom: 4px;
`;

const Title = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

const VIPWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VIP = ({
  headshot,
  name,
  title,
  socialMediaTwitter,
  socialMediaLinkedIn,
  socialMediaGitHub,
  socialMediaMedium
}) => (
  <VIPWrapper>
    <Image
      imgStyle={{ borderRadius: 128 / 2 }}
      placeholderStyle={{ borderRadius: 128 / 2 }}
      fixed={headshot.fixed}
      alt={name}
    />
    <Name>{name}</Name>
    {title && <Title>{title}</Title>}
    {(socialMediaTwitter ||
      socialMediaLinkedIn ||
      socialMediaGitHub ||
      socialMediaMedium) && (
      <Box direction="row" gap="small">
        {socialMediaTwitter && (
          <ExternalLink href={socialMediaTwitter}>
            <Twitter size="small" />
          </ExternalLink>
        )}
        {socialMediaGitHub && (
          <ExternalLink href={socialMediaGitHub}>
            <Github size="small" />
          </ExternalLink>
        )}
        {socialMediaMedium && (
          <ExternalLink href={socialMediaMedium}>
            <Medium size="small" />
          </ExternalLink>
        )}
        {socialMediaLinkedIn && (
          <ExternalLink href={socialMediaLinkedIn}>
            <Linkedin size="small" />
          </ExternalLink>
        )}
      </Box>
    )}
  </VIPWrapper>
);

export default VIP;
