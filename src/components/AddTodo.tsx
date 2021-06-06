import React, { FormEvent, useState } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export default function AddTodo({
  addTodo,
}: {
  addTodo: (todo: Todo) => void;
}) {
  const [newTodo, setNewTodo] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    addTodo({ id: 4, text: newTodo, done: false });
    setNewTodo("");
  }

  function handleChange(e: FormEvent<HTMLInputElement>) {
    setNewTodo(e.currentTarget.value);
  }

  return (
    <form>
      <label htmlFor="todo">What needs to be done?</label>
      <input type="text" name="todo" value={newTodo} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
