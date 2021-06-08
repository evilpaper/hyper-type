import React, { useEffect } from "react";

export default function Jobs() {
  useEffect(() => {
    fetch("https://react-tutorial-demo.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <h1>I'm Jobs</h1>;
}
