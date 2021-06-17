import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from "./components/Modal";
import { Greetings } from "./components/Greetings";
import Users from "./components/Users";
import Todos from "./components/Todos";
import useOutsideClick from "./hooks/useOutsideClick";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setIsModalOpen(false);
  });

  return (
    <Router>
      <div className="app">
        {isModalOpen && (
          <Modal onOutsideClick={ref}>
            <p>Hey, I'm a modal. Click anywhere outside of me to close.</p>
          </Modal>
        )}

        <section className="header">
          <Greetings message="Hyper Type" />
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <button onClick={() => setIsModalOpen(true)}>Sign in</button>
        </section>
        <section className="main">
          <h1>
            Hyper Type is a collection of random widget presented in the systems
            default monospace font.
          </h1>
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/todos">
              <Todos />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
