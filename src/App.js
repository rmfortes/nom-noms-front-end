import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header.js";
import Forms from "./Forms.js";
import CreateUser from "./CreateUser.js";
import Buttons from "./Buttons.js";
import Body from "./Body.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="login">
          <Forms />

          <Route path="/" exact component={Body}>
            <Buttons label="Login" type="login" />
          </Route>

          <CreateUser />
          <Route path="/user" exact component={Body}>
            <Buttons label="Submit" type="submit" />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
