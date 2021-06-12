import React, { useEffect, useState } from "react";

interface Job {
  id: {
    value: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.results);
      });
  }, []);

  return (
    <>
      <h1>Jobs</h1>
      <ul>
        {jobs &&
          jobs.map((job, index) => {
            return (
              <li key={index}>
                <h2>{job.name.first}</h2>
                <h2>{job.name.last}</h2>
                <h2>{job.id.value}</h2>
              </li>
            );
          })}
      </ul>
    </>
  );
}
