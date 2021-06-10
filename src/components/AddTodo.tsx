import React, { FormEvent, useState } from "react";
import { Todo } from "../types";

export default function AddTodo({
  addTodo,
}: {
  addTodo: (todo: Todo) => void;
}) {
  const [newTodo, setNewTodo] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (newTodo === "") return;
    addTodo({ id: 4, text: newTodo, done: false });
    setNewTodo("");
  }

  function handleChange(e: FormEvent<HTMLInputElement>) {
    setNewTodo(e.currentTarget.value);
  }

  return (
    <form className="addTodo__form">
      <label htmlFor="todo"></label>
      <input
        type="text"
        name="todo"
        value={newTodo}
        onChange={handleChange}
        placeholder="What needs to be done"
      />
      <button className="addTodo__button" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
