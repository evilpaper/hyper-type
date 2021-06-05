import React, { FormEvent, useState } from "react";
import { Greetings } from "./components/Greetings";
import Modal from "./components/Modal";
import useOutsideClick from "./hooks/useOutsideClick";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

function List({ items }: { items?: Todo[] }) {
  return (
    <ul>
      {items?.map((item, index) => {
        return (
          <li key={index}>
            <p>{item.text}</p>
          </li>
        );
      })}
    </ul>
  );
}

const initialTodos = [
  { id: 1, text: "First todo", done: false },
  { id: 2, text: "Second todo", done: false },
  { id: 3, text: "Third todo", done: false },
  { id: 4, text: "Fourth todo", done: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setIsModalOpen(false);
  });

  function handleChange(e: FormEvent<HTMLInputElement>) {
    setNewTodo(e.currentTarget.value);
  }

  function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const updatedTodos = [...todos, { id: 4, text: newTodo, done: false }];
    setTodos(updatedTodos);
    setNewTodo("");
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
        <form>
          <label htmlFor="todo">What needs to be done?</label>
          <input
            type="text"
            name="todo"
            value={newTodo}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Add</button>
        </form>
        <List items={todos} />
      </section>
    </div>
  );
}

export default App;
