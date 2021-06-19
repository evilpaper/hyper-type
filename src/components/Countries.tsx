import React, { useEffect, useState } from "react";

export default function Countries() {
  const [countries, setCountries] = useState([]);

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
    }).then((response) =>
      response.json().then((data) => setCountries(data.data.countries))
    );
  }, []);

  return (
    <>
      <h1>Hello, I'm the countries component</h1>
      <ul>
        {countries &&
          countries.map(
            (
              country: {
                name: string;
              },
              index: number
            ) => {
              return <li key={index}>{country.name}</li>;
            }
          )}
      </ul>
    </>
  );
}
