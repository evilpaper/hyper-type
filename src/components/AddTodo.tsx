import React, { FormEvent, useState } from "react";

export default function AddTodo({
  handleAddTodo,
}: {
  handleAddTodo: (text: string) => void;
}) {
  const [newTodo, setNewTodo] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (newTodo === "") return;
    handleAddTodo(newTodo);
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
