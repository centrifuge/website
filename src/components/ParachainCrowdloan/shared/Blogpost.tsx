import React from "react";
import styled from "styled-components";

import { CardBlogpost } from "../../CardBlogpost";
import { ExternalLink } from "../../Links";

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`;

const CardImage = styled.img`
  object-fit: fill;
  height: 100%;
  width: 100%;
`;

const TextTitle = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
`;

const TextBody = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

type BlogpostProps = {
  title: string;
  subtitle: string;
  postUrl: string;
  imageUrl: string;
};

export const Blogpost: React.FC<BlogpostProps> = ({
  title,
  subtitle,
  postUrl,
  imageUrl,
}) => {
  return (
    <CardBlogpost
      top={<CardImage src={imageUrl} />}
      bottom={
        <CardBottom>
          <TextTitle>{title}</TextTitle>

          <TextBody>{subtitle}</TextBody>

          <ExternalLink unstyled={0} href={postUrl}>
            <TextBody>Read more...</TextBody>
          </ExternalLink>
        </CardBottom>
      }
    />
  );
};
