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
      <ul className="countries">
        {countries &&
          countries.map(
            (
              country: {
                name: string;
                capital: string;
              },
              index: number
            ) => {
              return (
                <li className="country" key={index}>
                  <h1>{country.name}</h1>
                  <h3>Capital</h3>
                  <h3>{country.capital ? country.capital : "N/A"}</h3>
                </li>
              );
            }
          )}
      </ul>
    </>
  );
}
