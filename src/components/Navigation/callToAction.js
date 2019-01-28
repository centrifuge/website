import React from "react";
import { Button } from "grommet";
import { StaticQuery, graphql } from "gatsby";
import { Item } from "../List";

const CallToAction = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulControlCenterNavigationCta {
          edges {
            node {
              enableNavigationCallToAction
              buttonUrl
              buttonText
            }
          }
        }
      }
    `}
    render={data => {
      const {
        enableNavigationCallToAction,
        buttonText,
        buttonUrl
      } = data.allContentfulControlCenterNavigationCta.edges[0].node;

      if (enableNavigationCallToAction) {
        return (
          <Item>
            <Button primary label={buttonText} href={buttonUrl} />
          </Item>
        );
      }

      return null;
    }}
  />
);

export default CallToAction;
