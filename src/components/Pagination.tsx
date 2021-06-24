import React, { FormEvent } from "react";

interface Props {
  itemsPerPage: number;
  totalItems: number;
  handlePaginationClick: (page: number) => void;
}

export default function Pagination({
  itemsPerPage,
  totalItems,
  handlePaginationClick,
}: Props) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-nav">
      <p>{totalItems} Countries</p>
      <ul className="pagination-list">
        {pageNumbers.map((n: number) => {
          return (
            <li key={n}>
              <button
                onClick={() => handlePaginationClick(n)}
                className="pagination-item"
              >
                {n}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
