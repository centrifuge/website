import React from "react";
import styled from "styled-components";
import { Box, Image as GrommetImage } from "grommet";

const Wrapper = styled(Box)`
  position: relative;
  height: 356px;
  display: flex;
  place-content: center;
`;

const Image = styled(GrommetImage)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1080px;
`;

const FullWidthImage = ({ src, alt, ...rest }) => (
  <Wrapper {...rest} margin={{ top: "xxxlarge", bottom: "xxxlarge" }}>
    <Image alt={alt} src={src} />
  </Wrapper>
);

FullWidthImage.defaultProps = {
  alt: ""
};

export default FullWidthImage;
