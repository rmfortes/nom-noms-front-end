import React, { Component } from "react";
import "./Forms.css";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    this.usernameLogin = this.usernameLogin.bind(this);
    this.passwordLogin = this.passwordLogin.bind(this);
  }

  usernameLogin = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      username: e.target.username,
    });

    //this.setState { username: e.target.value}
  };

  passwordLogin = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      password: e.target.password,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
    let URL = `http://localhost:4000/user`;
    fetch(URL)
      .then(res => res.json())
      .then(res => console.log(res));

    //fetch here
  };
  render() {
    return (
      <div>
        <form className={`forms-${this.props.type}`}>
          {" "}
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.usernameLogin}
          ></input>
          <input
            type="text"
            placeholder="Password"
            value={this.state.password}
            onChange={this.passwordLogin}
          ></input>
          <input
            onClick={this.handleSubmit}
            type="Submit"
            placeholder="submit"
          ></input>
        </form>
      </div>
    );
  }
}

export default Forms;
