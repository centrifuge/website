import React, { useState } from "react";
import styled from "styled-components";
import { Box, Button, ResponsiveContext, Image, Text } from "grommet";

import Grid from "components/Grid";
import Column from "components/Column";

import Slider from "./Slider";

import graph_how_it_works_desktop_detailed_img from "images/deep-tier-finance/graph_how_it_works_desktop_detailed.svg";
import graph_how_it_works_mobile_detailed_img from "images/deep-tier-finance/graph_how_it_works_mobile_detailed.svg";
import graph_how_it_works_desktop from "images/deep-tier-finance/graph_how_it_works_desktop.svg";
import graph_how_it_works_mobile from "images/deep-tier-finance/graph_how_it_works_mobile.svg";

const MoreDetails = ({ data }) => {
  const [is_more_details_open, set_is_more_details_open] = useState(false);

  const onMoreDetailsClick = () => {
    set_is_more_details_open(!is_more_details_open);
  };

  return (
    <>
      <Box align="center" margin={{ vertical: "xlarge" }}>
        <Button
          onClick={onMoreDetailsClick}
          type="button"
          primary
          alignSelf="center"
          style={{
            fontSize: 16,
            paddingTop: 8,
            paddingLeft: 52,
            paddingRight: 52,
          }}
          label={is_more_details_open ? "Less Details" : "More Details"}
        />

        <Collapse isOpen={is_more_details_open}>
          <Box margin={{ top: "medium" }}>
            <ResponsiveContext.Consumer>
              {(size) =>
                size === "small" ? (
                  <Slider
                    data={data}
                    image={graph_how_it_works_desktop_detailed_img}
                  />
                ) : size === "medium" ? (
                  <VerticalSteps>
                    <div>
                      {data.aboveSteps.map((step, i) => (
                        <div key={`HowDoesDTFWork-aboveSteps-${i}`}>{step}</div>
                      ))}
                    </div>
                    <img
                      src={graph_how_it_works_mobile_detailed_img}
                      alt="graph_how_it_works_mobile_detailed_img"
                      style={{ width: "60%" }}
                    />
                    <div>
                      {data.belowSteps.map((step, i) => (
                        <div key={`HowDoesDTFWork-aboveSteps-${i}`}>{step}</div>
                      ))}
                    </div>
                  </VerticalSteps>
                ) : (
                  <>
                    <Grid noMargin>
                      {data.aboveSteps.map((step, i) => (
                        <Step
                          span={{ medium: 3, large: 3 }}
                          key={`HowDoesDTFWork-aboveSteps-${i}`}
                        >
                          {step}
                        </Step>
                      ))}
                    </Grid>

                    <img
                      src={graph_how_it_works_desktop_detailed_img}
                      alt="graph_how_it_works_mobile_detailed_img"
                      style={{ width: "100%" }}
                    />

                    <Grid noMargin>
                      {data.belowSteps.map((step, i) => (
                        <Step
                          span={{ medium: 3, large: 3 }}
                          key={`HowDoesDTFWork-aboveSteps-${i}`}
                        >
                          {step}
                        </Step>
                      ))}
                    </Grid>
                  </>
                )
              }
            </ResponsiveContext.Consumer>
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

const ResponsiveDetailsImage = ({ data }) => (
  <ResponsiveContext.Consumer>
    {(size) =>
      size === "small" ? (
        <Box style={{ position: "relative" }}>
          <FloatingDescription>{data.aboveImage}</FloatingDescription>
          <Image
            src={graph_how_it_works_mobile}
            style={{ margin: "0 auto", width: "70%" }}
          />
          <FloatingDescription style={{ right: 0 }}>
            {data.belowImage}
          </FloatingDescription>
        </Box>
      ) : (
        <>
          <Text alignSelf="center">{data.aboveImage}</Text>
          <Image
            src={graph_how_it_works_desktop}
            margin={{ vertical: "xsmall" }}
          />
          <Text alignSelf="center">{data.belowImage}</Text>
        </>
      )
    }
  </ResponsiveContext.Consumer>
);

const Collapse = styled.div`
  padding: 0 40px;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "auto" : 0)};
  overflow: hidden;
`;

const VerticalSteps = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;

  > div {
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
  }
`;

const Step = styled(Column)`
  padding: 30px;
`;

const FloatingDescription = styled(Text)`
  position: absolute;
  top: 45%;
  width: 30%;
  padding: 20px 0;
  background: white;
  text-align: left;
`;

export { MoreDetails, ResponsiveDetailsImage };
