import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Forms.css";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  usernameLogin = (e) => {
    e.preventDefault();
    if (e.target.type === "text") {
      this.setState({
        username: e.target.value,
      });
    }
  };

  passwordLogin = (e) => {
    e.preventDefault();
    if (e.target.type === "text") {
      this.setState({
        password: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    let URL = `https://nom-noms-api.herokuapp.com/user`;
    fetch(URL, {
      method: "GET",
      body: JSON.stringify(this.state),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    return (
      <div>
        <form className={`forms-${this.props.type}`}
        onSubmit={this.handleSubmit}>
          {" "}
          <input
            type="text"
            placeholder="Username"

            onChange={this.usernameLogin}
          ></input>
          <input
            type="text"
            placeholder="Password"

            onChange={this.passwordLogin}
          ></input>
          <Link to="/user"><input
            onSubmit={this.handleSubmit}
            type="Submit"
            placeholder="submit"
          ></input></Link>
        </form>
      </div>
    );
  }
}

export default Forms;
