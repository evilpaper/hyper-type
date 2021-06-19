import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from "./components/Modal";
import { Greetings } from "./components/Greetings";
import Users from "./components/Users";
import Todos from "./components/Todos";
import Landing from "./components/Landing";
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
          <Link to="/">
            <Greetings message="Hyper Type" />
          </Link>

          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link to="/todos">Todos</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/users">Users</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/countries">Countries</Link>
              </li>
            </ul>
          </nav>
          <button onClick={() => setIsModalOpen(true)}>Sign in</button>
        </section>
        <section className="main">
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/todos">
              <Todos />
            </Route>
            <Route path="/countries">
              <h1>Hello, I'm countries</h1>
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
