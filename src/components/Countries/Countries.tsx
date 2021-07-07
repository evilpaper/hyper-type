import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Emoji from "../Emoji";
import Pagination from "../../common/Pagination/Pagination";

const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
  gap: 2em;
`;

const Capital = styled.h4`
  color: dimgray;
`;

const Item = styled.li`
  padding: 1em;
  border: 1px solid slategray;
  border-radius: 0.4em;
  overflow: auto;

  &:hover {
    background-color: dodgerblue;
    color: white;

    ${Capital} {
      color: white;
    }
  }
`;

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
      <List>
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
                <Item key={index}>
                  <Emoji label="flag" symbol={country.emoji} />
                  <div>
                    <h4>{country.name}</h4>
                    <Capital>
                      {country.capital ? country.capital : "N/A"}
                    </Capital>
                  </div>
                </Item>
              );
            }
          )}
      </List>
    </>
  );
}
