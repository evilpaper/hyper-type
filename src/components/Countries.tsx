import React, { useEffect, useState } from "react";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
              emoji
            }
          }
        `,
      }),
    })
      .then((response) =>
        response.json().then((data) => {
          setCountries(data.data.countries);
          setIsLoading(false);
        })
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <ul className="countries">
        {isLoading && <p>Loading...</p>}
        {countries &&
          countries.map(
            (
              country: {
                name: string;
                capital: string;
                emoji: string;
              },
              index: number
            ) => {
              return (
                <li className="country" key={index}>
                  <h1>{country.name}</h1>
                  <p>Capital</p>
                  <h3>{country.capital ? country.capital : "N/A"}</h3>
                  <span role="img" aria-label="sheep">
                    {country.emoji}
                  </span>
                </li>
              );
            }
          )}
      </ul>
    </>
  );
}
