import React, { FormEvent, useState, useEffect } from "react";
import { Todo } from "../types";
import TodoItem from "./Todo";

export default function List({
  items,
  handleDeleteTodo,
}: {
  items: Todo[];
  handleDeleteTodo: (item: Todo) => void;
}) {
  const [currentList, setCurrentList] = useState<Array<Todo>>(items);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setCurrentList(items);
  }, [items]);

  function handleSearchInput(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();
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
      <form
        className="searchTodo__form"
        onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
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
          return <TodoItem item={item} handleDeleteTodo={handleDeleteTodo} />;
        })}
      </ul>
    </>
  );
}
