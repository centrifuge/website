import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";
import { Box } from "grommet";

import { ExternalLink } from "../Links";
import Icon from "../Icon";

import twitter from "../../images/icons/twitter-3.svg";
import github from "../../images/icons/github-3.svg";
import linkedin from "../../images/icons/linkedin-3.svg";
import medium from "../../images/icons/medium-3.svg";

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
            <Icon src={twitter} alt="Twitter" size={20} />
          </ExternalLink>
        )}
        {socialMediaGitHub && (
          <ExternalLink href={socialMediaGitHub}>
            <Icon src={github} alt="GitHub" size={20} />
          </ExternalLink>
        )}
        {socialMediaMedium && (
          <ExternalLink href={socialMediaMedium}>
            <Icon src={medium} alt="Medium" size={20} />
          </ExternalLink>
        )}
        {socialMediaLinkedIn && (
          <ExternalLink href={socialMediaLinkedIn}>
            <Icon src={linkedin} alt="LinkedIn" size={20} />
          </ExternalLink>
        )}
      </Box>
    )}
  </VIPWrapper>
);

export default VIP;
