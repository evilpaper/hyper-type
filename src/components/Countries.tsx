import React, { useEffect, useState } from "react";
import Emoji from "./Emoji";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
                  <Emoji label="flag" symbol={country.emoji} />
                  <div>
                    <h4>{country.name}</h4>
                    <h4 className="capital">
                      {country.capital ? country.capital : "N/A"}
                    </h4>
                  </div>
                </li>
              );
            }
          )}
      </ul>
    </>
  );
}
