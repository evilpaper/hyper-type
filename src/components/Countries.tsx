import React, { useEffect, useState } from "react";

export default function Countries() {
  useEffect(() => {
    fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query {
            countries {
              name
              capital
            }
          }
        `,
      }),
    }).then((response) => response.json().then((data) => console.log(data)));
  });

  return <h1>Hello, I'm the countries component</h1>;
}
