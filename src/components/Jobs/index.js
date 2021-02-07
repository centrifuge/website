import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Button } from "grommet";

const Jobs = () => (
  <StaticQuery
    query={graphql`
      query JobsQuery {
        allLever {
          edges {
            node {
              id
              text
              hostedUrl
            }
          }
        }
      }
    `}
    render={data => {
      const jobs = data.allLever.edges
        .filter(edge => edge.node.id !== "c0f7a908-8d9e-4f3c-9b15-a4f81e033484")
        .map(edge => ({ ...edge.node }));

      if (jobs.length > 0) {
        return (
          <>
            {jobs.map((job, index) => (
              <div key={index}>
                <p>
                  <Button
                    plain
                    rel="noopener noreferrer"
                    target="_blank"
                    href={job.hostedUrl}
                  >
                    {job.text}
                  </Button>
                </p>
              </div>
            ))}
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
