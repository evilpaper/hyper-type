import React, { useEffect, useState } from "react";
import Emoji from "../Emoji";
import Pagination from "../../common/Pagination/Pagination";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

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

  function handlePaginationClick(page: number) {
    setCurrentPage(page);
  }

  // Get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Pagination
        totalItems={countries.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        handlePaginationClick={handlePaginationClick}
        isLoading={isLoading}
      />
      <ul className="countries">
        {isLoading && <p>Loading...</p>}
        {currentItems &&
          currentItems.map(
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
