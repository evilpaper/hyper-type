import React, { ReactNode, useState } from "react";
import { Greetings } from "./components/Greetings";
import Modal from "./components/Modal";
import useOutsideClick from "./hooks/useOutsideClick";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface Props {
  items: Todo[];
}

// A list as a function

// function List({ items }: { items?: Todo[] }) {
//   return (
//     <ul>
//       {items?.map((item, index) => {
//         return (
//           <li key={index}>
//             <p>{item.text}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// Same lista as a function component

const List: React.FC<Props> = ({ items }) => {
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
};

const initialList = [
  { id: 1, text: "First todo", done: false },
  { id: 2, text: "Second todo", done: false },
  { id: 3, text: "Third todo", done: false },
  { id: 4, text: "Fourth todo", done: false },
];

function App() {
  const [list, setList] = useState(initialList);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setIsModalOpen(false);
  });

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
        <List items={list} />
      </section>
    </div>
  );
}

export default App;
