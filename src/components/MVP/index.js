import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";
import { Twitter, Linkedin } from "grommet-icons";

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

const MVPWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MVP = ({
  headshot,
  name,
  title,
  socialMediaTwitter,
  socialMediaLinkedIn
}) => (
  <MVPWrapper>
    <Image
      imgStyle={{ borderRadius: 128 / 2 }}
      placeholderStyle={{ borderRadius: 128 / 2 }}
      fixed={headshot.fixed}
      alt={name}
    />
    <Name>{name}</Name>
    <Title>{title}</Title>
    {(socialMediaTwitter || socialMediaLinkedIn) && (
      <Box direction="row" gap="small">
        {socialMediaTwitter && (
          <ExternalLink href={socialMediaTwitter}>
            <Twitter />
          </ExternalLink>
        )}
        {socialMediaLinkedIn && (
          <ExternalLink href={socialMediaLinkedIn}>
            <Linkedin />
          </ExternalLink>
        )}
      </Box>
    )}
  </MVPWrapper>
);

export default MVP;
