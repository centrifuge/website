import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";

import { TwitterSquare } from "styled-icons/fa-brands/TwitterSquare";
import { Medium } from "styled-icons/fa-brands/Medium";
import { Linkedin } from "styled-icons/fa-brands/Linkedin";
import { GithubSquare } from "styled-icons/fa-brands/GithubSquare";

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
      <Box direction="row" gap="small" style={{ color: "black" }}>
        {socialMediaTwitter && (
          <ExternalLink href={socialMediaTwitter}>
            <TwitterSquare color="rgba(0, 0, 0, 0.5)" size={20} />
          </ExternalLink>
        )}
        {socialMediaGitHub && (
          <ExternalLink href={socialMediaGitHub}>
            <GithubSquare color="rgba(0, 0, 0, 0.5)" size={20} />
          </ExternalLink>
        )}
        {socialMediaMedium && (
          <ExternalLink href={socialMediaMedium}>
            {/* Need to do to counteract the bigger icon margin */}
            <Medium color="rgba(0, 0, 0, 0.5)" size={20} />
          </ExternalLink>
        )}
        {socialMediaLinkedIn && (
          <ExternalLink href={socialMediaLinkedIn}>
            <Linkedin color="rgba(0, 0, 0, 0.5)" size={20} />
          </ExternalLink>
        )}
      </Box>
    )}
  </VIPWrapper>
);

export default VIP;
