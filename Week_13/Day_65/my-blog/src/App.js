import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from "./routes";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <Link to={routes.posts}>Posts</Link>
          </li>
          <li>
            <Link to={routes.authors}>Authors</Link>
          </li>
          <li>
            <Link to={routes.home}>Home</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact={true} path={routes.posts}>
          <h2>posts</h2>
        </Route>
        <Route path={routes.authors}>
          <h2>authors</h2>
        </Route>
        <Route path={routes.home}>
          <h2>home</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
