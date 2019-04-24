import React from "react";
import styled from "styled-components";
import { Box, ResponsiveContext, Grid } from "grommet";

import { List } from "../List";
import Container from "../Container";
import { BlockFirstAddress, BlockHello, BlockCopyRight, BlockSecondAddress, BlockExternalLink, BlockInternalLink } from "./footerItem";
import Column from "../Column";

const FooterContent = styled(List)`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    > li {
      margin-bottom: 48px;
    }
    margin-bottom: 70px;
  }

  @media only screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr repeat(2, max-content);
    grid-gap: 48px;
  }

  @media only screen and (min-width: 1201px) {
    grid-template-columns: max-content 1fr repeat(2, max-content);
    grid-gap: 64px;
  }
`;

const TwoColumnBox = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Footer = () => (
  <Box background="black" as="footer" pad={{ top: "xlarge", bottom: "large" }}>
    <Container>
      
      <ResponsiveContext.Consumer>
        {size =>
          size === "small" 
          ? (
            <FooterContent>
              <BlockFirstAddress/>
              <BlockSecondAddress/>
              <br/>
              <BlockHello/>
              <br/>
              <TwoColumnBox>
                <BlockExternalLink/>
                <BlockInternalLink/>
              </TwoColumnBox>
              <br/>
              <BlockCopyRight/>
            </FooterContent>
          )
          : size === "medium"
          ? (
            <FooterContent>
              <Box>
                <BlockFirstAddress/>
                <br/><br/>
                <BlockSecondAddress/>
                <br/><br/>
                <BlockHello/>
                <br/>
                <BlockCopyRight/>
              </Box>
              <BlockExternalLink/>
              <BlockInternalLink/>
            </FooterContent>
          )
          : (
            <FooterContent>
              <Box>
                <BlockFirstAddress/>
                <br/>
                <BlockHello/>
                <br/>
                <BlockCopyRight/>
              </Box>
              <BlockSecondAddress/>
              <BlockExternalLink/>
              <BlockInternalLink/>
            </FooterContent>            
          )

        }          
      </ResponsiveContext.Consumer>

    </Container>
  </Box>
);

export default Footer;
