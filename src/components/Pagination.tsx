import React from "react";

interface Props {
  itemsPerPage: number;
  totalItems: number;
}

export default function Pagination({ itemsPerPage, totalItems }: Props) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination-list">
        {pageNumbers.map((n: number) => {
          return (
            <li key={n}>
              <a className="pagination-item" href="!#">
                {" "}
                {n}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
