import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { ExternalLink } from "../Links";

const Jobs = () => (
  <StaticQuery
    query={query}
    render={data => {
      const jobs = data.allLambdaBreezy.edges;

      return (
        <>
          {jobs.map((job, index) => {
            job = job.node;

            return (
              <div key={index}>
                <p>
                  <ExternalLink href={job.link}>{job.position}</ExternalLink>
                </p>
              </div>
            );
          })}
        </>
      );
    }}
  />
);

const query = graphql`
  query JobsQuery {
    allLambdaBreezy(filter: { position: { ne: "String" } }) {
      totalCount
      edges {
        node {
          id
          position
          link
          location
          offering
        }
      }
    }
  }
`;

export default Jobs;
