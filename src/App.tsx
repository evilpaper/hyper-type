import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Modal from "./common/Modal/Modal";
import { Greetings } from "./components/Greetings/Greetings";
import Users from "./components/Users/Users";
import Todos from "./components/Todos/Todos";
import Landing from "./components/Landing/Landing";
import Countries from "./components/Countries/Countries";
import RedditSearch from "components/RedditSearch/RedditSearch";
import useOutsideClick from "./hooks/useOutsideClick";
import styled from "styled-components";
import "./App.css";

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
`;

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

        <Header>
          <Link to="/">
            <Greetings message="Hyper Type" />
          </Link>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item">
                <NavLink activeClassName="selected" to="/todos">
                  Todos
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink activeClassName="selected" to="/users">
                  Users
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink activeClassName="selected" to="/countries">
                  Countries
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink activeClassName="selected" to="/reddit">
                  Reddit Search
                </NavLink>
              </li>
            </ul>
          </nav>
          <button onClick={() => setIsModalOpen(true)}>Sign in</button>
        </Header>
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
