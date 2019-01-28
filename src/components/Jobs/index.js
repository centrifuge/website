import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { ExternalLink } from "../Links";

const Jobs = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => {
      const jobs = data.allLambdaBreezy.edges;

      if (jobs.length > 0) {
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
      }

      return (
        <>
          <p>There are no open positions at this time.</p>
        </>
      );
    }}
  />
);

export default Jobs;
