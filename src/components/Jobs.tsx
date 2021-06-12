import React, { useEffect, useState } from "react";

interface Job {
  id: number;
  name: string;
  email: string;
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
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
                <h2>{job.name}</h2>
              </li>
            );
          })}
      </ul>
    </>
  );
}
