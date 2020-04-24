import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header.js";
import Forms from "./Forms.js";
import CreateUser from "./CreateUser.js";

import Body from "./Body";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
      profiles: [],
    };
    this.setProfiles = this.setProfiles.bind(this);
  }
  setProfiles(profiles) {
    this.setState({ profiles: profiles });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="login">
            <Route path="/" exact component={Forms} />
            <Route path="/" exact component={CreateUser} />

            <Route
              path="/user"
              render={routerProps => (
                <Body
                  setProfiles={this.setProfiles}
                  addUser={this.usernameCreated}
                  {...routerProps}
                  {...this.state}
                />
              )}
              // {loggedIn ? <Redirect to="/user:Username" /> : <Body />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
