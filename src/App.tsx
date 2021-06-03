import React, { ReactNode, useState } from "react";
import { Greetings } from "./components/Greetings";
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

function App() {
  const initialList = [
    { id: 1, text: "First todo", done: false },
    { id: 2, text: "Second todo", done: false },
    { id: 3, text: "Third todo", done: false },
    { id: 4, text: "Fourth todo", done: false },
  ];

  const [list, setList] = useState(initialList);

  return (
    <div className="app">
      <div className="header">
        <Greetings message="Hyper Type" />
        <button>Sign in</button>
      </div>

      <List items={list} />
    </div>
  );
}

export default App;
