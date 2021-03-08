import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Box, Image, Text, Button, Heading, ResponsiveContext } from "grommet";

import { Section, Row, Col } from "../MDXLayout/shortcodes";
import theme from "../Theme/theme";
import star from "../../images/home/star.svg";
import tinlake from "../../images/home/tinlake_logo_inverse.svg";
import tinlake_bg from "../../images/home/tinlake_bg.svg";
import tinlake_bg_vertical from "../../images/home/tinlake_bg_vertical.svg";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const StyledButton = styled(Button)`
  z-index: 1;
  color: ${theme.global.colors["brand-dark"]};

  :hover {
    background-color: black;
    border-color: black;
    color: white;
  }
`;

const RelativeSection = styled(Section)`
  position: relative;
`;

const Star = ({ top, left }) => (
  <Image
    src={star}
    style={{
      position: "absolute",
      top,
      left
    }}
  />
);

Star.defaultProps = {
  top: "0px",
  left: "0px"
};

const TinlakeSection = ({ heading, children }) => {
  const [stars, setStars] = useState([]);
  const containerElem = useRef(null);

  useEffect(() => {
    const height = containerElem.current.clientHeight;
    const width = containerElem.current.clientWidth;

    let i = 0;
    let stars = [];
    for (; i < 0; i++) {
      stars.push({
        top: getRandomInt(100, height - 100),
        left: getRandomInt(100, width - 100)
      });
    }
    setStars(stars);
  }, []);

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          background={{
            dark: true,
            image: `url("${
              size === "small" ? tinlake_bg_vertical : tinlake_bg
            }")`
          }}
        >
          <RelativeSection>
            <Box ref={containerElem}>
              {stars.map((dims, index) => (
                <Star {...dims} key={index} />
              ))}
              {/*<Row mb="medium">*/}
              {/*  <Col span={6} margin={{ bottom: "large" }}>*/}
              {/*    <Image src={tinlake} alignSelf="start" />*/}
              {/*  </Col>*/}
              {/*  <Col span={6} margin={{ bottom: "large" }}>*/}
              {/*    <Heading level={1} margin="0">*/}
              {/*      {heading}*/}
              {/*    </Heading>*/}
              {/*  </Col>*/}
              {/*</Row>*/}
              <Box>{children}</Box>
              {/*<Box gap="small" margin={{ top: "large" }}>*/}
              {/*  <Text alignSelf="center">Start using it now</Text>*/}
              {/*  <StyledButton*/}
              {/*    primary*/}
              {/*    alignSelf="center"*/}
              {/*    label="Open Tinlake"*/}
              {/*    href="https://tinlake.centrifuge.io/"*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer noopener"*/}
              {/*  />*/}
              {/*</Box>*/}
            </Box>
          </RelativeSection>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default TinlakeSection;
