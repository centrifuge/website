import React from "react";
import { StaticQuery, graphql } from "gatsby";

import {ExternalLink} from "../Links";

const Jobs = () => (
  <StaticQuery
    query={query}
    render={data => {
      const jobs = data.allLambdaBreezy.edges;

      return (
        <>
          <p>Jobs</p>
          {jobs.map(job => {
            job = job.node;

            return (
              <>
                <h2>
                  <ExternalLink href={job.link}>{job.position}</ExternalLink>
                </h2>
                <pre>
                  <code>{JSON.stringify(job, null, 2)}</code>
                </pre>
              </>
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
