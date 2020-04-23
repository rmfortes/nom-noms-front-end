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
  
      this.setState({
        username: e.target.value,
      });
    console.log(this.state)
  };

  passwordLogin = (e) => {
    e.preventDefault();
    
      this.setState({
        password: e.target.value,
      });
    
      console.log(this.state);
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
    .catch(err => console.log(err))
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
          <input
            onSubmit={this.handleSubmit}
            type="Submit"
            placeholder="submit"
          ></input>
        </form>
      </div>
    );
  }
}

export default Forms;
