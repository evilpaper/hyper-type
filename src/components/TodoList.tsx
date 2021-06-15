import React, { FormEvent, useState, useEffect } from "react";
import { Todo } from "../types";
import TodoItem from "./Todo";

export default function List({
  items,
  onDeleteTodo,
}: {
  items: Todo[];
  onDeleteTodo: (item: Todo) => void;
}) {
  const [currentList, setCurrentList] = useState<Array<Todo>>(items);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setCurrentList(items);
  }, [items]);

  function handleSearchInput(e: FormEvent<HTMLInputElement>) {
    setSearch(e.currentTarget.value);
    const searchPhrase = e.currentTarget.value;

    if (e.currentTarget.value !== "") {
      const searchResult = currentList.filter((item) =>
        item.text.includes(searchPhrase)
      );
      setCurrentList(searchResult);
    } else {
      setCurrentList(items);
    }
  }

  return (
    <>
      <form className="searchTodo__form">
        <label htmlFor="searchTodo"></label>
        <input
          className="searchTodo__input"
          type="text"
          name="searchTodo"
          placeholder="Search..."
          value={search}
          onChange={handleSearchInput}
        />
      </form>
      <ul>
        {currentList.map((item) => {
          return <TodoItem item={item} onDeleteTodo={onDeleteTodo} />;
        })}
      </ul>
    </>
  );
}
