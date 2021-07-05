import React from "react";

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
    <nav className="pagination-nav">
      <div className="pagination-meta">
        {" "}
        {!isLoading && <p>{totalItems} Countries</p>}
        {!isLoading && (
          <p className="pagination-counter">
            page {currentPage} / {totalPages}
          </p>
        )}
      </div>

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
