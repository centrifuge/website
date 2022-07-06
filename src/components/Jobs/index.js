import React, { useState, useEffect } from "react";
import { Button } from "grommet";

export function useLeverPostings(site) {
  const [postings, setPostings] = useState();
  useEffect(() => {
    (async () => {
      const url = `https://api.lever.co/v0/postings/${site}?mode=json`;
      const response = await fetch(url);
      const postings = await response.json();
      setPostings(postings);
    })();
  }, [site]);
  return postings;
}

const Jobs = () => {
  const jobs = useLeverPostings("centrifuge");

  if (jobs === undefined) {
    return <p>Loading...</p>;
  }

  if (jobs.length === 0) {
    return <p>There are no open positions at this time.</p>;
  }

  return (
    <>
      {jobs.map((job, index) => (
        <div key={job.id}>
          <p>
            <Button
              plain
              rel="noopener noreferrer"
              target="_blank"
              href={job.hostedUrl}
              style={{ textAlign: "left" }}
            >
              {job.text}
            </Button>
          </p>
        </div>
      ))}
    </>
  );
};

export default Jobs;
