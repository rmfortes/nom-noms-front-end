import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
    };
  }

  usernameCreated = (e) => {
    e.preventDefault();
    if (e.target.type === "text") {
      this.setState({
        username: e.target.value,
      });
    }
  };

  passwordCreated = (e) => {
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
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    return (
      <div>
        <form
          className={`forms-${this.props.type}`}
          onSubmit={this.handleSubmit}
        >
          {" "}
          <input
            type="text"
            placeholder="Create Username"
            onChange={this.usernameCreated}
          ></input>
          <input
            type="text"
            placeholder="Create Password"
            onChange={this.passwordCreated}
          ></input>
          <Link to="/user">
            <input
              onSubmit={this.handleSubmit}
              type="submit"
              placeholder="submit"
            ></input>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreateUser;
