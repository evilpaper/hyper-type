import React, { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, []);

  return <h1>I'm Jobs</h1>;
}
