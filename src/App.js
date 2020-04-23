import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header.js";
import Forms from "./Forms.js";
import CreateUser from "./CreateUser.js";

import Body from "./Body.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.createUser = this.createUser.bind(this);
  }

  createUser(users) {
    this.setState({ users: users });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ users: 'hellohello' })
    console.log("I've been submitted");
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="login">

            <Route
              path="/"
              render={(routerProps) => <Forms onSubmit={this.handleSubmit}
              {...routerProps}
              {...this.state} />}
              exact
              component={Body}>
            </Route>

            <Route 
              path="/users"
              render={(routerProps) => <CreateUser onSubmit={this.handleSubmit}
              {...routerProps}
              {...this.state} />}
               exact component={Body} 
               />

            {/* <Body /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
