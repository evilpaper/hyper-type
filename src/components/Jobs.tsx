import React, { useEffect, useState } from "react";

interface Job {
  name: {};
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
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
                <h2>I'm a job</h2>
              </li>
            );
          })}
      </ul>
    </>
  );
}
