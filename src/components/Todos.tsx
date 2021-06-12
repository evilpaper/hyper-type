import React, { useState } from "react";
import { Todo } from "../types";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  function deletetodo(todo: Todo) {
    const updatedTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(updatedTodos);
  }

  function handleAddTodo(text: string) {
    const id: number = todos.length + 1;
    const newTodo: Todo = { id: id, text: text, done: false };
    setTodos([...todos, newTodo]);
  }
  return (
    <article>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList items={todos} deleteTodo={deletetodo} />
    </article>
  );
}