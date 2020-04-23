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

  usernameCreated = e => {
    e.preventDefault();

    this.setState({
      Username: e.target.value,
    });
    // console.log(this.state);
  };

  passwordCreated = e => {
    e.preventDefault();
    console.log(e.target.value);

    this.setState({
      Password: e.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("hello");
    let URL = `https://nom-noms-api.herokuapp.com/user`;
    let localURL = "http://localhost:4000/user";
    fetch(localURL, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-type": "application/json" },
    }).catch(err => console.log(err));
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
          {/* <Link to="/user"> */}
          <input
            onSubmit={this.handleSubmit}
            type="submit"
            placeholder="submit"
          ></input>
          {/* </Link> */}
        </form>
      </div>
    );
  }
}

export default CreateUser;
