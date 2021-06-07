import React from "react";
import { Todo } from "../types";

export default function List({ items }: { items: Todo[] }) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index} className="todo__item">
            <input className="todo__checkbox" type="checkbox" />
            <p>{item.text}</p>
          </li>
        );
      })}
    </ul>
  );
}
