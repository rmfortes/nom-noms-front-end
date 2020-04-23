import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header.js";
import Forms from "./Forms.js";
import CreateUser from "./CreateUser.js";
import Login from "./Login";
import DummyComponent from "./DummyComponent";
import Body from './Body';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
  }

  addUser(user) {
    this.setState({ user: user });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="login">
            <Link to="/users">{Login}</Link>
            <Route path="/" 
              render={routerProps => 
              <Login addUser={this.addUser}
            {...routerProps}
          {...this.state} />} />
            
            
            

           
            <Route path="/" component={DummyComponent} />
            <Route path="/user" render={routerProps => <Body addUser={this.addUser}
            {...routerProps}
            {...this.state}/>}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
