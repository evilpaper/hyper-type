import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from "./common/Modal/Modal";
import { Greetings } from "./components/Greetings/Greetings";
import Users from "./components/Users/Users";
import Todos from "./components/Todos/Todos";
import Landing from "./components/Landing/Landing";
import Countries from "./components/Countries/Countries";
import RedditSearch from "components/RedditSearch/RedditSearch";
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
              <li className="nav-list-item">
                <Link to="/reddit">Reddit Search</Link>
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
              <Countries />
            </Route>
            <Route path="/reddit">
              <RedditSearch />
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
