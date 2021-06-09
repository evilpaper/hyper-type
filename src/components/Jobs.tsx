import React, { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://react-tutorial-demo.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, []);

  return <h1>I'm Jobs</h1>;
}
