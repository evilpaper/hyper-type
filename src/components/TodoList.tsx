import React from "react";
import { Todo } from "../types";

export default function List({
  items,
  deleteTodo,
}: {
  items: Todo[];
  deleteTodo: (item: Todo) => void;
}) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index} className="todo__item">
            <div className="todo__main">
              <input className="todo__checkbox" type="checkbox" />
              <p>{item.text}</p>
            </div>
            <button className="todo__delete" onClick={() => deleteTodo(item)}>
              <svg width="20" height="20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
              <p>Delete</p>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
