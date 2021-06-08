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

  function addTodo(todo: Todo) {
    setTodos([...todos, todo]);
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
          <AddTodo addTodo={addTodo} />
          <TodoList items={todos} />
        </article>
        <Jobs />
      </section>
    </div>
  );
}

export default App;
