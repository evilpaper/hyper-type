import React from "react";
import { Todo } from "../types";

export default function List({
  items,
  onDeleteTodo,
}: {
  items: Todo[];
  onDeleteTodo: (item: Todo) => void;
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
            <button className="todo__delete" onClick={() => onDeleteTodo(item)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.5"
                  width="24.7487"
                  height="3.53553"
                  rx="1.76777"
                  transform="rotate(45 2.5 0)"
                />
                <rect
                  x="20"
                  y="2.5"
                  width="24.7487"
                  height="3.53553"
                  rx="1.76777"
                  transform="rotate(135 20 2.5)"
                />
              </svg>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
