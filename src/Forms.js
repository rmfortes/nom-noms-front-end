import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Forms.css";
import { Redirect } from "react-router-dom";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: "",
      Password: "",
      redirect: null,
    };
  }

  usernameLogin = (e) => {
    e.preventDefault();
    this.setState({
      Username: e.target.value,
    });
    console.log(this.state);
  };

  passwordLogin = (e) => {
    e.preventDefault();
    this.setState({
      Password: e.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let URL = "https://nom-noms-api.herokuapp.com/user/";

    fetch(`${URL}${this.state.Username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (
          this.state.Username == data.Username &&
          this.state.Password == data.Password
        ) {
          console.log("success");
          this.setState({ redirect: "/user"`${this.state.Username}` });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <form
          className={`forms-${this.props.type}`}
          onSubmit={this.handleSubmit}
        >
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
            value="Login"
          ></input>
        </form>
      </div>
    );
  }
}

export default Forms;
