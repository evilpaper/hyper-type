import React, { useState } from "react";

import Modal from "./components/Modal";

import { Greetings } from "./components/Greetings";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Jobs from "./components/Jobs";

import useOutsideClick from "./hooks/useOutsideClick";
import "./App.css";
import { Todo } from "./types";

const initialTodos = [
  { id: 1, text: "First todo", done: false },
  { id: 2, text: "Second todo", done: false },
  { id: 3, text: "Third todo", done: false },
  { id: 4, text: "Fourth todo", done: false },
];

function App() {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setIsModalOpen(false);
  });

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
    <div className="app">
      {isModalOpen && (
        <Modal onOutsideClick={ref}>
          <p>Hey, I'm a modal. Click anywhere outside of me to close.</p>
        </Modal>
      )}
      <section className="header">
        <Greetings message="Hyper Type" />
        <button onClick={() => setIsModalOpen(true)}>Sign in</button>
      </section>
      <section className="main">
        <article>
          <AddTodo handleAddTodo={handleAddTodo} />
          <TodoList items={todos} deleteTodo={deletetodo} />
        </article>
        <Jobs />
      </section>
    </div>
  );
}

export default App;
