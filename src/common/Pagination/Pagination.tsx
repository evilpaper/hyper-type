import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`;

const Meta = styled.div`
  display: flex;
`;

const Counter = styled.p`
  margin-left: 1em;
  color: dimgray;
`;

const List = styled.ul`
  display: flex;
`;

const StyledButton = styled.button`
  padding: 0 0.8em;
  border: 1px solid gainsboro;
  border-radius: 0;

  &:focus {
    background-color: gainsboro;
  }

  &:hover {
    background-color: gainsboro;
    color: black;
  }
`;

interface Props {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  isLoading: boolean;
  handlePaginationClick: (page: number) => void;
}

export default function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  isLoading = false,
  handlePaginationClick,
}: Props) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Navigation>
      <Meta>
        {" "}
        {!isLoading && <p>{totalItems} Countries</p>}
        {!isLoading && (
          <Counter className="pagination-counter">
            page {currentPage} / {totalPages}
          </Counter>
        )}
      </Meta>
      <List>
        {pageNumbers.map((n: number) => {
          return (
            <li key={n}>
              <StyledButton onClick={() => handlePaginationClick(n)}>
                {n}
              </StyledButton>
            </li>
          );
        })}
      </List>
    </Navigation>
  );
}
